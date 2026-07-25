import { run } from 'uebersicht'

export const refreshFrequency = 10000

// ── Configure ──────────────────────────────────────────────
const VPN_SUBNET = '10.2.0.'   // your VPN tunnel's subnet prefix
const BUTTONS = [
    { icon: '󰒘', label: 'VPN',   cmd: 'open -a "ProtonVPN"' },  // add your VPN here
    { icon: '', label: 'Drive', cmd: 'open "/Users/username/path-to-cloud-storage/"' },  // add the path to your cloud storage here
    { icon: '', label: 'Pass',  cmd: 'open -a "Proton Pass"' },  // add your Password Manager here
]
// ───────────────────────────────────────────────────────────

export const className = `
    background: transparent;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    right: 68px;
    bottom: 16px;
    min-height: 203px;
    min-width: 375px;
`

export const command = `
    IFACE=$(networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2; exit}')
    [ -z "$IFACE" ] && IFACE=en0

    COMPUTER_NAME=$(scutil --get ComputerName)

    USERNAME=$(whoami)

    LOCAL_IP=$(ipconfig getifaddr $IFACE)

    WIFI=$(ifconfig $IFACE | grep -q "status: active" && echo "true" || echo "false")

    SAMPLE1=$(netstat -ib | awk -v i="$IFACE" '$1 == i && /Link#/ {print $7, $10; exit}')
    sleep 1
    SAMPLE2=$(netstat -ib | awk -v i="$IFACE" '$1 == i && /Link#/ {print $7, $10; exit}')
    RX1=$(echo $SAMPLE1 | awk '{print $1+0}')
    TX1=$(echo $SAMPLE1 | awk '{print $2+0}')
    RX2=$(echo $SAMPLE2 | awk '{print $1+0}')
    TX2=$(echo $SAMPLE2 | awk '{print $2+0}')
    DOWN=$(( ($RX2-$RX1)/1024 ))
    UP=$(( ($TX2-$TX1)/1024 ))

    VPN_ACTIVE=$(ifconfig | grep -q "${VPN_SUBNET}" && echo "true" || echo "false")

    VOLUME=$(osascript -e "output volume of (get volume settings)" 2>/dev/null || echo 0)

    MUTED=$(osascript -e "output muted of (get volume settings)" 2>/dev/null || echo false)

    printf '%s\\x1f' "$COMPUTER_NAME" "$USERNAME" "$LOCAL_IP" "$WIFI" "$DOWN" "$UP" "$VPN_ACTIVE" "$VOLUME" "$MUTED"
`

export const render = ({ output }) => {
    if (!output) return null

    const [name, username, ip, wifi, down, up, vpn, volume, muted] = output.trim().split("\x1f").map(s => s.trim())
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/\s?(AM|PM)/i, '');
    const monthDay = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '.');
    const wifiActive = wifi === "true"
    const vpnActive = vpn === "true"
    const isMuted = muted?.trim() === "true"

    return (
        <div>
            <style>{`
                .wrapper {
                    background: #e3e3e3;
                    clip-path: polygon(2px 0, calc(100% - 2px) 0, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 10px 100%, 0 calc(100% - 10px), 0 2px);
                    font-family: 'SpaceMono Nerd Font', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    transition: min-height 300ms ease;
                    min-height: 20px;
                    min-width: 100%;
                    text-align: left;
                    white-space: nowrap;
                }
                .wrapper:hover {
                    min-height: 203px;
                }
                .border {
                    background: #17181c;
                    clip-path: polygon(2px 0, calc(100% - 2px) 0, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 10px 100%, 0 calc(100% - 10px), 0 2px);
                    inset-block: 20px 0.5px;
                    inset-inline: 0.5px;
                    padding: 12px 16px 10px;
                    position: absolute;
                }
                .datetime,
                .system,
                .flex-row {
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    justify-content: space-between;
                    width: 100%;
                }
                .system {
                    border-block-end: 1px solid #2e2f32;
                    margin-block-end: 10px;
                    padding-block-end: 8px;
                }
                .col {
                    width: calc(50% - 10px)
                }
                .col-sm {
                    width: calc((100% - 60px) / 4)
                }
                .col-md {
                    width: calc((100% - 40px) / 3)
                }
                .datetime {
                    background-color: #e3e3e3;    
                    padding-inline: 16px;
                    box-sizing: border-box;
                }
                .datetime .date,
                .datetime .time,
                .datetime .vpn {
                    color: #030408;
                    font-family: 'SpaceMono Nerd Font', sans-serif;
                    font-size: 12px;
                    line-height: 1.6;
                    margin-bottom: 0;
                }
                .network {
                    border-block-end: 1px solid #2e2f32;
                    margin-block-end: 14px;
                    padding-block-end: 8px;
                }
                .env,
                .vpn,
                .wifi,
                .ip,
                .volume,
                .up,
                .down {
                    color: #e3e3e3;
                    font-size: 12px;
                    line-height: 1.5;
                    margin-bottom: 0;
                }
                .icon {
                    display: inline-block;
                    font-family: 'SpaceMono Nerd Font', sans-serif;
                    font-size: 10px;
                    width: 16px;
                }
                div.icon {
                    color: #fdf400;
                }
                .title {
                    color: #fdf400;
                    display: inline-block;
                    font-family: "Barlow", sans-serif;
                    font-size: 12px;
                    text-transform: uppercase;
                }
                .sep {
                    color: #e3e3e3;
                    display: inline-block;
                    text-align: center;
                    width: 20px;
                }
                .green {
                    color: #7ca893;
                }
                .red {
                    color: #e61e5b;
                }
                .dim {
                    color: #666666;
                }
                .green.dim {
                    color: #397979;
                    padding-inline-end: 5px;
                }
                .red.dim {
                    color: #c5003c;
                    padding-inline-end: 5px;
                }
                .right {
                    display: inline-block;
                    text-align: right;
                }
                .button {
                    background-color: #e3e3e3; 
                    clip-path: polygon(1px 0, calc(100% - 1px) 0, 100% 1px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 1px 100%, 0 calc(100% - 1px), 0 1px);
                    color: #030408;
                    cursor: pointer;
                    font-family: "Barlow", sans-serif;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 1.5;
                    padding-block-end: 2px;
                    text-align: center;
                    text-transform: uppercase;
                    width: 100%; 
                    transition: background-color 300ms ease;
                }
                .button:hover {
                    background-color: #fdf400; 
                }
                .button .icon {
                    text-align: left;
                }
                .bar {
                    background-color: #2e2f32;
                    height: 1px;
                    margin-block: 15px 7px;
                    position: relative;
                    width: 100%  
                }
                .bar .inner {
                    background-color: #fdf400;
                    display: block;
                    inset-block: 0;
                    inset-inline-start: 0;
                    position: absolute;
                }
            `}</style>
            <div className="wrapper">
                <div className="datetime">
                    <div className="col-sm">
                        <div className="date">{monthDay}</div>
                    </div>
                    <div className="col-sm">
                        <div className="vpn"><span className={vpnActive ? "green dim" : "red dim"}>󰒘 </span></div>
                    </div>
                    <div className="col right">
                        <div className="time">󱑍 {time}</div>
                    </div>
                </div>
                <div className="border">
                    <div className="system">
                        <div className="col">
                            <div className="title"><div className="icon"></div>User</div>
                            <div className="env">{username} @ {name}</div>
                        </div>
                        <div className="col">
                            <div className="title"><div className="icon"></div>Node</div>
                            <div className="ip">{ip}</div>
                        </div>
                    </div>    
                    <div className="network">
                        <div className="flex-row">
                            <div className="col">
                                <div className="wifi">
                                    <div className="title"><div className="icon">{wifiActive ? "󰖩" : "󰖪"}</div>Network</div>
                                    <div className="sep">:</div>
                                    <span className={vpnActive ? "green" : "red"}>{vpnActive ? "Secure" : "Insecure"}</span>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="up">
                                    <div className="icon"></div>{up}<span className="dim">kb/s</span>  
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="down">
                                    <div className="icon"></div>{down}<span className="dim">kb/s</span> 
                                </div>   
                            </div>
                        </div>  
                    </div>
                    <div className="buttons">
                        <div className="flex-row">
                            {BUTTONS.map(({ icon, label, cmd }) => (
                                <div className="col-md" key={label}>
                                    <div className="button" onClick={() => run(cmd)}><span className="icon">{icon}</span>{label}</div>
                                </div>
                            ))}
                        </div>    
                    </div>
                    <div className="bar">
                        <div className="inner" style={{ width: `${isMuted ? 0 : volume}%` }}></div>
                    </div>
                    <div className="volume">
                        <div className="flex-row">
                            <div className="title"><div className="icon"></div>Audio</div>
                            <div className="right">
                                <span className={isMuted ? "red" : ""}>{isMuted ? "Muted" : `${volume}%`}</span>
                            </div> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
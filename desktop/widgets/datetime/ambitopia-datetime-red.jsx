
export const refreshFrequency = 10000; 

export const className = `
    color: #f22613;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: normal;
    left: 50%;
    text-align: center;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    top: 20%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
`;

export const render = () => {
    const now = new Date();

    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    const monthDay = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    return (
        <div>
            <div className="day">{dayName}</div>
            <div className="date">{monthDay}</div>
            <div className="time">— {time} —</div>
        </div>
    );
};

export const updateState = (event, previousState) => {
};

const style = document.createElement('style');
style.textContent = `
    .day {
        font-family: 'Ndot 57', sans-serif;
        font-size: 4vw; 
        letter-spacing: 0.05em;
        line-height: 1;
        margin-bottom: -10px;
    }
    .date {
        font-family: 'SpaceMono Nerd Font', sans-serif;
        font-size: 0.9vw;
        margin-bottom: 3px;
        opacity: 0.9;
    }
    .time {
        font-family: 'SpaceMono Nerd Font', sans-serif;
        font-size: 0.7vw;
        opacity: 0.8;
    }
`;
document.head.appendChild(style);
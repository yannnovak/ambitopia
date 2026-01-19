# Cava

I almost didn't include this because it's so fiddly for the Mac, but I was already finished and it took no time to complete, so I included it anyway.

## Preview

![Screenshot with yellow wallpaper and showing Cava in yellow](../../assets/screenshots/cava-yellow.png)

<p align="center">
    Yellow Variant
</p>
<br>

![Screenshot with red wallpaper and showing Cava in red](../../assets/screenshots/cava-red.png)

<p align="center">
    Red Variant
</p>

## Installation

### 00. Before you start
- Make sure Homebrew is installed ([install here](https://brew.sh))
- See [Installation Guide](../../INSTALL.md) if you haven't set up prerequisites yet
- [Cava GitHub](https://github.com/karlstav/cava)

### 01. Install Cava
```sh
brew install cava
```

### 02. Create config directory
```sh
mkdir -p ~/.config/cava/themes
```

### 03. Copy theme files
```sh
cp dotfiles/cava/ambitopia-yellow.conf ~/.config/cava/themes/
cp dotfiles/cava/ambitopia-red.conf ~/.config/cava/themes/
```

### 04. Configure theme

Edit `~/.config/cava/config` and add one of the following:

**For yellow variant:**
```
theme = ambitopia-yellow.conf
```

**For red variant:**
```
theme = ambitopia-red.conf
```

### 05. Run Cava
```sh
cava
```

## Notes

Cava on macOS has some limitations compared to Linux. You will need to install a loopback device - there are detailed instructions with a few options [here](https://github.com/karlstav/cava). Once you choose one, you will need to configure your audio source manually in the config file.
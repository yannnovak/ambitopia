# JankyBorders

I didn't know how much I needed this until I was using it. If I had a dollar for every time I messaged my husband a hexcode...

## Preview

![Screenshot with yellow wallpaper and showing JankyBorders in yellow](../../assets/screenshots/ghostty-yellow.png)

<p align="center">
    Yellow Variant
</p>
<br>

![Screenshot with red wallpaper and showing JankyBorders in red](../../assets/screenshots/ghostty-red.png)

<p align="center">
    Red Variant
</p>

## Installation

### 00. Before you start
- Make sure Homebrew is installed ([install here](https://brew.sh))
- If you skipped the Installation Guide, install Micro (instructions [here](../../INSTALL.md)) or follow the whole [Installation Guide](../../INSTALL.md)
- [JankyBorders GitHub](https://github.com/FelixKratz/JankyBorders)

### 01. Install JankyBorders
```sh
brew tap FelixKratz/formulae
brew install borders
```

### 02. Create config directory
```sh
mkdir -p ~/.config/borders
```

### 03. Copy theme file

Choose your variant:

**For yellow variant:**
```sh
cp dotfiles/borders/yellow/bordersrc ~/.config/borders/bordersrc
```

**For red variant:**
```sh
cp dotfiles/borders/red/bordersrc ~/.config/borders/bordersrc
```

### 04. Configure blacklist (optional)

If you want to exclude certain apps from having borders, edit the config:
```sh
micro ~/.config/borders/bordersrc
```

Find the `blacklist` section and add apps you don't want bordered. Press `Ctrl+S` to save, `Ctrl+Q` to quit.

### 05. Start borders
```sh
brew services start borders
```
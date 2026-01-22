# DateTime Widget

A minimal date and time widget for Übersicht felt like the perfect entry point for me to learn how to create widgets. I have some ideas for more...

## Preview

![Screenshot with yellow wallpaper showing datetime widget in yellow](../../../assets/screenshots/datetime-yellow.png)

<p align="center">
    Yellow Variant
</p>
<br>

![Screenshot with red wallpaper showing datetime widget in red](../../../assets/screenshots/datetime-red.png)

<p align="center">
    Red Variant
</p>

## Installation

### 00. Before you start
- Make sure Homebrew is installed ([install here](https://brew.sh))
- If you skipped the Installation Guide, install SpaceMono Nerd Font and Ndot 57 (instructions [here](../../../INSTALL.md))
- [Übersicht Website](https://tracesof.net/uebersicht/)

### 01. Install Übersicht
```sh
brew install --cask ubersicht
```

### 02. Copy widget file

Choose your variant and copy the corresponding file:

**For yellow variant:**
```sh
cp desktop/widgets/datetime/ambitopia-datetime-yellow.jsx ~/Library/Application\ Support/Übersicht/widgets/
```

**For red variant:**
```sh
cp desktop/widgets/datetime/ambitopia-datetime-red.jsx ~/Library/Application\ Support/Übersicht/widgets/
```

### 03. Enable your variant

Click the Übersicht menu bar icon and you'll see the widget listed. Enable the one you chose if it's not already enabled:

- **For yellow variant:** Enable `ambitopia-datetime-yellow.jsx`
- **For red variant:** Enable `ambitopia-datetime-red.jsx`

### 04. Position the widget

Click the Übersicht menu bar icon, find your widget, then select → **Send to Main Display** (if using multiple monitors)

Click the Übersicht menu bar icon, find your widget, then select → **Send to Background** (so it stays behind windows)

The widget will now display in the center-top of your screen.
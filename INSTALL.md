# Installation Guide

The setup guide for Ambitopia is terminal-centric, which can be scary for some macOS users, so I tried to make it as approachable as possible.

## Prerequisites

### 01. Install Homebrew
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 02. Install common dependencies
```sh
brew install git
```

### 03. Install Micro (terminal text editor)
```sh
brew install micro
```

### 04. Install SpaceMono Nerd Font
```sh
curl -L https://github.com/ryanoasis/nerd-fonts/releases/latest/download/SpaceMono.zip -o SpaceMono.zip
unzip SpaceMono.zip -d SpaceMono
cp SpaceMono/*.ttf ~/Library/Fonts/
rm -rf SpaceMono SpaceMono.zip
```

### 05. Install Ndot 57 Font
```sh
git clone --depth 1 https://github.com/xeji01/nothingfont.git
cp nothingfont/fonts/Ndot57-Regular.otf ~/Library/Fonts/
rm -rf nothingfont
```

### 06. Clone this repository
```sh
git clone https://github.com/yannnovak/ambitopia.git
cd ambitopia
```

## System Configuration

Configure macOS appearance settings:

**System Settings → Appearance:**
- Appearance: **Dark**
- Accent color: **Yellow** or **Red** (match your theme variant)
- Highlight color: **Yellow** or **Red** (match your theme variant)

Set wallpaper:

Navigate to `desktop/wallpaper/`, choose your resolution folder, then right-click on your variant → **Set as Desktop Picture**

## Installing Themes

Each application has its own installation guide. Choose the ones you want to theme:

### Dotfiles

- [Ghostty](dotfiles/ghostty/README.md) - Terminal emulator
- [Micro](dotfiles/micro/README.md) - Text editor
- [JankyBorders](dotfiles/borders/README.md) - Window borders
- [Fastfetch](dotfiles/fastfetch/README.md) - System info
- [btop](dotfiles/btop/README.md) - System monitor
- [Kew](dotfiles/kew/README.md) - Terminal music player
- [Cava](dotfiles/cava/README.md) - Audio visualizer

### Themes

- [Vivaldi](themes/vivaldi/README.md) - Browser
- [Thunderbird](themes/thunderbird/README.md) - Mail client
- [VSCode/VSCodium](themes/vscode/README.md) - Editor
- [Standard Notes](themes/standard-notes/README.md) - Note-taking app
- [Slack](themes/slack/README.md) - Messaging app
- [Raycast](themes/raycast/README.md) - App launcher
- [Live](themes/live/README.md) - Digital audio workstation

### Widgets

- [Datetime](desktop/widgets/datetime/README.md) - Desktop date/time widget

## Optional

### Menu Bar

The screenshots use [Ice](https://github.com/jordanbaird/Ice) for menu bar appearance, but I may move to [Bartender](https://www.macbartender.com) when I upgrade to macOS Tahoe.
```sh
brew install --cask ice
```

### cmatrix (Matrix effect)

While cmatrix can't be themed with config files, you can run it with Ambitopia colors:
```sh
brew install cmatrix
```

**Usage:**
```sh
cmatrix -s -C yellow  # Yellow variant
cmatrix -s -C red     # Red variant
```

> [!NOTE]
> - Most configs go in `~/.config/`
> - You can mix and match yellow/red variants, but I recommend sticking to one or the other.
> - Some applications may require a restart to apply themes.
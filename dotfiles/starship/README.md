# Starship

I loved making this theme because it was so fiddly and fun to do and makes such a big difference when you open a terminal in Ghostty or VSCodium.

## Preview

![Screenshot with yellow wallpaper and showing Starship in yellow](../../assets/screenshots/ghostty-yellow.png)

<p align="center">
    Yellow Variant
</p>
<br>

![Screenshot with red wallpaper and showing Starship in red](../../assets/screenshots/ghostty-red.png)

<p align="center">
    Red Variant
</p>

## Installation

### 00. Before you start
- Make sure Homebrew is installed ([install here](https://brew.sh))
- If you skipped the Installation Guide, install Micro and SpaceMono Nerd Font (instructions [here](../../INSTALL.md)) or follow the whole [Installation Guide](../../INSTALL.md)
- [Starship](https://starship.rs/)

### 01. Install Starship
```sh
brew install starship
```

### 02. Enable Starship in Zsh

Open your Zsh config file:
```sh
micro ~/.zshrc
```

Add the following line at the end of the file:
```sh
eval "$(starship init zsh)"
```

Save and close the file. 

### 03. Copy config file

Choose your variant:

**For yellow variant:**
```sh
cp dotfiles/starship/yellow/starship.toml ~/.config/starship.toml
```

**For red variant:**
```sh
cp dotfiles/starship/red/starship.toml ~/.config/starship.toml
```

### 04. Launch a new terminal window

The theme will apply to all new terminal sessions.

> [!NOTE]
> - If you are using a different shell than Zsh, you can find the correct command for step 2 here: [Starship](https://starship.rs/).
> - Due to a weird configuration I have, I have to keep NodeJS disabled, if you use NodeJS you can enable it in the theme of your choice.
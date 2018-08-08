---
layout: download-page
title: Download - Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu & Linux Mint
---

Works on:

* Ubuntu 16.04 (all flavours) or later
* Linux Mint 18 or later
* elementaryOS 0.4 or later

## 1. OpenRazer

If you haven't already, you'll need the [OpenRazer](https://openrazer.github.io) driver and daemon.

You can install this by typing these commands in a terminal:

```
sudo add-apt-repository ppa:openrazer/stable
sudo apt update
sudo apt install openrazer-meta
```

{:.grey}
See the [project website](http://openrazer.github.io/#ubuntu) for original instructions.
Be sure to restart the computer after installing.

---

## 2. Polychromatic

Polychromatic can be installed via this PPA:

```
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update
sudo apt install polychromatic
```

The PPA is recommended as it keeps the application up-to-date.

### Development Builds
These builds deliver the newest features and improvements quicker, but are not well tested and may be buggy at times.

```
sudo add-apt-repository ppa:polychromatic/daily
sudo apt update
sudo apt install polychromatic
```

If you later decide to revert back to the stable builds:

```
sudo apt remove polychromatic
sudo rm /etc/apt/sources.list.d/polychromatic-ubuntu-daily*
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update
sudo apt install polychromatic
```

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

First, you'll need [OpenRazer](https://openrazer.github.io). Type these commands in a terminal:

```
sudo add-apt-repository ppa:openrazer/stable
sudo apt update
sudo apt install openrazer-meta
```

{:.grey}
For original instructions, see the [OpenRazer website](http://openrazer.github.io/#ubuntu).
Be sure to restart the computer after installing.

---

## 2. Polychromatic

Polychromatic can be installed via the official PPA:

```
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update
sudo apt install polychromatic
```

The PPA is recommended as it keeps the application up-to-date.

### Testing Builds

If you're interested in testing the newest stuff before it goes stable,
consider using the daily/development builds. While these deliver the newest
features and improvements quicker, they haven't been as extensively tested.

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

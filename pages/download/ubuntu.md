---
layout: download-page
title: Download - Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu & Linux Mint
class: download
---

Works on:

* Ubuntu 16.04 (all flavours) or later
* Linux Mint 18 or later
* elementaryOS 0.4 or later
* Pop!_OS 20.04 or later

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

## Fancy beta testing?

If you're interested in testing the latest and greatest,
consider adding the development "daily" PPA. These will deliver the newest
features and improvements as soon as they are ready for testing.

```
sudo add-apt-repository ppa:polychromatic/daily
sudo apt update
sudo apt install polychromatic
```

To opt out of testing, use [Software & Updates] to remove
the `polychromatic/daily` PPA and continue using `polychromatic/stable`.

[Software & Updates]: https://wiki.ubuntu.com/SoftwareAndUpdatesSettings

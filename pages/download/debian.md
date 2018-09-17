---
layout: download-page
title: Download - Debian
permalink: /download/debian/
distro: debian
distro_name: Debian
---

## 1. OpenRazer

First, you'll need to install [OpenRazer](https://openrazer.github.io).
Packages and instructions can be found on the [openSUSE Build System](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=openrazer-meta).

{:.grey}
For original instructions, see the [OpenRazer website](http://openrazer.github.io/#debian).
Be sure to restart the computer after installing.

---

## 2. Polychromatic

The packages are built for compatibility in both Ubuntu and Debian.
To ensure the latest updates, add the repository and signing key as follows:

```
echo "deb http://ppa.launchpad.net/polychromatic/stable/ubuntu xenial main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```

For development builds (which may be unstable and cutting edge), replace `stable` with `daily`.

Alternately, .deb files are provided in the [releases notes](https://github.com/lah7/polychromatic/releases/latest/).

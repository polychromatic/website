---
layout: download-page
title: Download - Debian
permalink: /download/debian/
distro: debian
distro_name: Debian
---

## 1. OpenRazer

If you haven't already, you'll need the [OpenRazer](https://openrazer.github.io) driver and daemon.

Packages and instructions can be [obtained from openSUSE Build System](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=openrazer-meta).

{:.grey}
See the [project website](http://openrazer.github.io/#debian) for original instructions.
Be sure to restart the computer after installing.

---

## 2. Polychromatic

Packages built for Ubuntu are also compatible with Debian. To ensure the latest updates,
you can add the repository and signing key as follows:

```
echo "deb http://ppa.launchpad.net/polychromatic/stable/ubuntu xenial main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt update
sudo apt install polychromatic
```

For development builds (which may be unstable and cutting edge), use `daily` instead of `stable`.

Alternately, standalone packages are available from the [releases notes](https://github.com/lah7/polychromatic/releases/latest/).

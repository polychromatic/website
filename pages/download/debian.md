---
layout: download-page
title: Download for Debian
permalink: /download/debian/
distro: debian
distro_name: Debian
distro_accent: '215,7,81'
class: download

backends:
    openrazer: https://software.opensuse.org/download.html?project=hardware%3Arazer&package=openrazer-meta
---

{% capture stable %}

To add the repository and install, open the Terminal:

```shell
echo "deb [signed-by=/usr/share/keyrings/polychromatic.gpg] http://ppa.launchpad.net/polychromatic/stable/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
curl -fsSL 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xc0d54c34d00160459588000e96b9cd7c22e2c8c5' | sudo gpg --dearmour -o /usr/share/keyrings/polychromatic.gpg
sudo apt-get update

# Full installation
sudo apt install polychromatic

# Or, selectively install components
sudo apt install polychromatic-controller polychromatic-tray-applet polychromatic-cli
```
{% endcapture %}

{% capture preview %}

Get the latest features, fixes and improvements as soon as
[as they are developed](https://github.com/polychromatic/polychromatic/commits/master).

```shell
echo "deb http://ppa.launchpad.net/polychromatic/preview/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update

# Full installation
sudo apt install polychromatic

# Or, selectively install components
sudo apt install polychromatic-controller polychromatic-tray-applet polychromatic-cli
```
{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    preview=preview
%}

> **What's this, Ubuntu?!**
>
> Launchpad acts as the repository host for this package archive.
> The packages and dependencies are compatible between Debian and Ubuntu.
>
> The series are mapped as follows:
>
> * `focal` for Debian 10 "Buster"
> * `jammy` for Debian 11 "Bullseye"
> * `noble` for Debian 12 "Bookworm" (Qt 6)

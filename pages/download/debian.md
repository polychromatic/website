---
layout: download-page
title: Download for Debian
permalink: /download/debian/
class: download

distro_name: Debian
distro_icon: debian.svg
distro_accent: '215,7,81'
order: 2
---

{% capture stable %}

To add the repository and install, open the Terminal:

```shell
echo "deb [signed-by=/usr/share/keyrings/polychromatic.gpg] http://ppa.launchpad.net/polychromatic/stable/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
curl -fsSL 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xc0d54c34d00160459588000e96b9cd7c22e2c8c5' | sudo gpg --dearmour -o /usr/share/keyrings/polychromatic.gpg

sudo apt-get update

sudo apt install polychromatic

```
{% endcapture %}

{% capture preview %}

Get the latest changes in development from the [master branch](https://github.com/polychromatic/polychromatic/commits/master).

```shell
echo "deb http://ppa.launchpad.net/polychromatic/preview/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5

sudo apt-get update

sudo apt install polychromatic
```

This repository is automatically uploaded when the tests pass.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    preview=preview
%}


### OpenRazer

OpenRazer is in the [official Debian repositories], but it can be a few versions behind.
If you need to use a device, feature or fix that was [released in a newer version], add [OpenRazer's repository for Debian].

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

[official Debian repositories]: https://packages.debian.org/search?keywords=openrazer
[released in a newer version]: https://github.com/openrazer/openrazer/releases
[OpenRazer's repository for Debian]: https://software.opensuse.org/download.html?project=hardware%3Arazer&package=openrazer-meta


### About the repository

Launchpad acts as the repository host for this package archive.
Packages and dependencies are compatible and tested between Debian and Ubuntu.

The series are mapped as follows:

* `focal` for Debian 10 "Buster" (Qt 5)
* `jammy` for Debian 11 "Bullseye" (Qt 5)
* `noble` for Debian 12 "Bookworm" (Qt 6)

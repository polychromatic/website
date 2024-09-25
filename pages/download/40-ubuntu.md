---
layout: download-page
title: Download for Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu
distro_accent: '225,63,32'
class: download
---

Ubuntu includes derivatives like:

* Ubuntu 18.04 (all flavours) or later
* Linux Mint 19 or later
* elementaryOS 0.4 or later
* KDE Neon
* Pop!_OS 20.04 or later
* Zorin OS 11 or later

{% capture stable %}

To add the repository and install, open the Terminal:

```shell
sudo add-apt-repository ppa:openrazer/stable
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update

sudo apt install polychromatic
```

{% endcapture %}

{% capture preview %}

Get the latest changes in development from the [master branch](https://github.com/polychromatic/polychromatic/commits/master).

```shell
sudo add-apt-repository ppa:openrazer/daily
sudo add-apt-repository ppa:polychromatic/preview
sudo apt update

sudo apt install polychromatic
```

This repository is automatically uploaded when the tests pass.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    preview=preview
%}

If you wish to switch the branches later, go to [Software & Updates](https://wiki.ubuntu.com/SoftwareAndUpdatesSettings)
→ **Other Software** tab.


### OpenRazer

OpenRazer is in the [official Ubuntu repositories], but it can be a few versions behind.
We recommend using OpenRazer's official PPA so you have the latest device support, features and fixes.

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

[official Ubuntu repositories]: https://packages.ubuntu.com/search?keywords=openrazer
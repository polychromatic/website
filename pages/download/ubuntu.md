---
layout: download-page
title: Download for Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu
distro_accent: '225,63,32'
class: download

backends:
    openrazer: https://openrazer.github.io/#ubuntu
---

> Derivatives include:
>
> * Ubuntu 18.04 (all flavours) or later
> * Linux Mint 19 or later
> * elementaryOS 0.4 or later
> * KDE Neon
> * Pop!_OS 20.04 or later
> * Zorin OS 11 or later
>

To install, open a Terminal (usually CTRL+ALT+T) and run these commands.

{% capture stable %}

```shell
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update

# Full installation
sudo apt install polychromatic

# Or, selectively install components
sudo apt install polychromatic-controller polychromatic-tray-applet polychromatic-cli
```


{% endcapture %}
{% capture testing %}

```shell
sudo add-apt-repository ppa:polychromatic/testing
sudo apt update

# Full installation
sudo apt install polychromatic

# Or, selectively install components
sudo apt install polychromatic-controller polychromatic-tray-applet polychromatic-cli
```

{% endcapture %}
{% capture edge %}

```shell
sudo add-apt-repository ppa:polychromatic/edge
sudo apt update

# Full installation
sudo apt install polychromatic

# Or, selectively install components
sudo apt install polychromatic-controller polychromatic-tray-applet polychromatic-cli
```

Successful builds are usually published within an hour of new commits.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
    edge=edge
%}

If you wish to switch the branches later, use [Software & Updates](https://wiki.ubuntu.com/SoftwareAndUpdatesSettings)
under the **Other Software** tab.

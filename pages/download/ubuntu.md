---
layout: download-page
title: Download for Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu & Derivatives
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

```
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update
sudo apt install polychromatic
```


{% endcapture %}
{% capture testing %}

```
sudo add-apt-repository ppa:polychromatic/testing
sudo apt update
sudo apt install polychromatic
```

{% endcapture %}
{% capture edge %}

```
sudo add-apt-repository ppa:polychromatic/edge
sudo apt update
sudo apt install polychromatic
```

Successful builds are usually published within an hour of new commits.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
    edge=edge
%}

Packages for this distribution are split, so only specific components
can be installed if desired:

* `polychromatic` (installs all components)
* `polychromatic-controller`
* `polychromatic-tray-applet`
* `polychromatic-cli`

If you wish to switch the branches later, use [Software & Updates](https://wiki.ubuntu.com/SoftwareAndUpdatesSettings)
under the **Other Software** tab.

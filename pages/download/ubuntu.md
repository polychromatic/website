---
layout: download-page
title: Download for Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu & Derivatives
class: download
---

Latest Requirements:

* Ubuntu 18.04 (all flavours) or later
* Linux Mint 19 or later
* elementaryOS 0.4 or later
* Pop!_OS 20.04 or later
* Zorin OS 11 or later

# 1. OpenRazer

First, you'll need to install [OpenRazer for Ubuntu](https://openrazer.github.io/#ubuntu).

# 2. Polychromatic

{% capture stable %}

Choose this for a tried & tested experience.

However, it currently contains v0.3.12, an older version built around the
BlackWidow Chroma keyboard and devices supported before 2018. If yours is newer,
consider **Edge** for the time being. While the new code is still in development,
that version will greatly improve hardware support for you.

If you prefer to wait for the next version, stick to **Stable** or **Testing**.

Open a Terminal (usually <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>) and run these commands:

```
sudo add-apt-repository ppa:polychromatic/stable
sudo apt install polychromatic
```


{% endcapture %}
{% capture testing %}

Choose this to get new versions of the software as soon as it's ready for beta
testing. This aims for a somewhat stable experience, but bugs could slip through.

This is currently the same version as the stable branch.

```
sudo add-apt-repository ppa:polychromatic/testing
sudo apt install polychromatic
```

{% endcapture %}
{% capture edge %}

Choose this to be first to receive new features and improvements from the
`master` branch.

```
sudo add-apt-repository ppa:polychromatic/edge
sudo apt install polychromatic
```

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
    edge=edge
%}

If you wish to switch the branches later, use [Software & Updates](https://wiki.ubuntu.com/SoftwareAndUpdatesSettings)
under the **Other Software** tab.

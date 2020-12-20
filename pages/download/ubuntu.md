---
layout: download-page
title: Download for Ubuntu
permalink: /download/ubuntu/
distro: ubuntu
distro_name: Ubuntu & Derivatives
class: download
---

Works on:

* Ubuntu 16.04 (all flavours) or later
* Linux Mint 18 or later
* elementaryOS 0.4 or later
* Pop!_OS 20.04 or later
* Zorin OS 11 or later

{% capture stable %}

### 1. OpenRazer

First, you'll need to install OpenRazer. Follow the instructions on
[the OpenRazer website](https://openrazer.github.io/#ubuntu).

### 2. Polychromatic

This will keep the application up-to-date with the rest of the system.

Open a Terminal (usually <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>) and run these commands:

```
sudo add-apt-repository ppa:polychromatic/stable
sudo apt update
sudo apt install polychromatic
```


{% endcapture %}
{% capture testing %}

Despite new development taking place in the `master` branch - there isn't a
working replacement for the effect editor at the moment.

As soon as testing for the next generation of the software is ready, this PPA
will be the first to receive the new features and improvements.

```
sudo add-apt-repository ppa:polychromatic/daily
sudo apt update
sudo apt install polychromatic
```

These packages are updated no more then once daily, and only if there were
new changes.

To opt out of testing, use [Software & Updates](https://wiki.ubuntu.com/SoftwareAndUpdatesSettings)
to remove the `polychromatic/daily` PPA and add/replace with `polychromatic/stable`.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
%}

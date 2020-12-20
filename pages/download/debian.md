---
layout: download-page
title: Download for Debian
permalink: /download/debian/
distro: debian
distro_name: Debian
class: download
---

## 1. OpenRazer

First, you'll need to install [OpenRazer for Debian](https://openrazer.github.io#debian).

---

## 2. Polychromatic

The packages are built for compatibility in both Ubuntu and Debian.
To ensure the latest updates, add the repository and signing key as follows:

> This repository intends change in future to separate Ubuntu and Debian.
> Until then, the current one used today will continue to work.

{% capture stable %}
```
echo "deb http://ppa.launchpad.net/polychromatic/stable/ubuntu bionic main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% capture testing %}
```
echo "deb http://ppa.launchpad.net/polychromatic/daily/ubuntu bionic main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
%}


Alternately, `.deb` files are provided in the [releases notes](https://github.com/polychromatic/polychromatic/releases/latest/).

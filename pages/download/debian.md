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

This version is currently v0.3.12, it was built around the
BlackWidow Chroma keyboard and devices supported before 2018. If yours is newer,
consider **Edge** for the time being. While the new code is still in development,
that version will greatly improve hardware support for you.

If you prefer to wait for the next version, stick to **Stable** or **Testing**.

```
echo "deb http://ppa.launchpad.net/polychromatic/stable/ubuntu focal main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% capture testing %}

Choose this to get new versions of the software as soon as it's ready for beta
testing. This aims for a somewhat stable experience, but bugs could slip through.

This is currently the same version as the stable branch.

```
echo "deb http://ppa.launchpad.net/polychromatic/testing/ubuntu focal main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% capture edge %}

Choose this to be first to receive new features and improvements from the
`master` branch.

```
echo "deb http://ppa.launchpad.net/polychromatic/edge/ubuntu focal main" | sudo tee -a /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    testing=testing
    edge=edge
%}


Alternately, `.deb` files are provided in the [release notes](https://github.com/polychromatic/polychromatic/releases/latest/).

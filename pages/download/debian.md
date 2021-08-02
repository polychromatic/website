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

To ensure the latest updates, add the repository and signing key below.
Alternately, packages can be obtained from the [release notes](https://github.com/polychromatic/polychromatic/releases),
although the software won't stay up-to-date that way.

{% capture stable %}

```
echo "deb http://ppa.launchpad.net/polychromatic/stable/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% capture testing %}

```
echo "deb http://ppa.launchpad.net/polychromatic/testing/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 96B9CD7C22E2C8C5
sudo apt-get update
sudo apt-get install polychromatic
```
{% endcapture %}

{% capture edge %}

```
echo "deb http://ppa.launchpad.net/polychromatic/edge/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/polychromatic.list
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

Packages for this distribution are split, so only specific components
can be installed if desired:

* `polychromatic` (installs all components)
* `polychromatic-controller`
* `polychromatic-tray-applet`
* `polychromatic-cli`

> **What this, Ubuntu?!**
>
> Launchpad acts as the repository host for this package archive.
> The packages and dependencies are compatible between Debian and Ubuntu.

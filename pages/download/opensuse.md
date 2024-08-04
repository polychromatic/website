---
layout: download-page
title: Download for openSUSE
permalink: /download/opensuse/
distro: opensuse
distro_name: openSUSE
distro_accent: '115,186,37'
class: download

backends:
    openrazer: https://software.opensuse.org/download.html?project=hardware%3Arazer&package=openrazer-meta
---

### One Click Install

[![](/assets/img/distros/opensuse-small.svg) Tumbleweed](https://software.opensuse.org/ymp/hardware:razer/openSUSE_Tumbleweed/polychromatic.ymp){:.btn}
[![](/assets/img/distros/opensuse-small.svg) Leap 15.5](https://software.opensuse.org/ymp/hardware:razer/openSUSE_Leap_15.4/polychromatic.ymp){:.btn}

### Or... using the Terminal

For Tumbleweed:

```shell
sudo zypper addrepo https://download.opensuse.org/repositories/hardware:/razer/openSUSE_Tumbleweed/hardware:razer.repo
sudo zypper refresh
sudo zypper install polychromatic
```

For Leap 15.5:

```shell
sudo zypper addrepo https://download.opensuse.org/repositories/hardware:/razer/openSUSE_Leap_15.5/hardware:razer.repo
sudo zypper refresh
sudo zypper install polychromatic
```

Leap 15.6 is not supported.

For binary packages and instructions, visit the
[openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

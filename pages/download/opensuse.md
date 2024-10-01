---
layout: download-page
title: Download for openSUSE
permalink: /download/opensuse/
class: download

distro_name: openSUSE
distro_icon: opensuse.svg
distro_accent: '115,186,37'
order: 3
---

> Due to a packaging issue, Leap 15.6 is not supported at the moment.

### One Click Install

[![](/assets/img/distros/opensuse.svg) Tumbleweed](https://software.opensuse.org/ymp/hardware:razer/openSUSE_Tumbleweed/polychromatic.ymp){:.btn}
[![](/assets/img/distros/opensuse.svg) Leap 15.5](https://software.opensuse.org/ymp/hardware:razer/openSUSE_Leap_15.5/polychromatic.ymp){:.btn}
[![](/assets/img/distros/opensuse.svg) Leap 15.6](){:.btn .disabled}

### Or... using the Terminal

#### Tumbleweed

```shell
sudo zypper addrepo https://download.opensuse.org/repositories/hardware:/razer/openSUSE_Tumbleweed/hardware:razer.repo
sudo zypper refresh
sudo zypper install polychromatic
```

#### Leap 15.5

```shell
sudo zypper addrepo https://download.opensuse.org/repositories/hardware:/razer/openSUSE_Leap_15.5/hardware:razer.repo
sudo zypper refresh
sudo zypper install polychromatic
```

### OpenRazer

Polychromatic shares the repository with OpenRazer. It will be automatically installed when installing this software.

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

Alternate options can be found on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

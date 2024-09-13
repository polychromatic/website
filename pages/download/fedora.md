---
layout: download-page
title: Download for Fedora
permalink: /download/fedora/
distro: fedora
distro_name: Fedora
distro_accent: '81,162,218'
class: download
---

To add the repository, open the Terminal:

### Fedora 37+
```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Fedora_$(rpm -E %fedora)/hardware:razer.repo
sudo dnf install polychromatic
```

### Fedora Rawhide

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Fedora_Rawhide/hardware:razer.repo
sudo dnf install polychromatic
```


### OpenRazer

Polychromatic shares the repository with OpenRazer. It will be automatically installed when installing this software.

You'll need kernel headers present in order for the driver installation to succeed.

```shell
sudo dnf install kernel-devel
```

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

Alternate options can be found on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

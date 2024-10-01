---
layout: download-page
title: Download for Mageia
permalink: /download/mageia/
class: download

distro_name: Mageia
distro_icon: mageia.svg
distro_accent: '35,151,212'
order: 70
---

To add the repository, open the Terminal:

### Mageia 9

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Mageia_9/hardware:razer.repo
sudo dnf install polychromatic
```

### Mageia Cauldron

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Mageia_Cauldron/hardware:razer.repo
sudo dnf install polychromatic
```

### OpenRazer

Polychromatic shares the repository with OpenRazer. It will be automatically installed when installing this software.

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

Alternate options can be found on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

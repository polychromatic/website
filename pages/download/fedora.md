---
layout: download-page
title: Download for Fedora
permalink: /download/fedora/
class: download

distro_name: Fedora
distro_icon: fedora.svg
distro_accent: '81,162,218'
order: 2
---

To add the repository, open the Terminal:

### Fedora 41 and later
```shell
sudo dnf config-manager addrepo --from-repofile=https://openrazer.github.io/hardware:razer.repo
sudo dnf install polychromatic
```

### Fedora 40 and earlier
```shell
sudo dnf config-manager --add-repo https://openrazer.github.io/hardware:razer.repo
sudo dnf install polychromatic
```

### Fedora Rawhide

```shell
sudo dnf config-manager addrepo --from-repofile=https://download.opensuse.org/repositories/hardware:/razer/Fedora_Rawhide/hardware:razer.repo
sudo dnf install polychromatic
```

### Fedora Silverblue

See [Flatpak](/download/flatpak/).


### OpenRazer

Polychromatic shares the repository with OpenRazer. It will be automatically installed when installing this software.

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

Alternate options can be found on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

---
layout: download-page
title: Download for Fedora
permalink: /download/fedora/
distro: fedora
distro_name: Fedora
distro_accent: '81,162,218'
class: download

backends:
    openrazer: https://openrazer.github.io/#fedora
---

> Only stable builds are avaliable for this distribution.

To add the repository and install, open the Terminal:

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:razer/$(rpm -E %fedora)/hardware:razer.repo
sudo dnf install polychromatic
```

For binary packages and other Fedora versions, visit the
[openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

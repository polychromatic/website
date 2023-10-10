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

### 1. Add the repository

**Fedora 36+**
```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Fedora_$(rpm -E %fedora)/hardware:razer.repo
```

**Fedora Rawhide**

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/hardware:/razer/Fedora_Rawhide/hardware:razer.repo
```

### 2. Install the software
```shell
sudo dnf install polychromatic
```

For binary packages, visit the
[openSUSE Build Service](https://software.opensuse.org/download.html?project=hardware%3Arazer&package=polychromatic).

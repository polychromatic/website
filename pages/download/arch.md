---
layout: download-page
title: Download - Arch
permalink: /download/arch/
distro: arch
distro_name: Arch Linux
---

Packages kindly maintained by [z3ntu](https://github.com/z3ntu).

## 1. OpenRazer

If you haven't already, you'll need the [OpenRazer](https://openrazer.github.io) driver and daemon.

You can install [openrazer-meta](https://aur.archlinux.org/packages/openrazer-meta/) from the AUR.
However, due to a bug with `yaourt`, consider using `pacaur` instead.

```
pacaur -S openrazer-meta
```

{:.grey}
See the [project website](http://openrazer.github.io/#arch) for original instructions.
Be sure to restart the computer after installing.

---

## 2. Polychromatic

The packages are avaliable from the AUR:

* [polychromatic](https://aur.archlinux.org/packages/polychromatic/) - *stable*
* [polychromatic-git](https://aur.archlinux.org/packages/polychromatic-git/) - *development/testing*

```
yaourt -S polychromatic
pacaur -S polychromatic
```

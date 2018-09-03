---
layout: download-page
title: Download - Gentoo
permalink: /download/gentoo/
distro: gentoo
distro_name: Gentoo
---

Packages kindly maintained by [vifino](https://github.com/vifino).

## 1. OpenRazer

If you haven't already, you'll need the [OpenRazer](https://openrazer.github.io) driver and daemon.

```
sudo layman -a vifino-overlay
emerge app-misc/openrazer
```

{:.grey}
See the [project website](http://openrazer.github.io/#gentoo) for original instructions.
Be sure to restart the computer after installing.

---

## 2. Polychromatic

The [vifino-overlay](https://github.com/vifino/vifino-overlay/tree/master/app-misc/) contains a package for `polychromatic`.

```
sudo layman -a vifino-overlay
emerge app-misc/polychromatic
```

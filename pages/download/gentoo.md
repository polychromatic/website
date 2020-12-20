---
layout: download-page
title: Download for Gentoo
permalink: /download/gentoo/
distro: gentoo
distro_name: Gentoo
class: download
---

These packages are maintained by [vifino] in the [vifino-overlay] repository.
If there's a packaging or dependency problem, please [raise the issue] in their repository.

## 1. OpenRazer

```
sudo layman -a vifino-overlay
emerge app-misc/openrazer
```

{:.grey}
See the [OpenRazer website](http://openrazer.github.io/#gentoo) for original instructions.
Be sure to restart the computer after installing.

---

## 2. Polychromatic

```
sudo layman -a vifino-overlay
emerge app-misc/polychromatic
```


[vifino]: https://github.com/vifino/
[vifino-overlay]: https://github.com/vifino/vifino-overlay/tree/master/app-misc/
[raise the issue]: https://github.com/vifino/vifino-overlay/issues

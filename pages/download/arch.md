---
layout: download-page
title: Download for Arch
permalink: /download/arch/
distro: arch
distro_name: Arch Linux
class: download
---

## 1. OpenRazer

Install `openrazer-meta` from the AUR. [See the OpenRazer website](https://openrazer.github.io/#arch)
for further information.

## 2. Polychromatic

{% capture stable %}

This version is currently v0.3.12, it was built around the
BlackWidow Chroma keyboard and devices supported before 2018. If yours is newer,
consider **Edge** for the time being. While the new code is still in development,
that version will greatly improve hardware support for you.

If you prefer to wait for the next version, stick to this package.

Polychromatic is [available from the AUR](https://aur.archlinux.org/packages/polychromatic/).
For example, using a AUR helper like `yay`:

```
yay -S polychromatic
```

{% endcapture %}

{% capture edge %}

This contains the latest and greatest from the `master` branch. This one is
suggested if you have newer hardware which may not work well under v0.3.12.

Polychromatic is [available from the AUR](https://aur.archlinux.org/packages/polychromatic-git/).
For example, using a AUR helper like `yay`:

```
yay -S polychromatic-git
```

Depending on the AUR helper, you may need to manually update/rebuild this
package if you wish to get the latest changes.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    edge=edge
%}

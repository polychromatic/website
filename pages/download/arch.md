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

v0.3.12 will be replaced with v1.0.0 soon, but the effect editor is not yet finalized.
If you wish to create static key mappings on a BlackWidow keyboard, stick to this older
version for now.

Polychromatic is [available from the AUR](https://aur.archlinux.org/packages/polychromatic/).
For example, using a AUR helper like `yay`:

```
yay -S polychromatic
```

{% endcapture %}

{% capture testing %}

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
    testing=testing
%}

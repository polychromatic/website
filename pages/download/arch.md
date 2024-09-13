---
layout: download-page
title: Download for Arch
permalink: /download/arch/
distro: arch
distro_name: Arch Linux
distro_accent: '23,147,209'
class: download
---

{% capture stable %}

Polychromatic is [available from the AUR](https://aur.archlinux.org/packages/polychromatic/).

For example, using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers#Comparison_tables):

```shell
yay -S polychromatic
```

{% endcapture %}

{% capture preview %}

Instead, use [polychromatic-git](https://aur.archlinux.org/packages/polychromatic-git/)
for the latest changes in development from the [master branch](https://github.com/polychromatic/polychromatic/commits/master).

For example, using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers#Comparison_tables):

```shell
yay -S polychromatic-git
```

Depending on the AUR helper, you may need to manually update/rebuild this
package if you wish to get the latest changes.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    preview=preview
%}

AUR packages need to be manually rebuilt when there is a major Python version update.

### OpenRazer

OpenRazer is in the [official Arch Linux repositories](https://archlinux.org/packages/?q=openrazer),
and is automatically installed when installing this software.

> If your device is supported or fixed in an unreleased version, install
[openrazer-daemon-git], [openrazer-driver-dkms-git] and [python-openrazer-git] from the AUR instead.

You'll need to install [suitable kernel headers] for your system in order for the driver installation
to succeed, for example:

```shell
sudo pacman -S linux-headers
```

You'll need to add your user to the `plugdev` group. Reboot afterwards for changes to take effect.

```shell
sudo gpasswd -a $USER plugdev
```

**For SteamOS users,** while based on Arch, the driver is not easy to install due to the immutable filesystem
and repository differences. It's not officially supported, but do [let them know](https://github.com/openrazer/openrazer/issues)
if you have success.


[suitable kernel headers]: https://archlinux.org/packages/?sort=&repo=Core&repo=Extra&q=linux+-headers&maintainer=&flagged=
[openrazer-daemon-git]: https://aur.archlinux.org/packages/openrazer-daemon-git
[openrazer-driver-dkms-git]: https://aur.archlinux.org/packages/openrazer-driver-dkms-git
[python-openrazer-git]: https://aur.archlinux.org/packages/python-openrazer-git

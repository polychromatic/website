---
layout: download-page
title: Download for Arch
permalink: /download/arch/
class: download

distro_name: Arch Linux
distro_icon: arch.svg
distro_accent: '23,147,209'
order: 1
---

{% capture stable %}

Polychromatic is [available from the AUR](https://aur.archlinux.org/packages/polychromatic/).

For example, using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers#Comparison_tables):

```shell
yay -S polychromatic
```

Or manually:

```shell
git clone https://aur.archlinux.org/polychromatic.git
cd polychromatic
makepkg -si
```

{% endcapture %}

{% capture preview %}

Instead, use [polychromatic-git](https://aur.archlinux.org/packages/polychromatic-git/)
for the latest changes in development from the [master branch](https://github.com/polychromatic/polychromatic/commits/master).

For example, using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers#Comparison_tables):

```shell
yay -S polychromatic-git
```

You'll likely need to update/rebuild this package if you wish to get the latest changes.

Or manually:

```shell
git clone https://aur.archlinux.org/polychromatic-git.git
cd polychromatic
makepkg -si
```

Run `makepkg` again later to get the latest changes.

{% endcapture %}

{% include partials/download-tabs.html
    stable=stable
    preview=preview
%}

{:.warning}
> **Tip**
>
> Be sure to rebuild this package whenever there's a new major version of `python` (like 3.11 → 3.12).


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

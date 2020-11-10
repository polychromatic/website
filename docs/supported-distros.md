---
layout: docs
title: Distros and Desktop Environments
permalink: /docs/distros/
class: docs
---

## Official Packages

This software is natively provided on these distributions.

{:.has-icons}
| Distro                                            | Maintainer    |
|---------------------------------------------------|---------------|
![](/assets/img/distros/ubuntu.svg) [Ubuntu]`*`     | [lah7]
![](/assets/img/distros/debian.svg) [Debian]        | [lah7]
![](/assets/img/distros/arch.svg) [Arch / Manjaro]  | [z3ntu]
![](/assets/img/distros/fedora.svg) [Fedora]        | [z3ntu]
![](/assets/img/distros/opensuse.svg) [openSUSE]    | [z3ntu]
![](/assets/img/distros/mageia.svg) [Mageia]        | [z3ntu]
![](/assets/img/distros/solus.svg) [Solus]          | [z3ntu]

`*` Ubuntu includes flavours and derivatives, such as Linux Mint, elementaryOS and Pop!_OS

[Ubuntu]: /download/ubuntu/
[Debian]: /download/debian/
[Arch / Manjaro]: /download/arch/
[Fedora]: /download/fedora/
[openSUSE]: /download/opensuse/
[Mageia]: /download/mageia/
[Solus]: /download/solus/

## Universal Package Formats

Polychromatic does **not** offer AppImages, Flatpaks or Snaps at the moment.

## Community Supported

Distro                  | Repository                | Maintainer
------------------------|---------------------------|-----------------------|
Gentoo                  | [vifino/vifino-overlay]   | [vifino]
Red Hat / CentOS        | [moozhub/yum-repo-mooz]   | [moozhub]

If there's a dependency or packaging problem, please raise the issue on their repository.

[OpenRazer]: https://openrazer.github.io
[lah7]: https://github.com/lah7
[z3ntu]: https://github.com/z3ntu
[vifino]: https://github.com/vifno
[moozhub]: https://github.com/moozhub
[vifino/vifino-overlay]: https://github.com/vifino/vifino-overlay/tree/master/app-misc/
[moozhub/yum-repo-mooz]: https://github.com/moozhub/yum-repo-mooz

---

## Tray Applet vs Desktop Environments

The toolkit GTK powering some desktop environments consider "system tray" to
be obsolete. As a result, the tray applet may work straight out of the box and
will need additional steps.

| Environment   | Distro Family | Notes                                           |
| ------------- | ------------- | ----------------------------------------------- |
| GNOME Shell   | ![](/assets/img/distros/ubuntu.svg) Ubuntu   | Install [`gnome-shell-extension-appindicator`](https://packages.ubuntu.com/focal/gnome-shell-extension-appindicator) using your package manager.
| GNOME Shell   | ![](/assets/img/distros/arch.svg) Arch       | Install [`gnome-shell-extensions-appindicator-git`](https://aur.archlinux.org/packages/gnome-shell-extension-appindicator-git/) from the AUR.
| GNOME Shell   | Other         | Install the GNOME extension that provides AppIndicator support.
| Pantheon      | elementaryOS  | [This feature was removed in 5.0 "Juno"](https://www.reddit.com/r/elementaryos/comments/8zdrvz/any_way_to_get_back_indicators_in_juno/). You can restore the feature by [following these instructions](https://www.linuxuprising.com/2018/08/how-to-re-enable-ayatana-appindicators.html).

---

## Test Workbench

Before a major release is out, the latest version of these distros (at the time)
are checked to ensure the software is installable and looks good:

| Distro            | Desktop Environment               |
| ----------------- | --------------------------------- |
| Manjaro           | KDE (HiDPI)
| Ubuntu            | GNOME
| Linux Mint        | Cinnamon
| elementaryOS      | Pantheon
| Debian            | MATE
| Fedora            | GNOME
| openSUSE Leap     | KDE
| Mageia            | XFCE
| Solus             | Budgie
| Lubuntu           | LXQT

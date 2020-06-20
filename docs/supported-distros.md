---
layout: docs
title: Distros and Desktop Environments
permalink: /docs/distros/
class: docs
---

## Officially Supported


Distro                          | Minimum Release   | Maintainer
--------------------------------|-------------------|----------------|
Ubuntu                          | 16.04 "Xenial"    | [lah7]
-- Linux Mint                   | 18                |
-- elementaryOS                 | 0.4               |
Debian                          | 8 "Jessie"        | [lah7]
Arch Linux / Manjaro            |                   | [z3ntu]
Fedora                          | 30(?)             | [z3ntu]
openSUSE                        | Leap 15           | [z3ntu]
Mageia                          | 7                 | [z3ntu]
Solus                           | 4                 | [z3ntu]

---

## Tray Applet vs Desktop Environments

The toolkit GTK that powers some desktop environments consider "system tray" to
be obsolete. As a result, the tray applet may work straight out of the box but
some desktop environments will need additional steps.

| Environment   | Distro Family | Notes                                           |
| ------------- | ------------- | ----------------------------------------------- |
| GNOME Shell   | Ubuntu        | Install [`gnome-shell-extension-appindicator`](https://packages.ubuntu.com/focal/gnome-shell-extension-appindicator) using your package manager.
| GNOME Shell   | Arch          | Install [`gnome-shell-extensions-appindicator-git`](https://aur.archlinux.org/packages/gnome-shell-extension-appindicator-git/) from the AUR.
| GNOME Shell   | Other         | You may need a GNOME extension that provides AppIndicator support.
| Pantheon      | elementaryOS  | [This feature was removed in 5.0 "Juno"](https://www.reddit.com/r/elementaryos/comments/8zdrvz/any_way_to_get_back_indicators_in_juno/). You can restore the feature by [following these instructions](https://www.linuxuprising.com/2018/08/how-to-re-enable-ayatana-appindicators.html).

---

## Test Workbench

Before a major release is out, the latest version of these distros (at the time)
are checked to ensure the software is installable and looks good:

| Distro            | Desktop Environment               |
| ----------------- | --------------------------------- |
| Manjaro           | KDE
| Ubuntu            | GNOME
| Linux Mint        | Cinnamon
| elementaryOS      | Pantheon
| Debian            | MATE
| Fedora            | GNOME
| openSUSE Leap     | IceWM
| Mageia            | XFCE
| Solus             | Budgie
| Lubuntu           | LXQT

---

## Community Supported

These distros are not officially supported by [OpenRazer], but these maintainers
offer packages to support them. If there's a dependency or packaging problem,
please raise the issue on their repository.

Distro                  | Repository                | Maintainer
------------------------|---------------------------|-----------------------|
Gentoo                  | [vifino/vifino-overlay]   | [vifino]
Red Hat / CentOS        | [moozhub/yum-repo-mooz]   | [moozhub]

[OpenRazer]: https://openrazer.github.io
[lah7]: https://github.com/lah7
[z3ntu]: https://github.com/z3ntu
[vifino]: https://github.com/vifno
[moozhub]: https://github.com/moozhub
[vifino/vifino-overlay]: https://github.com/vifino/vifino-overlay/tree/master/app-misc/
[moozhub/yum-repo-mooz]: https://github.com/moozhub/yum-repo-mooz

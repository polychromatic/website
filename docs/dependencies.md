---
layout: docs
title: Dependencies
permalink: /docs/dependencies/
class: docs
---

# v0.3.12

> The current "stable" release, which will be superseded before the end of 2020.

### Packages

#### Debian/Ubuntu

* [gir1.2-gtk-3.0](https://packages.debian.org/sid/gir1.2-gtk-3.0)
* [gir1.2-appindicator3-0.1](https://packages.debian.org/sid/gir1.2-appindicator3-0.1)
* [gir1.2-webkit2-4.0](https://packages.debian.org/sid/gir1.2-webkit2-4.0)
* [python3-gi](https://packages.debian.org/sid/python3-gi)
* [python3-setproctitle](https://packages.debian.org/sid/python3-setproctitle)
* [python3-requests](https://packages.debian.org/sid/python3-requests)
* [imagemagick](https://packages.debian.org/sid/imagemagick)
* [openrazer-daemon and python3-openrazer](https://launchpad.net/~openrazer/+archive/ubuntu/stable)

#### Arch

* [gtk3](https://www.archlinux.org/packages/extra/x86_64/gtk3/)
* [libappindicator-gtk3](https://www.archlinux.org/packages/community/x86_64/libappindicator-gtk3/)
* [webkit2gtk](https://www.archlinux.org/packages/extra/x86_64/webkit2gtk/)
* [python-gobject](https://www.archlinux.org/packages/extra/x86_64/python-gobject/)
* [python-setproctitle](https://www.archlinux.org/packages/community/x86_64/python-setproctitle/)
* [python-requests](https://www.archlinux.org/packages/extra/any/python-requests/)
* [imagemagick](https://www.archlinux.org/packages/extra/x86_64/imagemagick/)
* [openrazer-daemon](https://aur.archlinux.org/packages/openrazer-daemon/) and [python-openrazer](https://aur.archlinux.org/packages/python-openrazer/)

#### openSUSE

* [typelib-1_0-AppIndicator3-0_1](https://software.opensuse.org/package/typelib-1_0-AppIndicator3-0_1)
* [typelib-1_0-WebKit2-4_0](https://software.opensuse.org/package/typelib-1_0-WebKit2-4_0)
* [python3-gobject](https://software.opensuse.org/package/python3-gobject)
* [python3-setproctitle](https://software.opensuse.org/package/python3-setproctitle)
* [python3-requests](https://software.opensuse.org/package/python3-requests)
* [imagemagick](https://software.opensuse.org/package/ImageMagick)
* [openrazer-daemon and python3-openrazer](https://build.opensuse.org/package/show/hardware:razer/openrazer)

---

# v1.0.0

> A brand new version based on PyQt5.
> [See roadmap for current status](/docs/roadmap/). Targeted to release before
> the end of the 2020.

{% include partials/dependencies_table.html
    distro_id = "arch"
    distro_name = "Arch"
%}

{% include partials/dependencies_table.html
    distro_id = "debian"
    distro_name = "Debian/Ubuntu"
%}

{% include partials/dependencies_table.html
    distro_id = "opensuse"
    distro_name = "openSUSE"
%}

{% include partials/dependencies_table.html
    distro_id = "fedora"
    distro_name = "Fedora"
%}

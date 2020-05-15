---
layout: docs
title: Dependencies
permalink: /docs/dependencies/
class: docs
---

## OpenRazer
At minimum, the OpenRazer daemon and Python library must be installed.

* `python3-openrazer` (or `python-openrazer` on some distros)
* `openrazer-daemon`

## Packages

### Required

#### Debian/Ubuntu
* [gir1.2-gtk-3.0](https://packages.debian.org/sid/gir1.2-gtk-3.0)
* [gir1.2-appindicator3-0.1](https://packages.debian.org/sid/gir1.2-appindicator3-0.1)
* [gir1.2-webkit2-4.0](https://packages.debian.org/sid/gir1.2-webkit2-4.0)
* [python3-gi](https://packages.debian.org/sid/python3-gi)
* [python3-setproctitle](https://packages.debian.org/sid/python3-setproctitle)
* [python3-requests](https://packages.debian.org/sid/python3-requests)
* [imagemagick](https://packages.debian.org/sid/imagemagick)

#### Arch
* [gtk3](https://www.archlinux.org/packages/extra/x86_64/gtk3/)
* [libappindicator-gtk3](https://www.archlinux.org/packages/community/x86_64/libappindicator-gtk3/)
* [webkit2gtk](https://www.archlinux.org/packages/extra/x86_64/webkit2gtk/)
* [python-gobject](https://www.archlinux.org/packages/extra/x86_64/python-gobject/)
* [python-setproctitle](https://www.archlinux.org/packages/community/x86_64/python-setproctitle/)
* [python-requests](https://www.archlinux.org/packages/extra/any/python-requests/)
* [imagemagick](https://www.archlinux.org/packages/extra/x86_64/imagemagick/)

#### openSUSE
* [typelib-1_0-AppIndicator3-0_1](https://software.opensuse.org/package/typelib-1_0-AppIndicator3-0_1)
* [typelib-1_0-WebKit2-4_0](https://software.opensuse.org/package/typelib-1_0-WebKit2-4_0)
* [python3-gobject](https://software.opensuse.org/package/python3-gobject)
* [python3-setproctitle](https://software.opensuse.org/package/python3-setproctitle)
* [python3-requests](https://software.opensuse.org/package/python3-requests)
* [imagemagick](https://software.opensuse.org/package/ImageMagick)

### Building

`meson` and `ninja` is required to build the project.

You'll also need an implementation of `sass` to compile the styling. One way is using the `ruby` gem:

    sudo gem install sass

The gem has since been deprecated, but it will still work. If you'd like to avoid `ruby` as a dependency,
you can alternately install the NodeJS version using `npm` like so:

    sudo npm install -g sass

Or [download a release](https://github.com/sass/dart-sass/releases) of [`dart-sass`](https://github.com/sass/dart-sass/), which contains a binary that you can run.

For instructions on building, see the ["Manual Installation" download page](/download/manual/).

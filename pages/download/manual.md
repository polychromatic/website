---
layout: download-page
title: Manual Installation
permalink: /download/manual/
distro: generic
distro_name: Manual Installation
---

## 1. OpenRazer

Ensure you have installed the [OpenRazer](https://openrazer.github.io) driver and daemon installed.

Polychromatic depends on:

* `python3-openrazer`
* `openrazer-daemon`

---

## 2. Polychromatic

### System-wide Install

You'll need to install the latest versions of `git`, `meson` and `ninja`, as well
as the [application's dependencies](/docs/dependencies/).

```
git clone https://github.com/polychromatic/polychromatic.git
git checkout stable
meson build
ninja -C build
```

### Development Mode

For quick testing or to start hacking the code right away, you can run Polychromatic from the root of the repository,
providing the [application's dependencies](/docs/dependencies/) have been installed.

```
git clone https://github.com/polychromatic/polychromatic.git -b master
./polychromatic-controller
./polychromatic-tray-applet
./polychromatic-cmd
```

In development mode, the application will compile the styling required to render the UI each time it is ran.

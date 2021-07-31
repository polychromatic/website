---
layout: devices
title: Supported Devices
permalink: /devices/
class: devices

backends:
    - name: OpenRazer
      id: openrazer
      coverage:
      url: https://openrazer.github.io
      src_url: https://github.com/openrazer/openrazer
---

Polychromatic by itself is just a frontend, and doesn't contain driver code to
directly control RGB hardware.

Currently, Polychromatic v0.7.0 only supports [OpenRazer].
In future, we'd like to add support for other brands using [phue](https://github.com/polychromatic/polychromatic/issues/296),
[OpenRGB](https://github.com/polychromatic/polychromatic/issues/340) and
[libratbag](https://github.com/polychromatic/polychromatic/issues/339).
This is a fairly new objective. [Read more about the history of this project.](https://docs.polychromatic.app/history/)

[OpenRazer]: https://openrazer.github.io

> **Device not listed?**
>
> Check the relevant project's README for details on device support. Usually, this
> involves creating an issue (unless one already exists). If you feel like hacking,
> consider implementing support yourself and creating a pull request.

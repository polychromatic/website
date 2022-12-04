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

This project only supports [OpenRazer] at the moment.

[OpenRazer]: https://openrazer.github.io

> **Device not listed?**
>
> Check the relevant project's README for details on device support. Usually, this
> involves creating an issue (unless one already exists). If you feel like hacking,
> consider implementing support yourself and creating a pull request.

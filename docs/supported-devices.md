---
layout: docs
title: Device Support
permalink: /docs/device-support/
class: docs
---

## Backends

Polychromatic acts as a frontend for these projects:

| Project         | Devices    |
| --------------- | ---------- |
| ![](/assets/img/openrazer.svg) [OpenRazer] | Open source driver and daemon supporting 100+ Razer peripherals on GNU/Linux.


**Providing support for these features:**

* Brightness
* Hardware Effects
* Create custom LED layout `(limited to keyboards in v0.3.12)`
* Read firmware data
* Set DPI and Polling Rate

**The upcoming v1.0.0 update will improve:**

* Support for all custom LED layouts (mice, keypads, etc)
* Software effects
* Devices with multiple zones


## Future Ambitions

The project would like to integrate support for these in future:

* [phue (Philips Hue)](https://github.com/polychromatic/polychromatic/issues/296)
* [OpenRGB](https://gitlab.com/CalcProgrammer1/OpenRGB)

---

## Reporting Issues

If the application is unable to work with your device, it's important to know
whether the issue is specific to this application (frontend) or the backend.

> Some issues may be because of v0.3.12. Try the [newer branch](https://github.com/polychromatic/polychromatic/branches).

Before reporting issues, please debug the action with the backend directly and
raise the issue on that project if the problem continues. For example, with [OpenRazer],
you can use [d-feet] or [QDBusViewer] to debug driver calls (via D-Bus) or use the Python
library to directly communicate with the daemon if you keep seeing **Backend Error**
messages.

[OpenRazer] being a driver can sometimes be improperly installed. Consult their
[Troubleshooting Guide](https://github.com/openrazer/openrazer/wiki/Troubleshooting) for things to try.

> In a future update, Polychromatic will include a troubleshooter that checks for common problems.

Otherwise, for UI and behaviour issues, raise the issue here
[on Polychromatic's repository](https://github.com/polychromatic/polychromatic/issues).



[OpenRazer]: https://openrazer.github.io
[d-feet]: https://wiki.gnome.org/Apps/DFeet
[QDBusViewer]: https://doc.qt.io/qt-5/qdbusviewer.html

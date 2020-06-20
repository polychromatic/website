---
layout: docs
title: Device Support
permalink: /docs/device-support/
class: docs
---

## Backends

Polychromatic acts as a frontend for these drivers and daemons:

| VID    | Project         | Devices    |
| ------ | --------------- | ---------- |
| `1532` | [OpenRazer]     | Supports over 100 Razer peripherals ranging from keyboards, mice, mousemats, headphones, and more.


Providing support for these features:

| Feature                       | OpenRazer |
| ----------------------------- | --------- |
| Brightness                    | Yes
| Lighting effects              | No, requires [#1149]
| Lighting matrixes             | Yes
| Retrieve firmware data        | Yes
| DPI & Polling Rate            | Yes
| Key Mapping                   | No, see [#1124]

[#1124]: https://github.com/openrazer/openrazer/pull/1124
[#1149]: https://github.com/openrazer/openrazer/pull/1149

---

## Reporting Issues

If the application is unable to work with your device, it's important to know
whether the issue is specific to this application (frontend) or the backend.

Before reporting issues, please debug the action with the backend directly and
raise the issue on that project if the problem continues. For example, with [OpenRazer]
2.x you can use [d-feet] to debug driver calls (via D-Bus) or use the Python
library to directly communicate with the daemon if you keep seeing **Backend Error**
messages.

[OpenRazer] 2.x being a driver can sometimes be improperly installed, Polychromatic
includes a troubleshooter that checks for common problems.

Otherwise, for UI and behaviour issues, raise the issue here
[on Polychromatic's repository](https://github.com/polychromatic/polychromatic/issues).



[OpenRazer]: https://openrazer.github.io
[d-feet]: https://wiki.gnome.org/Apps/DFeet

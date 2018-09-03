---
layout: docs
title: FAQs
permalink: /docs/faqs/
category: project
---

### What is Polychromatic?

Polychromatic is a set of front-end tools that interface with the [OpenRazer]
daemon. It complements the software with graphical tools to get the most of your
Razer device on GNU/Linux, similar to the features found on Razer Synapse.

The application is written in Python, with the Controller application powered by
WebKit. There are other tools with similar functionality, such as
[razerCommander](https://github.com/GabMus/razerCommander) (GTK) and
[RazerGenie](https://github.com/z3ntu/RazerGenie) (Qt).

----

### What is OpenRazer?

[OpenRazer] is a driver and daemon which analyses the protocols used to speak
to Razer peripherals to control their lighting and hardware effects. It also
exposes an API for scripts and applications (such as this one!) to control
the devices at a higher level.

The daemon is written in Python, with a driver for device-specific
features like handling macros. It is an unofficial implementation and is not
endorsed by Razer themselves.

----

### Does this work on Windows or Mac?

Not at this time. [OpenRazer] will need to port its driver and daemon to these
operating systems before Polychromatic will work on other operating systems.

* <https://github.com/openrazer/openrazer/issues/623>

[OpenRazer]: https://openrazer.github.io

----

### Do you support other LED devices, such as Logitech?

No, the software has been heavily designed around the OpenRazer daemon, which
makes it unfeasible to support other brands or daemons.


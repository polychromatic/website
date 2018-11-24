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
exposes an API for scripts and applications (like this one!) to control
the devices at a higher level.

The daemon is written in Python, with a driver for device-specific
features like handling macros. It is an unofficial implementation and is not
endorsed by Razer themselves.

----

### Is Windows or Mac supported?

Not at the moment. First, [OpenRazer] will need to port the daemon and
Python library required by Polychromatic to these platforms.

One of the OpenRazer team members is [experimenting with this](https://github.com/z3ntu/razer_test)
using [hidapi](https://github.com/signal11/hidapi).

* <https://github.com/openrazer/openrazer/issues/623>

[OpenRazer]: https://openrazer.github.io

----

### Are other LED peripherals supported, such as Logitech or Corsair?

Not at the moment. The software has been heavily designed around the OpenRazer
daemon, and it would be very messy to bolt on other brands or daemons with the
current codebase. Potentially, this may be supported in the distant future.


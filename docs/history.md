---
layout: docs
title: History
permalink: /docs/history/
class: docs
---

{:.thumbnail-right}
![Screenshot of v0.1.0](/docs/images/history/v0.1.0.webp)


### 2016: A simple GUI contribution

Polychromatic started off as a GUI contribution to the [razer_chroma_drivers]
repository, the predecessor to [OpenRazer]
before it was forked, overhauled and rebranded to support over 100 devices
as we know today.

This interface was like a prototype that used PolicyKit to elevate permissions
and echo data to the sysfs driver.

Let's refer to this one as **v0.1.0**.

<br>

{:.thumbnail-right}
![Screenshot of v0.2.3](/docs/images/history/v0.2.3.webp)


### v0.2.x: New repository, new name

4 months later, the application was decoupled into its own repository as
it was unfeasible to maintain long-term mixed with a driver. It also got the
name **Polychromatic**, hinting at its many ~~colours~~ functions.

The project also took over development of [@terrycain's tray applet](https://github.com/pez2001/razer_chroma_drivers/blob/36af371c9b8a95e53f9a012f9ec402e2f2a367a5/gui/tray_applet/razer_tray_applet.py)
as another GUI to interact with the driver.

The software has had small, incremental improvements over the years, but
still drags the legacy of being built around the BlackWidow Chroma keyboard.

<br>

{:.thumbnail-right}
![Screenshot of v0.3.12](/docs/images/history/v0.3.12.webp)


### v0.3.x: Multiple devices

Now that [OpenRazer] went on to support more then just keyboards - the project
now works with mice, mouse mats, keypads, laptops, the GPU enclosure, the mug,
and many more.

The software added support for more then one device and
has been packaged to run on many Linux distributions (thanks [@z3ntu](https://github.com/z3ntu)!)

<br>


[OpenRazer]: https://github.com/openrazer/openrazer
[razer_chroma_drivers]: https://github.com/pez2001/razer_chroma_drivers



{:.thumbnail-right}
![Screenshot of v0.4.0](/docs/images/history/v0.6.0.webp)


### v0.4.0 - v0.6.0: New design

To accommodate the growth of new devices and features, the project underwent
a UI redesign drawn on sheets of e-paper.

It turns out, however, building a "hybrid desktop web app" was holding up progress.
Simple things took ages to design and look good. After a couple of rewrites,
it still didn't feel like it could be a scalable application with clean code.
It's still a weird hybrid of web technologies mixed with Python after all!

The third rewrite was a port to PyQt5, a well documented cross-platform UI framework
that lets us focus on the logic and new features.

<br>


### The Future: v1.0.0

Instead of just being a front-end to [OpenRazer], the project has a new ambition
to be agnostic and work with any vendor. Writing an application to polish the
RGB experience for Razer peripherals might as well be compatible with other brands,
so we avoid the "vendor lock in" problem.

Stay tuned as the next generation of the software is nearing completion. Bring
on the custom effects, presets and automation!

What about key rebinding and macros? Once the lighting is polished, let's
get a front-end built for that too!

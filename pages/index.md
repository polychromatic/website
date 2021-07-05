---
layout: homepage
title:
permalink: /
class:

splash_title: Welcome, BlackWidow & friends!
splash_paragraph: >-
    Polychromatic is a frontend for OpenRazer
    that enables Razer devices to control lighting effects
    and more on GNU/Linux.

splash_button_url: /download/
splash_button_text: Download

image_box:
    - label: Controller
      icon: /assets/img/apps/controller.svg
      image: /assets/img/homepage/controller.png
      summary: Configure hardware features and create animated effects

    - label: Tray Applet
      icon: /assets/img/apps/tray-applet.svg
      image: /assets/img/homepage/tray-applet.png
      summary: Quickly change settings from your desktop's system tray

    - label: Command Line
      icon: /assets/img/fa/terminal.svg
      image: /assets/img/homepage/controller.png
      summary: For those that work in the terminal or set lighting via scripts
---

{:.center}
# Managing RGB lighting made simple

{% include partials/image-box.html %}

{% include partials/feature.html
    img_position = "left"
    img = "/assets/img/openrazer.svg"
    title = "Works with OpenRazer"
    text = "Supports over 130+ devices, with improvements on the way.<br><br>[View Supported Devices](/devices/)"
    button_text = "View Supported Devices"
    button_url = "/devices/"
%}

{% include partials/feature.html
    img_position = "right"
    img = "/assets/fa/cloud.svg"
    title = "No clouds, no registration"
    text = "Local software that runs on your computer, like it should."
%}

{% include partials/feature.html
    img_position = "left"
    img = "/assets/fa/box-open.svg"
    title = "It's free and open source"
    text = "Licensed and distributed under the [GPLv3](https://docs.polychromatic.app/license/)."
%}

---

{:.center}
# Razer, snake... meet penguin.

{:.center}
![Tux meets a snake](/assets/img/homepage/meet-penguin.svg)

{:.center}
Whether you've got one or planning to buy Razer peripherals, OpenRazer + Polychromatic will cover your gaming weapon.

{:.center}
[Download](/download/){:.btn}

[OpenRazer]: https://openrazer.github.io

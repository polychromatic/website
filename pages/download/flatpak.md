---
layout: download-page
title: Download as Flatpak
permalink: /download/flatpak/
class: download

distro_name: Flatpak
distro_icon: flatpak.svg
distro_accent: '74,144,217'
hidden: true
---

Only the Controller application is available under Flatpak. We recommend using
[native packages](/download/) for the best experience.

Under the Flatpak version, the following features are **not supported**:

* Tray applet
* Complimentary OpenRazer integrations, such as changing settings and running the troubleshooter.
* Browsing icons from the filesystem (including installed applications and Steam)

After installing, you'll need to [fix autostart](#fix-autostart) for your custom effects to persist across reboots.

[![Get on Flatpak](https://flathub.org/api/badge?svg&locale=en)](https://flathub.org/apps/app.polychromatic.controller)


### Fix autostart

To persist custom effects across reboots, the application needs to run at login so it can
restore the effect.

Add this command to your startup applications:

    flatpak run --command=/app/bin/polychromatic-helper app.polychromatic.controller --autostart


### OpenRazer

OpenRazer is not available as a Flatpak. You need to [install it on your host system](https://openrazer.github.io/#download).

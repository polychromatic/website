---
layout: roadmap
title: Roadmap
permalink: /docs/roadmap/
class: docs

roadmap:
    - name: v0.3.12 ("Stable")
      checked: true
      completed:
        - Development series finished. Working on next major version...
      pending:
        - The tray applet can be tempermental on some DEs, this will be addressed in next version.

    - name: v1.0.0 - Q1 2021
      checked: progress
      completed:
        - New command line utility
        - New website and documentation
        - Rewrite tray applet to fix its shortcomings
        - Refactor Controller (first pass, 2018)
        - Refactor Controller (second pass, 2019)
        - Port Controller to PyQt5 (third refactor, 2020)
        - Implement Devices tab
        - Implement Preferences
      in_progress:
        - Implement Effects tab ("application profiles" replacement)
      pending:
        - Implement Presets tab ("profiles")
        - Implement Triggers tab (a new feature to activate presets based on events, such as session login)
        - Beta Release - Cross-distro, device testing and finalizing documentation

    - name: v1.1.0
      checked: false
      completed:
        null
      pending:
        - Browse/share effects designed by other Polychromatic users.

    - name: Future Ambitions
      checked: false
      completed:
        null
      pending:
        - Add backend support for Philips Hue.
        - Add backend support for OpenRGB.
        - Key remapping (macro) support.
        - Interactive effect layers.
        - Port application to Windows and macOS.

---

{:.grey}
The roadmap is subject to change at any time.

{:.grey}
v1.0.0 is internally versioned as v0.6.0 until it's released.

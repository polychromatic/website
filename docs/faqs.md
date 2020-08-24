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
[razerCommander](https://gitlab.com/gabmus/razerCommander) (GTK) and
[RazerGenie](https://github.com/z3ntu/RazerGenie) (Qt).

----

### What is OpenRazer?

[OpenRazer] is a driver and daemon which analyses the protocols used to speak
to Razer peripherals to control their lighting and hardware effects. It also
exposes an API for scripts and applications [(like Polychromatic)](/) to control
the devices at a higher level.

The project aims to support the hardware's features (e.g. DPI and lighting).

The daemon is written in Python, with a DKMS driver for device-specific
features like handling macro keys. It is an unofficial implementation and is
**not endorsed** by Razer.

[OpenRazer]: https://openrazer.github.io

----

### Is Windows or Mac supported?

Not at the moment.

Currently, one of the OpenRazer team members is rewriting [OpenRazer] to handle
everything in userspace, which will eliminate the dependency on DKMS drivers for GNU/Linux.
This rewrite uses [hidapi](https://github.com/signal11/hidapi) and is making
excellent progress, but is still in early development.

* <https://github.com/z3ntu/razer_test>
* <https://github.com/z3ntu/python-openrazer>
* <https://github.com/z3ntu/openrazer-shim>
* <https://github.com/openrazer/openrazer/issues/623>

Once OpenRazer is fully compatible with Windows and Mac, Polychromatic can look at
supporting Windows and macOS.

----

### Are other LED peripherals supported, such as Logitech or Corsair?

In future, yes. So far, the software has been heavily designed around the OpenRazer
daemon, and it would be very messy to bolt on other brands or daemons with the
current codebase.

The release of v1.0.0 will put Polychromatic in a position to modularly add
other backends and provide a GUI for them.

---

### Are macros supported for keyboards **with** dedicated macro keys?

Yes, the OpenRazer daemon provides on-the-fly macro recording for Razer
keyboards (such as BlackWidow Chroma) that have dedicated macro keys (M1-M5).

Keystrokes can be recorded and stored in the daemon until it is stopped.
The key combination is slightly different to Razer's official drivers:

1. Press <kbd>FN</kbd> + <kbd>F9</kbd>.
  * The macro LED will start blinking.
2. Press the key that will save this macro.
  * E.g. <kbd>M1</kbd>. The macro LED will turn solid.
3. Type your keystrokes.
4. Press <kbd>FN</kbd> + <kbd>F9</kbd> to finish.

If the macro LED rapidly blinks on step 1, you may need to restart the daemon.

Playback will play the keystrokes one-after-the-other, which is incredibly fast.
Time delays are not supported right now.

---

### Are macros supported for keyboards **without** dedicated macro keys?

Officially, no. With a patch, yes. To make on-the-fly recording work for ANY key,
locate this file and remove these lines:

[/usr/lib/python3/**/openrazer_daemon/misc/key_event_management.py](https://github.com/openrazer/openrazer/blob/bd71e769d9239fc4ffac69c04cf3cc88b12d7bda/daemon/openrazer_daemon/misc/key_event_management.py#L488-L495)

```
                    if self._current_macro_bind_key is None:
-                        # Restrict macro bind keys to M1-M5
-                        if key_name not in ('M1', 'M2', 'M3', 'M4', 'M5'):
-                            self._logger.warning("Macros are only for M1-M5 for now.")
-                            self._recording_macro = False
-                            self._parent.setMacroMode(False)
-                        else:
                            self._current_macro_bind_key = key_name
                            self._parent.setMacroEffect(0x00)
```

This 'hack' is just for reference. This does not
work with gamepads as they behave like a Chroma keyboard (default device behaviour).

---

### What is macro support like in Polychromatic?

The current version `(v0.3.12)` only informs you about OpenRazer's
on-the-fly macro recording feature. [In a future update](/docs/roadmap/), 
a new feature aims to enable the remapping of the buttons on any keyboard or mouse.

---

### Can I remap keys?

Neither Polychromatic or [OpenRazer] support key/button remapping at the
moment for any device - neither mice, keyboards or keypads.

In the meantime, other users have reported using these utilities:

* [Keyboarding Master](https://sites.google.com/site/keyboardingmaster/) _(Java, GUI)_
* [Pystromo](https://github.com/byrongibson/Pystromo) _(Python 2)_
* [keyboard](https://github.com/boppreh/keyboard) _(Python 3)_
* [mouse](https://github.com/boppreh/mouse) _(Python 3)_

Polychromatic intends to use the latter projects by **boppreh** in a future update.

You could also try:

* [OpenRazer Pull Request #1124](https://github.com/openrazer/openrazer/pull/1124)

---

### Can I create my own effects?

Not yet, but Polychromatic will add new and improve existing functionality
[in the upcoming v1.0.0 update](/docs/roadmap/).

For now, the current version `(v0.3.12)` can set static colours for keyboards
based on the Razer BlackWidow layout. Ideal for mapping out keys for games or applications.
These will be automatically _upgraded_ when v1.0.0 is released.

Other users have patched the graphic to work with these devices in the interim:

* [Blade Stealh Late 2016](https://github.com/polychromatic/polychromatic/pull/144)
* [BlackWidow Elite](https://github.com/polychromatic/polychromatic/pull/200)

---

### Can I create my own profiles?

Not yet, but Polychromatic will add profile ("presets") functionality [in the upcoming v1.0.0 update](/docs/roadmap/).

Confusingly, the current version `(v0.3.12)` refers to a custom static key mappings as
"application profile", but these are not tied to an application.

---

### When will the next version be released?

Polychromatic v1.0.0 is going to be a major update worth waiting for.
Check out [the roadmap](/docs/roadmap/) to see what new and improved features
you can expect. Daily builds will be reinstated once the "application profiles"
replacement is added, so there is no loss of functionality. Although, you can 
always [check out the branch](https://github.com/polychromatic/polychromatic/branches) earlier.

As with any open source project, progress can be slow at times. It's been 2 years since the
release of `v0.3.12`, with [not just one](https://github.com/polychromatic/polychromatic/releases/tag/v0.4.0),
or [two](https://github.com/polychromatic/polychromatic/releases/tag/v0.5.0), but **three** refactors internally!
Things are nicely shaping into place, as the Controller is now based on PyQt5 and no longer WebKitGTK.

Rest assured, the software is definitely not dead, but there will be no minor updates for `v0.3.12`
as the software is developed linearly.

As a rough estimate, let's aim for a v1.0.0 release (or at least a beta) in **September 2020**.

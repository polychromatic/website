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

Not at the moment. The software has been heavily designed around the OpenRazer
daemon, and it would be very messy to bolt on other brands or daemons with the
current codebase. Potentially, this may be supported in the distant future.

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

The current version `(v0.3.12)` is limited and will only inform you about the
OpenRazer daemon's on-the-fly macro recording feature.
[In a future update](/docs/roadmap/), a minor feature will allow you to
save, load and apply M1-M5 macros keys.

---

### Can I remap keys?

Neither Polychromatic or [OpenRazer] support key/button remapping at the
moment for any device - neither mice, keyboards or keypads.

In the meantime, other users have reported using these utilities:

* [Keyboarding Master](https://sites.google.com/site/keyboardingmaster/) _(Java, GUI)_
* [Pystromo](https://github.com/byrongibson/Pystromo) _(Python 2)_
* [keyboard](https://github.com/boppreh/keyboard) _(Python 3)_

---

### Can I create my own effects?

Not yet, but Polychromatic will add new and improve existing functionality
[in a future update](/docs/roadmap/).

For now, the current version `(v0.3.12)` can set static colours for keyboards
based on the Razer BlackWidow layout. Ideal for mapping out keys for games or applications.

Other users have patched the graphic to work with these devices in the interim:

* [Blade Stealh Late 2016](https://github.com/polychromatic/polychromatic/pull/144)
* [BlackWidow Elite](https://github.com/polychromatic/polychromatic/pull/200)

---

### Can I create my own profiles?

Not yet, but Polychromatic will add profile ("presets") functionality [in a future update](/docs/roadmap/).

Confusingly, the current version `(v0.3.12)` refers to a custom static keymapping as
"application profile".

---

### When will the next version be released?

Polychromatic 1.0.0 _(`dev-0.4.0` then `dev-1.0.0` during development)_ is going to
be a major update worth waiting for. Check out [the roadmap](/docs/roadmap/) to see what
new and improved features you can expect. Daily builds will be reinstated once the "application profiles"
replacement is added, so there is no loss of `stable` functionality. Although, you can 
always [check out the branch](https://github.com/polychromatic/polychromatic/branches) earlier.

Since the software is developed during free time, progress can be slow at times. Rest assured,
the software is definitely not dead, but `v0.3.12` is not expecting minor updates. 

v1.0.0 will be released "when it's ready", but as a rough estimate, let's say... **2020 Q2** or sooner.

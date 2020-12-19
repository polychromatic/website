---
layout: docs
title: FAQs
permalink: /docs/faqs/
class: docs
---

### What is Polychromatic?

Polychromatic is becoming a vendor agnostic frontend to control various kinds
of RGB peripherals from different brands. This suite of software provides a
GUI, a tray applet and command line interface, as well as handling custom
effects, presets and automating them with trigger events.

Currently, the only supported backend is [OpenRazer](https://openrazer.github.io).

The current release `(v0.3.12)` is written in Python/WebKitGTK. However,
in the upcoming months, the next release `(v1.0.0)` will look a little different
with new features, with the UI built on PyQt5.


### Is Windows or macOS supported?

Not at the moment, but this a future ambition.


### Are other LED peripherals supported, such as Logitech or Corsair?

Watch this space - the upcoming v1.0.0 release will put Polychromatic in a position
to make this a reality. The first integration will likely be
[Philips Hue](https://github.com/polychromatic/polychromatic/issues/296).

Earlier versions of the software (including the current `v0.3.12` release)
have a codebase been heavily designed around the OpenRazer daemon, which would
have been very messy to bolt on other brands or daemons.


---

## OpenRazer Questions

### What is OpenRazer?

[OpenRazer] is a driver and daemon which analyzed the protocols used to speak
to Razer peripherals to control their lighting and hardware effects. An
API is exposed for scripts and applications to control the devices at a higher level.

The project aims to support the hardware's features (e.g. DPI and lighting).

The daemon is written in Python, with a DKMS driver for device-specific
features like handling macro keys. **It is an unofficial implementation and is
not supported or created by Razer Inc.**

[OpenRazer]: https://openrazer.github.io


### Does OpenRazer support Windows or macOS?

Officially, no. However, one of the OpenRazer team members is experimenting by
rewriting [OpenRazer] to handle everything in userspace, eliminating
the dependency on DKMS drivers for GNU/Linux. This rewrite uses [hidapi](https://github.com/signal11/hidapi)
and is making excellent progress, but is still in early development.

* <https://github.com/z3ntu/razer_test>
* <https://github.com/z3ntu/python-openrazer>
* <https://github.com/z3ntu/openrazer-shim>
* <https://github.com/openrazer/openrazer/issues/623>

Unofficially, [openrazer-win32](https://github.com/CalcProgrammer1/openrazer-win32)
is a wrapper to use OpenRazer's efforts on Windows.


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


### What is macro support like in Polychromatic?

The current version `(v0.3.12)` only informs you about OpenRazer's
on-the-fly macro recording feature. See [Can I remap keys?] below.


### Can I configure keys on a gamepad?

Sadly no, not right now. A third party application is required. See [Can I remap keys?] below.

---

## Feature Questions

### Can I remap keys?

Not yet. This is a future ambition. In the meantime, other users have reported using these utilities:

* [key-mapper](https://github.com/sezanzeb/key-mapper) _(Python 3, GTK)_
* [Keyboarding Master](https://sites.google.com/site/keyboardingmaster/) _(Java, GUI)_
* [Pystromo](https://github.com/byrongibson/Pystromo) _(Python 2)_
* [keyboard](https://github.com/boppreh/keyboard) _(Python 3)_
* [mouse](https://github.com/boppreh/mouse) _(Python 3)_

Polychromatic intends to use `keyboard` and `mouse` projects by `boppreh` in a
future update.

[Can I remap keys?]: #can-i-remap-keys

### Can I create my own effects?

Not yet, but Polychromatic will add new and improve existing functionality
[in the upcoming v1.0.0 update](/docs/roadmap/).

For now, the current version `(v0.3.12)` can set static colours for keyboards
based on the Razer BlackWidow layout. Ideal for mapping out keys for games or applications.
These will be automatically _upgraded_ when v1.0.0 is released.

Other users have patched the graphic to work with these devices in the interim:

* [Blade Stealth Late 2016](https://github.com/polychromatic/polychromatic/pull/144)
* [BlackWidow Elite](https://github.com/polychromatic/polychromatic/pull/200)


### Can I create my own profiles?

Not yet, but Polychromatic will add profile ("presets") functionality [in the upcoming v1.0.0 update](/docs/roadmap/).

Confusingly, the current version `(v0.3.12)` refers to a custom static key mappings as
"application profile", but these are not tied to an application.


### When will the next version be released?

Check out [the roadmap](/docs/roadmap/) to see what new and improved features
that are on the way. A beta `(v0.6.0)` will be released once the "application profiles"
replacement, Presets and Triggers are added, so there is no loss of functionality.
Although, you can always [check out the branch](https://github.com/polychromatic/polychromatic/branches) earlier.

As with any open source project, progress can be slow at times. It's been 2 years since the
release of `v0.3.12`, with [not just one](https://github.com/polychromatic/polychromatic/releases/tag/v0.4.0),
or [two](https://github.com/polychromatic/polychromatic/releases/tag/v0.5.0), but **three** refactors internally!
Things are nicely shaping into place, as the Controller is now based on PyQt5 and drops WebKitGTK.

Rest assured, the software is definitely not dead, but there will be no minor updates for `v0.3.12`
as the software development happened linearly.

As a rough estimate, let's hope for a v1.0.0 release (or at least a beta) before the end of 2020!

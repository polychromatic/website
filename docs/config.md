---
layout: docs
title: Configuration
permalink: /docs/config/
class: docs
---

Polychromatic's save data is stored in JSON format. The location is based on
the XDG spec, which is usually `~/.config/polychromatic/` and `~/.cache/polychromatic/`.

Preferences can be adjusted via the Controller.

{% include img-2x alt="Preferences is accessible via the Edit menu bar" src="/docs/images/preferences.png" %}

However, if the Controller is not installed, (or you know what you're doing),
you may make changes directly based on the specifications below. Note that
changes take effect on the next launch and invalid data will be reinitalised.

> Changes to JSON files directly while the application is running may
> cause changes to be overwritten in some circumstances.

---

## Folder Structure

| Folder/File           | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| backends/             | Backends may use this to store runtime or persistant data
| custom_icons/         | Copies of imported images to set for effects, presets or tray icon
| [effects/layered/]    | Software effects determined by layers
| [effects/scripted/]   | Programmable effects written in Python
| [effects/sequence/]   | Animated (or static) effect based on pixels and frames
| [presets/]            | Stores pre-determined device settings. Some other apps may call these "profiles"
| states/               | Stores internal data noting a device's current effect or preset
| colours.json          | Your saved colours list
| [preferences.json]    | General configuration (see below)

[effects/layered/]: /docs/config/effects/layered/
[effects/scripted/]: /docs/config/effects/scripted/
[effects/sequence/]: /docs/config/effects/sequence/
[presets/]: /docs/config-presets/
[preferences.json]: #preferencesjson

**Obsolete Folders**

These were previously used in previous versions (< v1.0.0) and
can be safely deleted.

| Folder/File   | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| backups/      | Stored copies of old effects
| profiles/     | Stored original "Application Profiles" keyboard mappings.

---

## preferences.json

| Group         | Value             | Data Type | Purpose                              |
| ------------- | ----------------- | --------- | ------------------------------------ |
|               | `config_version`  | int       | Keeps track of preference version. **Don't touch!**
| `controller`  | `landing_tab`     | int       | `0-3`, in this order: Devices, Effects, Presets, Triggers
| `controller`  | `show_menu_bar`   | bool      | Show/hide the menu bar. Press Alt to reveal if hidden.
| `controller`  | `system_qt_theme` | bool      | Use the system's Qt theme. Dependant on current theme and environment.
| `controller`  | `window_behaviour`| int       | `0` - Always open in center <br> `1` - Remember last position/size <br> `2` - Let window manager decide
| `editor`      | `live_preview`    | bool      | When editing effects, show the changes on the physical device.
| `tray`        | `autostart`       | bool      | Should the tray applet start when the user logs in?
| `tray`        | `autostart_delay` | int       | How long (in seconds) to wait before autostarting. This helps some desktop environments that suffer from a race condition which causes the applet to display incorrectly or show no devices.
| `tray`        | `mode`            | int       | `0` - Use Default <br> `1` - AppIndicator3 (GTK) <br> `2` - GTK Status Icon (Legacy)
| `tray`        | `icon`            | str       | Relative path from data directory, `custom_icons` **or** an absolute path to the tray icon.

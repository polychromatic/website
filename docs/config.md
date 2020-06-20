---
layout: docs
title: General Configuration
permalink: /docs/config/
class: docs
---

Polychromatic's configuration files are stored in JSON. The folder is based on
the XDG spec, which is usually `~/.config/polychromatic/`.

If you know what you're doing, you can make changes directly.
**Beware** that the application will re-generate invalid JSON files or
values. Changes won't be reflected until the next launch.


| Folder/File           | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| custom_icons/         | Copies of images that can be used as effect/profile/tray icons.
| device_images/        | Cached physical images of devices.
| [effects/keyframed/]  | Custom effects generated from keyframes.
| [effects/scripted/]   | Programmable effects written in Python.
| [presets/]            | Stores "profiles" of pre-determined states.
| [colours.json]        | Colours for the picker.
| [preferences.json]    | General configuration

[effects/keyframed/]: /docs/config-effects/#keyframed-effects
[effects/scripted/]: /docs/config-effects/#scripted-effects
[presets/]: /docs/config-presets/
[colours.json]: #coloursjson
[preferences.json]: #preferencesjson


**Obsolete** - these were previously used in previous versions (<= v1.0.0):

| Folder/File   | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| backups/      | Stored copies of old effects
| profiles/     | Stored original "Application Profiles" keyboard mappings.

---

### preferences.json

| Group     | Value         | Data Type | Purpose                              |
| --------- | ------------- | --------- | ------------------------------------ |
|           |`config_version` | int     | Keeps track of preference version. **Don't touch!**
| `colours` | `primary`     | str       | Default hex value for effects.
| `colours` | `secondary`   | str       | Default hex value for an effect's secondary colour.
| `effects` | `live_preview` | bool     | When editing effects, whether to show the changes on the physical device.
| `general` | `landing_tab` | str       | When the Controller launches, open this tab.
| `tray`    | `force_legacy_gtk_status` | bool | Use GTK Status icon instead of AppIndicator (Legacy)
| `tray`    | `icon`        | str       | Relative path from data directory **or** absolute path to custom icon.

This can be configured in the Controller application:

    polychromatic-controller --tab preferences

---

### colours.json

A list containing a dictionary of:

* `hex` - a 6 digit colour code.
* `name` - human readable name.
  * If the application is localised at the time the configuration is first created, this will be translated.

Example:

```
[
    {
        "hex": "#00FF00",
        "name": "Green"
    },
    {
        "hex": "#FF0000",
        "name": "Red"
    }
}
```

Colours can be added, removed or reset via the Controller:

    polychromatic-controller --tab colours

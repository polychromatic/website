---
layout: docs
title: Effect Internals
permalink: /docs/config/effects/
class: docs
---

Effects could refer to one of the following:

* **[Hardware](#hardware-effects)** - provided by the firmware or backend. These usually persist across power cycles.
* **[Software](#software-effects)** - powered by Polychromatic and require the backend to be running.

## Hardware Effects

### OpenRazer

Availablity of effects and parameters vary on the hardware's firmware.

{:.has-icons}
| Effect                                        | Parameters / Notes            |
| --------------------------------------------- | ----------------------------- |
| ![](/assets/img/docs/effects/none.svg) None   |
| ![](/assets/img/docs/effects/spectrum.svg) Spectrum |
| ![](/assets/img/docs/effects/wave.svg) Wave | Direction <1-2>
| ![](/assets/img/docs/effects/reactive.svg) Reactive | Speed <1-4> and 1 colour
| ![](/assets/img/docs/effects/ripple.svg) Ripple | Random or 1 colour | Software effect provided by daemon
| ![](/assets/img/docs/effects/breath.svg) Breath | Random or 1, 2 or 3 colour(s)
| ![](/assets/img/docs/effects/static.svg) Static | 1 colour
| ![](/assets/img/docs/effects/pulsate.svg) Pulsate | 1 colour
| ![](/assets/img/docs/effects/blinking.svg) Blinking | 1 colour

Some Razer firmware retain hardware effects across power cycles and when plugged into
other computers. Similarly, when software effects are used, the last frames may
be retained across power cycles. However, newer firmware may default to an effect
until OpenRazer and/or Polychromatic has started.


---

## Software Effects

Like with any RGB application, Polychromatic works with its own format for
storing "software effects". Polychromatic stores them as JSON files in
`~/.config/polychromatic/effects/`, enabling the possibility to import
and export from/to other applications.

Writing effects in this software will work on any supported backend where the
device is compatible with individually addressable LEDs (matrix) and can be
set to work within specifications (for example, a scripted effect that
should only be played on keyboards)

There are three types:

| ID | Type                                                      | Purpose                   |
| -- | --------------------------------------------------------- | ------------------------- |
| 1  | [![](/assets/fa/effects/layered.svg) Layered](layered/)    | Each layer describes how to display a specified range of LEDs
| 2  | [![](/assets/fa/effects/scripted.svg) Scripted](scripted/) | Programmable effects written in Python
| 3  | [![](/assets/fa/effects/sequence.svg) Sequence](sequence/) | Animated (or static) effect based on pixels and frames


> Users previously running v0.3.12 will have their "application profiles"
> converted to **Layered effects**.

Effects can be edited via the main "Controller" application.

When playing effects, the `polychromatic-helper` runs as a process for each device.
To avoid two processes controlling the device at the same time,
lock files are placed in the **run directory** (based on the XDG spec, which is
usually `/run/user/$PID/polychromatic`).


### Common Metadata

All effects use JSON files to describe the effect and additional data depending
on the type of effect.

Every effect consists of the following:

```
{
    "name": "Example Effect",
    "name[fr_FR]": "Exemple d'effet",
    "type": 1,
    "author": "octocat",
    "author_has_github": true,
    "icon": "ui/img/emblems/lamp.svg",
    "summary": "This is an example effect",
    "summary[fr_FR]": "Ceci est un exemple d'effet",
    "map_device": "Razer BlackWidow Chroma",
    "map_graphic": "blackwidow_m_keys_en_GB.svg",
    "save_format": 8,
    "revision": 1,
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `name`        | str       | Name of effect (English)
| `name[fr]`    | str       | Name of effect (other language, e.g. `fr`)
| `type`        | int       | Internal effect type
| `author`      | str       | Full name or username of creator
| `author_url`  | str       | Optional URL to author, e.g. GitHub profile
| `icon`        | str       | Relative path to icon (from data directory or user's `custom_icons` folder), or absolute path to a custom icon.
| `summary`     | str       | Brief description (English)
| `summary[fr]` | str       | Brief description (other language, e.g. `fr`)
| `map_device`  | str       | Name of the device that will play this effect. For scripted effects, leave empty.
| `map_device_icon`  | str  | Form factor icon ID for the `map_device`. For scripted effects, leave empty.
| `map_graphic` | str       | Filename of the mapping graphic to use when editing this effect. For a grid, leave empty.
| `map_cols`    | int       | Number of columns in this map. Set to `0` for scripted effects.
| `map_rows`    | int       | Number of rows in this map. Set to `0` for scripted effects.
| `save_format` | int       | Internal save version. **Should not be changed.**
| `revision`    | int       | Author's version number of the effect, e.g. `5`. Used to check for updates from the original.

All fields are required.

Additional data depends on the type of effect:

* [Layered (type 1)](layered/#additional-metadata)
* [Scripted (type 2)](scripted/#additional-metadata)
* [Sequence (type 3)](sequence/#additional-metadata)

Localisation keys are optional and is intended to be used in a future update
where a facility will allow you to upload/download effects created by other users.

---

## Hardware Mappings

Where available, the editor will show a hardware SVG from
`/usr/share/polychromatic/mapping/` that closely matches the hardware
layout or choose one manually. See [Add Device Maps & Graphics](/docs/devicemaps/)
for details on to structure the SVG when creating new graphics.

Alternately, a basic matrix grid can be used for any device.

> A device's matrix can be directly tested via the Controller. Choose the device
from the **Devices** tab, click **Device Info** and then **Test Matrix**.

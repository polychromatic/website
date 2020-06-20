---
layout: docs
title: Effects Save Format
permalink: /docs/config-effects/
class: docs
---

Polychromatic works with its own JSON format of "software effects". Effects work
on any compatible backend for devices that support a individually addressable
LEDs (matrix).

There are two types:

| Type          | Purpose                   |
| ------------- | ------------------------- |
| [Keyframed]   | Custom effects calculated using keyframes.
| [Scripted]    | Programmable effects written in Python.

[Keyframed]: #keyframed-effects
[Scripted]: #scripted-effects

Effects are managed via the Controller application:

    polychromatic-controller --tab effects

> Users previously running v0.3.12 will have their "application profiles"
migrated as **Keyframed** effects.

---

## Keyframed Effects

These are multi-layered effects that are designed for a specific device layout.
A layer could be:

| Type              | Purpose                                                  |
| ----------------- | -------------------------------------------------------- |
| Single Frame      | Set LEDs for the entire layer.
| Multiple Frames   | Set LEDs on a frame by frame basis.
| Wave              | Software generated wave using colours of your choice.
| Spectrum          | Software generated spectrum using colours of your choice.

Layers start at 1, and each higher level will overlay the one below it.
Before an effect is played, the application will render the keyframes and cache
them in `~/.cache/polychromatic/rendered/`.

The `polychromatic-helper` process is responsible for sending these frames to
the hardware. To avoid two processes controlling the device at the same time,
lock files are placed in the **run directory** (`/run/user/$PID/polychromatic`).

> Interactive effects like **Reactive** and **Ripple** are
not supported at the moment.

---

## Scripted Effects

These scripts hook into `polychromatic.fx`, a high level Python library API to
interact with devices supported by Polychromatic and passes to the relevant
backends, such as `openrazer.client`.

There are two files in `~/.config/polychromatic/effects/scripted/` :

* A Python `(.py)` file containing the code.
* A JSON `(.json)` file describing the metadata.


### Writing Custom Effects in Python

It is recommended to create and test these within the Controller application,
as this allows testing on real hardware or via an on-screen software graphic.

Here's an example:

```
#!/usr/bin/python3

import polychromatic.fx

def play(fx, params=[]):

    # Parameters Example:
    # params["var1"]    # "#00FF00"
    # params["var2"]    # "Fast"

    # Variables
    fx.rows             # 5
    fx.cols             # 20
    fx.name             # Razer BlackWidow Chroma
    fx.backend          # OpenRazer
    fx.form_factor      # keyboard

    # Helper functions
    fx.rgb_to_hex(0, 255, 0)    # Output: #00FF00
    fx.hex_to_rgb("#00FF00")    # Output: [0, 255, 0]

    # Drawing
    fx.matrix[0,0] = [255,0,0]
    fx.draw()
```

| Variable / Function | Returns   | Purpose                                 | Example      |
| ----------------- | --------- | ----------------------------------------- | ------------ |
| `params`          | dict      | User input as specified in the metadata.  | `{"var1": "#00FF00", "var2": "Fast"}`
| `fx.rows`         | int       | How many keys the device has vertically.  | `6`
| `fx.cols`         | int       | How many keys the device has horiziontally. | `22`
| `fx.name`         | str       | Human name of the device.                   | `Razer BlackWidow Chroma`
| `fx.backend`      | str       | Name of backend powering this device.       | `openrazer`
| `fx.form_factor`  | str       | Label for this type of device.              | `keyboard`
| `fx.rgb_to_hex()` | str       | Input integers: `[R,G,B]` to get the hex value. | `[0,255,0] -> "#00FF00"`
| `fx.hex_to_rgb()` | list      | Input string: `("#RRGGBB")` to get separate R, G, B values. | `"#FF0000" -> [255,0,0]`
| `fx.matrix[X,Y]`  |           | Set a colour at the specified position. 0-based. |
| `fx.draw()`       | bool      | Send this frame to the hardware. Returns boolean to indicate success. | `True`

The script can be very flexible using the power of Python using `import`'s and
as many functions as desired. At minimum, an effect must have:

* `#!/usr/bin/python3` as the shebang.
* `import polychromatic.fx`
* `def play(fx, params=[])`


---

### Metadata (Common)

All effects have JSON files that describe the effect and other data depending on
the type of effect.

Every effects consists of:


```
{
    "name": "Example Effect",
    "author": "Your Name Here",
    "icon": "ui/img/emblems/code.svg",
    "summary": "My new effect is a work in progress.",
    "optimised": {
        "form_factor": "keyboard",
        "name": "Razer BlackWidow Chroma"
    },
    "format_version": -1,
    "revision": 1
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `name`        | str       | Name of effect (English)
| `name[fr]`    | str       | Name of effect (other language, e.g. `fr`)
| `author`      | str       | Full name or username to creator
| `icon`        | str       | Relative path to icon (from `data/`), or blank if custom icon.
| `summary`     | str       | Brief description (English)
| `summary[fr]` | str       | Brief description (other language, e.g. `fr`)
| `optimised`   | dict      | Inform other users which device the effect was tested or designed for.
|               |           | - `"name"` is the original device label, e.g. `"Razer BlackWidow Ultimate 2016"`.
|               |           | - `"form_factor"` specifies a [device type], e.g. `"keyboard"`.
| `format_version` | int    | Internal fx module version. **Should not be changed.** Use `-1` to use latest version (when writing new effects)
| `revision`    | int       | Author's version number of the effect, e.g. `5`. Used to check for updates from the original.

All fields are required.


---

### Metadata (Scripted)

```
{
    "depends": {
        "form_factor": ["keyboard"],
        "OS": ["any"],
        "py_dependencies": []
    },
    "parameters": [
        {
            "var": "var1",
            "label": "CPU Colour",
            "type": "colour",
            "value": null,
            "default": "#00FF00"
        },
        {
            "var": "var2",
            "label": "Speed",
            "type": "choice",
            "options": ["Fast", "Medium", "Slow"],
            "value": null,
            "default": "Slow"
        }
    ],
    "checksum_md5": "fa400dcf0b88fe3ebcc3481a4b094c66"
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `depends`     | dict      | - `"form_factor"` is a list of [device types] to prevent the effect running on devices that it was not designed for. If it'll work on anything, specify `"any"`.
|               |           | - `"OS"` is a list should the effect is limited to a platform. Use `["any"]` or `["linux", "macos", "windows"]` if applicable.
|               |           | - `"py_dependencies"` is a list of Python modules you've imported. E.g. if `import requests` was used, then list: `["requests"]`.
| `parameters`  | list      | See [Parameters](#parameters) below.
| `checksum_md5`| str       | Checksum of the `.py` file. Used to check for changes from the original.

All fields are required.


#### Parameters

This key is a list of dictionaries that specify optional parameters. Polychromatic
will expose these in the interface for the user to choose, and your effect will
be able to reference them in `params["<var>"]`.

```
{
    "parameters": [
        {
            "var": "var1",
            "label": "CPU Colour",
            "type": "colour",
            "value": null,
            "default": "#00FF00"
        },
        {
            "var": "var2",
            "label": "Pick a number",
            "type": "list",
            "options": ["1", "2", "3"],
            "value": "1",
            "default": "2"
        }
    ]
}
```

* `"var"` = Variable name, no spaces, case sensitive.
* `"label"` = Human readable name
* `"type"` = One of: `colour`, `list`, `number`, `string`.
* `"options"` = (`list` only) Options to show in the interface.
* `"value"` = Current value as set by the user. Starts as `null`.
* `"default"` = When a value wasn't specified, use this.

For lists, the `value` is validated against the list of `options`. An invalid `value`
will fallback to the `default`.

Additional keys can be optionally specified for localisation:

* `"label[fr]"`
* `"options[fr]"`

[device type]: #device-types
[device types]: #device-types

---

### Metadata (Keyframed)

This data is more internal to the application's logic. See docstrings for details.

```
{
    "data": [
        "frames": (int)             # Number of frames
        "layers": [
            {
                "name": (str)
                "type": (str)       # 'wave', 'spectrum', 'static', 'frames'
                "single": (bool)    # True if the layer type specifies each frame.
                "prop": {
                    "colours": (list)
                    "direction": (int)
                }
                "keyframes": [      # If 'single' is FALSE
                    "0,0"           # "x,y" values wrapped in string. 1-based.
                ]
                "frames": {
                    1: {            # Frame number. 1-based.
                        {
                            "x": (int),
                            "y": (int),
                            "colour": (str)
                        }
                    }
                }
            }
        ]
    ]
}
```

---

## Device Types

Polychromatic identifies devices into one of these categories:

* `unrecognised`
* `keyboard`
* `mouse`
* `mousemat`
* `keypad`
* `headset`
* `gpu`
* `accessory`

For example, the logic in your effect could behave differently between
devices by detecting like this:

```
if fx.form_factor == "keyboard":
    # code for keyboard

elif fx.form_factor in ["mouse", "keypad"]:
    # code for mouse or keypad

else:
    # everything else
```

---

## Hardware Mappings

Where available, the editor will show a hardware SVG from
`/usr/share/polychromatic/mapping/` that closely matches the hardware
layout. As a fallback, a basic matrix grid is displayed, see
[Hardware Mappings](#hardware-mappings) for details on how the SVG
graphic is parsed.

> A device's matrix can be directly tested by choosing a device from the
**Devices** tab, clicking **Device Info** and then **Test Matrix**.


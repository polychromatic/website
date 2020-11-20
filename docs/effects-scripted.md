---
layout: docs
title: Scripted Effects
permalink: /docs/config/effects/scripted/
class: docs
---

## The Concept

These are scripts hooking into `polychromatic.fx`, a high level Python library API to
interact with a device's individual LED addressing (matrix). Like with any
custom effect, the backend and device must support individual LED addressing
(matrix) as this effect type does not interface with a device's hardware effects.

You can optionally add your own parameters to fine tune the behaviour of the
effect, using integers, strings, colours and multiple choice as inputs.

There are two files in `~/.config/polychromatic/effects/scripted/` :

* A Python `(.py)` file containing the code.
* A JSON `(.json)` file describing the metadata.

---

## Writing the Script

> Scripted effects are written in Python. This documentation assumes
> familiarity with the basics of the syntax.

Scripts are written inside a `play` function, meaning the files do not run on their own.
Polychromatic loads the script as a module and executes the `play()` function
with the `fx` object and `params` populated and validated.

When editing the script via the Controller application, you can test the effect
against real hardware or via an on-screen software graphic.

Here's a starting example:

```
#!/usr/bin/python3

import polychromatic.fx

def play(fx, params={}):

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
    fx.clear()
    fx.matrix[0,0] = [255,0,0]
    fx.matrix[1,0] = [0,255,0]
    fx.matrix[2,0] = [0,0,255]
    fx.draw()
```

| Variable          | Returns   | Purpose                                     | Example      |
| ----------------- | --------- | ------------------------------------------- | ------------ |
| `params`          | dict      | User input as specified in the metadata. See [Parameters](#parameters) below. | `{"var1": "#00FF00", "var2": "Fast"}`
| `fx.rows`         | int       | Number of vertical LEDs                     | `6`
| `fx.cols`         | int       | Number of horiziontal LEDs                  | `22`
| `fx.name`         | str       | Human name of the device                    | `Razer BlackWidow Chroma`
| `fx.backend`      | str       | Name of backend providing this device       | `openrazer`
| `fx.form_factor`  | str       | Label for this type of device               | `keyboard`

<br>

| Function          | Returns   | Purpose                                           | Example Input | Example Output |
| ----------------- | --------- | ------------------------------------------------- | ------------- | --------------- |
| `fx.rgb_to_hex()` | str       | Input integers: `[R,G,B]` to get the hex value    | `[0,255,0]`   | `"#00FF00"`
| `fx.hex_to_rgb()` | list      | Input string: `("#RRGGBB")` to get separate R, G, B values | `"#FF0000"` | `[255,0,0]`
| `fx.matrix[X,Y] = [r,g,b]`    || Set a colour at the specified position (0-based, 3 RGB integers)  | |
| `fx.draw()`       |           | Send this frame to the hardware                   | |
| `fx.clear()`      |           | Wipe all LEDs to blank                            | |
| `fx.brightness()` |           | Input float: `percent` to change the brightness of **all** LEDs | `50` | All LEDs at 50% brightness

The script can be very flexible using the power of Python using `import`'s and
as many functions as desired. The application will detect these and inform the
user of dependencies.

At minimum, an effect must have:

* `#!/usr/bin/python3` as the shebang.
* `import polychromatic.fx`
* `def play(fx, params=[]):`


## Additional Metadata

Accompanying the Python file is the JSON file with the
[common metadata](../#common-metadata) in addition to:

```
{
    "required_os": ["any", "linux"],
    "parameters": []
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `required_os` | list      | If applicable, limit effect to run on these platforms. Use `["any"]` or `["linux", "macos", "windows"]`.
| `parameters`  | list      | See [Parameters](#parameters) below.

All fields are required.


### Parameters

Polychromatic will expose these in the interface for the user to choose,
and your effect will be able to reference them in `params["<var>"]`.

As expected with Python, if your script incorrectly references a non-existant
variable, the effect will abruptly halt with a `KeyError` exception.

```
"parameters": [
    {
        "var": "cpu_colour",
        "label": "CPU Colour",
        "type": "colour",
        "value": null,
        "default": "#00FF00"
    },
    {
        "var": "speed",
        "label": "Speed",
        "type": "list",
        "options": ["Fast", "Medium", "Slow"],
        "value": null,
        "default": "Slow"
    }
]
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `var`         | str       | Variable name, no spaces, case sensitive
| `label`       | str       | Human readable name (English)
| `label[fr]`   | str       | Human readable name (other language, e.g. `fr`)
| `type`        | str       | One of: `colour`, `list`, `int` or `str`
| `options`     | dict      | `type: "list"` only -- Options to show in the interface (English). See below.
| `options[fr]` | dict      | `type: "list"` only -- Options to show in other languages (e.g. `fr`)
| `value`       | str       | Current value as set by the user. Starts as `None` (null)
| `default`     | str       | When a value wasn't specified, use this value

When the `type` is `list`:

* `value` is validated against the list of `options`.
* An invalid `value` will fallback to the value of `default`.
* The `options` key should be populated with label/value combinations, like so:
    ```
    "options": {
        "Item A": 1,
        "Item B": 2,
        "Item C": 3
    },
    ```
* Localisation is supported in the interface:
    ```
    "options[fr]": {
        "Objet A": 1,
        "Objet B": 2,
        "Objet C": 3
    }
    ```
* When localised options are used, the application will validate to make sure they all offer the same values.

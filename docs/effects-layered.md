---
layout: docs
title: Layered Effects
permalink: /docs/config/effects/layered/
class: docs
---

## The Concept

This format uses a layer-based system to specify different properties and colours
that apply to specific LEDs. This is useful for creating dynamic effects
for your applications and games.

![Visualizing 3 layers on a keyboard](/assets/img/docs/effects-layer-concept.svg)


## Layer Types

{:.has-icons}
| ID | Type                                                  | Purpose              |
| -- | ----------------------------------------------------- | -------------------- |
| 10 | ![](/assets/img/docs/effects/static.svg) Static       | LEDs are lit up with a specific colour.
| 11 | ![](/assets/img/docs/effects/gradient.svg) Gradient   | LEDs are lit up with specific range of colours.
| 12 | ![](/assets/img/docs/effects/pulsate.svg) Pulsing     | LEDs get brighter and dimmer at an internal.
| 13 | ![](/assets/img/docs/effects/wave.svg) Wave           | Create a wave using colours of your choice.
| 14 | ![](/assets/img/docs/effects/spectrum.svg) Spectrum   | Smoothly fade between colours of your choice.
| 15 | ![](/assets/img/docs/effects/cycle.svg) Cycling       | Aruptly switch between colours of your choice.
| 16 | ![](/assets/img/docs/effects/code.svg) Scripted Effect| The output of an existing scripted effect can be displayed.

> Interactive effects like **Reactive** are not supported at the moment.

Layers at the top overlap layers (and their LEDs) below.


## Additional Metadata

In addition to the [common metadata](../#common-metadata), this effect is
specified by the following data. The format works like this:

```
    "layers": [
        {
            "name": "Static Layer",
            "type": 10,
            "positions": [],
            "properties": {}
        },
        { ... }
    ]
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `name`        | str       | Human friendly name of the layer
| `type`        | int       | Layer Type ID (see above)
| `positions`   | list      | A list consisting of lists with positions in format: `[x, y]`, e.g. `[1,2]`
| `properties`  | dict      | **See below.**

Each layer has its own set of `properties`:


### ![](/assets/img/docs/effects/static.svg) Static Layer

| Property      | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `colour`      | str       | Colour hex value

---

### ![](/assets/img/docs/effects/gradient.svg) Gradient Layer

| Property      | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `colours`     | list      | List of colour hex values
| `direction`   | int       | How to render the gradient:
|               |           | `0` = To right
|               |           | `1` = To bottom-right
|               |           | `2` = To bottom
|               |           | `3` = To bottom-left
|               |           | `4` = To left
|               |           | `5` = To top-left
|               |           | `6` = To top
|               |           | `7` = To top-right

---

### ![](/assets/img/docs/effects/pulsate.svg) Pulsing Layer

| Property      | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `colour`      | str       | Colour hex value
| `speed`       | float     | Time to alternate in seconds. For example, `2.5` would dim in `1.25` seconds, and then fade back to the `colour` in a total of `2.5` seconds.
| `strength`    | float     | Dimming strength between `0` and `1`. The stronger, the more darker the colour.

---

### ![](/assets/img/docs/effects/wave.svg) ![](/assets/img/docs/effects/spectrum.svg) Wave & Spectrum Layers

| Property      | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `colours`     | list      | List of colour hex values to wave/cycle between
| `speed`       | float     | Time to perform a complete loop (in seconds).

---

### ![](/assets/img/docs/effects/code.svg) Script Layer

| Property      | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `script_id`   | str       | Filename (without extension) of the [scripted effect] to run. Must have `.py` and `.json` file present.
| <custom>      | (any)     | Parameters to set for the [scripted effect] (if any)

[scripted effect]: ../scripted/

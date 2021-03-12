---
layout: docs
title: Device Maps & Graphics
permalink: /docs/devicemaps/
class: docs
---

## Overview

All devices that support individually addressable LEDs can be mapped to a grid.
These can also be visually mapped to a crafted graphic as well.

![Grid to device graphic](/docs/images/grid-to-graphic.webp)

## Contents

* [Preparing the Repository](#preparing-the-repository)
* **Sections to Edit**
  * [maps.json](#mapsjson)
  * [Device SVG](#device-svg)
  * [Scan Code JSON](#scan-code-json) (keyboards/keypads only)
* [Testing the changes](#testing-the-changes)

## Preparing the Repository

1. [Fork the `polychromatic` repository](https://github.com/polychromatic/polychromatic/fork) on GitHub.

2. Clone the repository to your computer.

       git clone https://github.com/<your username>/polychromatic.git

3. To run the application via the repository later, install `sassc`.


## Sections to Edit

The data is stored in `data/devicemaps/`

### maps.json

This contains all the mappings the user can choose from. Append your device
to the end of the list.

```
"Razer BlackWidow (M1-M5) - British": {
    "filename": "blackwidow_m_keys_en_GB.svg",
    "cols": 22,
    "rows": 6,
    "locale": "en_GB",
    "scancode": "blackwidow_m_keys.json"
},
```

* The dictionary key `({)` is the label shown in the interface.
  * This isn't translated, so it may be localized if applicable, e.g. "Razer Blade - Deutsche"
* `filename` points to the [SVG in the directory](#device-svg).
* `cols` is a 1-based count of the columns (X axis)
* `rows` is a 1-based count of the rows (Y axis)
* `locale` only applies to keyboards to indicate key mapping.
  * Leave `null` if not applicable.
* `scancode` points to another [JSON file that maps scan codes to the matrix](#scan-code-json)
  * Leave `null` if not applicable.

> If you don't know the `cols` or `rows` for the device, click **Device Info**
> from the Controller's [Devices](/docs/controller/devices/) tab.

---

### Device SVG

This is a vector graphic that looks similar to the actual hardware. It contains
additional metadata so Polychromatic knows where the LEDs are when editing
in the editor.

#### Step 1: Creating the shapes and paths

> You'll need an SVG editor, such as [Inkscape](https://inkscape.org/).
>
> Inkscape adds additional metadata that serves no purpose for the application's
> operation. When saving, please use [Plain SVG](https://wiki.inkscape.org/wiki/index.php/PlainSVG).

First, you'll want to perform the usual drawing/editing of the device.
If there is already an identical graphic in `data/devicemaps/`, feel free to use
one as a starting point.

Otherwise, it may help to embed a picture of the device and create
paths for the base unit and its individual LEDs.

> If you do embed an image to assist, don't forget to remove it SVG when you're
done. Contributions with embedded raster images will **not** be accepted.

Polychromatic will be changing an object's `fill` and `stroke` colour in the editor.
Make sure the shape/path has a sufficient stroke style (border). A stroke width
between `1.5px-2px` is recommended.

**Text Labels**

For text objects (like keys for a keyboard), use the **[Play font](https://github.com/polychromatic/polychromatic/raw/master/data/qt/fonts/Play_regular.ttf)** for consistency.
If you wish to use a different font, convert the text to path to ensure it can be seen across different operating systems.

Set the `class` attribute of these objects to `label`. These can be hidden by
the user if they prefer. If unsure on how to set attributes, see the next section.

---

#### Step 2: Add IDs and class attributes

> In **Inkscape**, open the **XML Editor** (Edit → XML Editor)

Have the co-ordinates of each LED ready. To find these out, open the Controller
to the [Devices](/docs/controller/devices/) tab, click **Device Info** and choose **Inspect Matrix**.
Look at the physical hardware to confirm the LED's position.

![Inspecting the matrix of a keyboard](/docs/images/inspect-matrix.webp)

Assign each node of an LED:

| Attribute | Value
| --------- | ------------
| `class`   | `LED`
| `id`      | The co-ordinate in this format: `x0-y0`
|           | e.g. `x11-y2` for `(11,2)`

This is an example for the <kbd>P</kbd> key on the BlackWidow graphic:

![XML Editor for the P key opened in Inkscape](/docs/images/inkscape-xml.webp)

> **There can only be one ID!**
> If there are multiple nodes that represent a specific LED, place those nodes
> into a group and assign the attributes to the parent `<g>` tag.

When a key is illuminated in the editor, the `fill` and `stroke` of the node
(and any children) will be coloured too:

    path, text g, rect, circle

A `path` node can be exempted if its stroke should not be painted. To do this, specify
a `nostroke` attribute with a value of `true`. For example, the <kbd>Tab</kbd> key
has a symbol that is only a fill colour, with no stroke style:

![XML Editor for the Tab key opened in Inkscape](/docs/images/inkscape-xml2.webp)

With and without the attribute:

![Screenshot of the editor and outline issue](/docs/images/editor-outline-compare.webp)

---


### Scan Code JSON

A **scan code** is an integer that describes the physical key. This typically only
applies to keyboards and keypads with physical inputs that are recognised by the
operating system as keystrokes.

> This will be used in a future update to provide interactivity.

For example, `30` is the scan code for the <kbd>Q</kbd> key on a standard QWERTY keyboard.
This is how the physical keys map out on the top-left area of a BlackWidow Chroma keyboard:

![Example of a BlackWidow Keyboard's Scan Codes](/docs/images/scan-code.webp)

> A **key code** is similar, but these describe the actual character/function
> of that key, like <kbd>A</kbd> or <kbd>CTRL</kbd>. This varies depending on
> the keyboard layout for your locale.
>
> For instance, scan code `35` translates to <kbd>Y</kbd> for English (QWERTY)
> keyboards, but is <kbd>Z</kbd> on German (QWERTZ) keyboards.

In `maps.json`, you can specify an existing (or create a new) JSON file that
matches the scan code to the position on the LED matrix.

```
"1": [1, 0],

"59": [3, 0],
"113": [3, 0],
"60": [4, 0],
"114": [4, 0],
"61": [5, 0],
"115": [5, 0],
"62": [6, 0],
```

Scan codes can be determined by running `evtest` as root (the package may need
to be installed)

    sudo evtest

After choosing the input file for the hardware, pressing <kbd>Q</kbd> outputs:

```
qEvent: time 1612876038.328661, type 4 (EV_MSC), code 4 (MSC_SCAN), value 70014
Event: time 1612876038.328661, type 1 (EV_KEY), code 16 (KEY_Q), value 0
```

In which the scan code `16` for this key.

    type 1 (EV_KEY), code 16 (KEY_Q)
                     ^^^^^^^

This can be recorded into the JSON file and linked up to its position on the
LED matrix.


---

### Testing the changes

Once the files have been created/updated, it's time to test the changes!

Run `polychromatic-controller-dev` from the repository and try:

* Creating a new effect. Your new graphic should be listed here.
* Changing the colours of all LEDs (turn on "live preview" in Preferences)
* Double check the colours on-screen match the physical hardware.

When everything's in working order, commit your changes and hop on over to
GitHub to create a pull request!

> Scan codes are for future use and cannot be tested at this time.

---
layout: docs
title: Sequence Effects
permalink: /docs/config/effects/sequence/
class: docs
---

## The Concept

This format uses a frame system to light up LEDs like drawing a raster image.
These effects can be static or be made up of multiple frames to create an animation.

Images, videos and GIF files can be imported to be converted into blocky
pixels. The playback speed and whether the effect loops can be adjusted too.

> You may wonder if it's possible to play back a 30 FPS video, but it's
> likely you'll run into bottlenecks or worse, put strain on the hardware's
> LED controller.


## Additional Metadata

In addition to the [common metadata](../#common-metadata), this effect is
specified by the following data:

```
{
    "fps": 10,
    "loop": true,
    "frames": [
        {
            "0": {
                "0": [0,255,0],
                "1": [0,128,0],
                "2": [0,64,0],
            },
            "1": {}
        }
    ]
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `frames`      | list      | A dictionary for each frame describing how to light up the LEDs
|               |           | The key is `row`, followed by keys of the `columns`.
|               |           | The value is stored as a list with 3 RGB integers, e.g. `[255,255,255]`
| `fps`         | int       | Approximately how many frames to render per second. This isn't precise due to influences by the LED's firmware and backend software.
| `loop`        | bool      | Repeat the effect after the last frame?

Prior to running the effect, the application will validate to fill in blanks
where the device has too few rows/columns to the original.

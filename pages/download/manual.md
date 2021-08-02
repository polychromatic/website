---
layout: download-page
title: Build Instructions
permalink: /download/manual/
distro: generic
distro_name: Build Instructions
distro_accent: '0,128,0'
class: download
---

## Prerequisites

* `meson` and `ninja` are required to build the project. The build system allows
for modularity should you wish to only install specific components (tray applet, controller, CLI)

* You'll need an implementation of SASS to compile Polychromatic's Qt styling. `sassc` is widely
available, but there's other implementations that could be used.

* `intltool` is required for compiling translations.

* `git` is needed for retrieving the source code.

[Full Dependencies List](https://docs.polychromatic.app/dependencies/){:.btn}


## Building

Clone the repository and build as follows:

```
git clone https://github.com/polychromatic/polychromatic.git
cd polychromatic
meson build
ninja -C build install
```


## Running directly in the repository

Providing the [application and build dependencies](https://docs.polychromatic.app/dependencies/)
are installed, the software can be ran directly from the folder.
Useful for testing, hacking, bisecting or debugging changes.

```
./polychromatic-controller-dev
./polychromatic-tray-applet
./polychromatic-cli
```

Your configuration and cache is isolated to a `savedatadev` directory
when running via `polychromatic-controller-dev`. To isolate for other components,
set this environment variable:

    export POLYCHROMATIC_DEV_CFG=true


## Minimal /opt files

Alternately, if you already have all of the application's dependencies installed,
there is a script to generate the minimal files needed to run that can be placed into `/opt`, or
anywhere else on the system where a normal installation is limited.

This lacks integration with the desktop, as this method excludes the placement
of desktop launchers (including automatic start at login). These could be
manually placed in your `~/.local/share/applications` and desktop's start-up
programs, if desired.

```
./scripts/create-files-for-opt.sh <destination>
```


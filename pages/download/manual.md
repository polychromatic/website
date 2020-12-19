---
layout: download-page
title: Manual Installation
permalink: /download/manual/
distro: generic
distro_name: Manual Installation
class: download
---

> Only applies to `master` branch.

### Building

`meson` and `ninja` is required to build the project. The build system allows
for modularity should you wish to exclude the tray applet, controller or CLI.

You'll need an implementation of `sass` to compile the Qt styling. `sassc` is widely
available, but there's other implementations that could be used (e.g. `dart-sass`, RubyGems `sass`, or NPM `sass`)

For instructions on building, see the ["Manual Installation" download page](/download/manual/).

You'll need to install the latest versions of `git`, `meson` and `ninja`, as well
as the [application's dependencies](/docs/dependencies/).

```
git clone https://github.com/polychromatic/polychromatic.git
cd polychromatic
meson build
ninja -C build install
```

### Development Mode

For quick testing or to start hacking the code right away, you can run Polychromatic
from the root of the repository, providing the
[application's dependencies](/docs/dependencies/) have been installed.

```
./polychromatic-controller-dev
./polychromatic-tray-applet
./polychromatic-cmd
```

In development mode, the application will compile the styling required to render the UI each time it is ran.

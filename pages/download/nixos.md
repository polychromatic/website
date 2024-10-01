---
layout: download-page
title: Download for NixOS
permalink: /download/nixos/
class: download

distro_name: NixOS
distro_icon: nixos.svg
distro_accent: '82,119,195'
community_package: true
order: 45
---

Members of the NixOS community [maintain a package of Polychromatic.](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/misc/polychromatic/default.nix)

### With a command

```shell
nix-shell -p polychromatic
```

### Or, by updating configuration.nix

```
environment.systemPackages = with pkgs; [
    polychromatic
];
```

Then rebuild your system:

```shell
sudo nixos-rebuild switch
```

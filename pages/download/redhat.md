---
layout: download-page
title: Download for Red Hat
permalink: /download/redhat/
distro: redhat
distro_name: Red Hat
distro_accent: '233,52,66'
class: download

backends:
    openrazer: https://openrazer.github.io/#redhat
---

These packages are maintained by [moozhub] in the [moozhub/yum-repo-mooz] repository.

```
sudo yum -y install yum-utils
sudo yum-config-manager --add-repo=https://raw.githubusercontent.com/moozhub/yum-repo-mooz/master/elmooz.repo
sudo yum install polychromatic
```

For packaging or dependency problems, please [raise the issue] in their repository.

[moozhub]: https://github.com/moozhub
[moozhub/yum-repo-mooz]: https://github.com/moozhub/yum-repo-mooz
[raise the issue]: https://github.com/moozhub/yum-repo-mooz/issues

---
layout: docs
title: How to Translate
permalink: /docs/translations/
class: docs
---

> **Heads up! v1.0.0 is in alpha!**
>
> The next generation of the software is still in development. This just means
> that strings are not finalized, but feel free to get a head start!
>
> Existing locales will need updating as there are new strings.
>

## Overview

Polychromatic uses gettext to localize the application to different languages.
The source language is **English (UK)** in both the UI and code.

These instructions are aimed for contributors looking to add a new or update
an existing language.

## Contents

* [Preparing the repository](#preparing-the-repository)
* [Performing a new translation](#performing-a-new-translation)
* [Testing a translation](#testing-a-translation)
* [Committing your changes](#committing-your-changes)
* [Updating existing translations](#updating-existing-translations)

## Requirements

* A PO editor, such as [Poedit]
* A [GitHub](https://github.com) account


## Steps

Before starting, make sure there isn't [any open pull request](https://github.com/polychromatic/polychromatic/pulls)
for your language already.

This guide will use [Poedit] for performing the translation.


### Preparing the repository

1. [Fork the `polychromatic`](https://github.com/polychromatic/polychromatic/fork) repository on GitHub.

1. Clone the repository to your computer.

       git clone https://github.com/<your username>/polychromatic.git

1. Install the packages `intltool` and `gettext` for your distribution.

1. Ensure the translation template is up-to-date from the source code.

       ./scripts/create-locales.sh


### Performing a new translation

1. Open `locale/polychromatic.pot` and click the **[Create New Translation]** button.

    ![Screenshot of Poedit after opening pot file](/docs/images/poedit-1.png)

1. Choose your desired language.

    ![Language selection screen](/docs/images/poedit-2.png)

1. Start translating!

    ![Example of translating to Spanish](/docs/images/poedit-3.png)

1. When finished, save the file to the `locales` directory.

    Poedit will automatically set the filename to the locale code as appropriate.
    For example, **"Spanish (Spain)"** is saved as **"es_ES.po"**

1. Open `locale/LINGUAS` in your text editor and add the new locale code.


### Testing a translation

1. Build the locales:

       ./scripts/build-locales.sh

1. Run the application from the repository, using the `--locale` parameter to
    specify the locale code.

    A package or two might need to be installed in order to build
    the Controller. A message will let you know if something is missing.

       ./polychromatic-controller-dev --locale <locale>
       ./polychromatic-tray-applet --locale <locale>
       ./polychromatic-cli --locale <locale>

    Note that only the user interface is translated. Diagnosis output in
    the Terminal remains in English.


### Committing your changes

1. Inside the root of the repository, commit the files using Git and push to your fork (`origin`)

       git add locale/<locale>.po
       git add locale/LINGUAS
       git commit -m "Add translation for <locale>"
       git push origin master

    Please do not stage/commit the `.pot` or other `.po` files if they are
    modified.

1. Open a pull request on GitHub.

       https://github.com/<Your GitHub Username>/polychromatic/compare


### Updating existing translations

1. Pull the latest source code to your copy of the repository.

       git reset HEAD --hard
       git pull --rebase https://github.com/polychromatic/polychromatic.git master

1. Ensure the translation template is up-to-date from the source code.

       ./scripts/create-locales.sh

2. Open [Poedit] and translate! When finished, commit the modified PO file as usual.

    Please do not stage/commit the `.pot` or other `.po` files if they are
    modified.



[Poedit]: https://poedit.net/

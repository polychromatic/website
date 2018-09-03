---
layout: docs
title: How to Translate
permalink: /docs/translations/
category: dev
---

## Overview

Polychromatic uses gettext to localize the application to different languages.
The source language is **English (US)**.

These instructions are aimed for contributors not 100% familiar with how the
process works.

---
**Note: These instructions apply to the new development version (v0.4.0) of Polychromatic.**

---

## Requirements

* [Poedit](https://poedit.net/) (or any other PO/POT editor)
* [GitHub](https://github.com) account

## Files

* `locale/polychromatic.pot` - all strings are contained here.
* `locale/*.po` - all translations for the locale (e.g. `de` for German)
* `locale/LINGUAS` - list of locales for the build system.
* `tools/generate-pots.sh` - extracts all the strings (updates the POT file for translation)

## Steps

### Preparing the Repository

1. [Fork the `polychromatic`](https://github.com/polychromatic/polychromatic/fork) repository on GitHub.

2. Clone the repository to your computer.

       git clone https://github.com/<your username>/polychromatic.git

3. *(Recommended)* Run the `tools/generate-pots.sh` script to ensure templates are up-to-date.

    * You will need to have `pygettext` and `msgcat` (usually in `gettext` package) installed.

### Using Poedit

1. Open the `polychromatic.pot` file in Poedit. Click the **Create New Translation** button.

    ![Screenshot of Poedit after opening pot file](/docs/images/poedit-1.png)

2. Choose your desired language.

    ![Language selection screen](/docs/images/poedit-2.png)

3. Start translating!

    ![Example of translating](/docs/images/poedit-3.png)

4. Save the new `.po` file, commit and push your changes.

       cd polychromatic/
       git add locale/
       git commit -m "Add translation for <locale>"
       git push origin master

    It is normal that Poedit will generate a `.mo` file which would be used by the
    application, but should be ignored when committing.

5. If you are adding a new language, add its locale to the `LINGUAS` file.

6. Open a pull request on GitHub.

       https://github.com/<your username>/polychromatic/compare


### Updating existing translations

For translations that need updating, the latest strings for that locale can be obtained by running
`tools/generate-pots.sh` first, then by choosing **Catalogue** → **Update from POT File** from Poedit,
specifying `polychromatic.pot`.

![Screenshot of updating translations in Poedit](/docs/images/poedit-4.png)

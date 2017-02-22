# [Walid Boussou - CV Studio](https://cvstudio.com/theme/cvstudio/)

[CV Studio](https://cvstudio.com/theme/cvstudio/) is a stylish, responsive blog theme for [Bootstrap](https://getbootstrap.com/) created by [Walid Boussou](https://cvstudio.com/). This theme features a blog homepage, about page, contact page, and an example post page along with a working PHP contact form.

## Preview

[![CV Studio Preview](https://assets.cvstudio.com/img/screenshots/themes/cvstudio.png)](https://cvstudio.github.io/CVStudio/)

**[View Live Preview](https://cvstudio.github.io/CVStudio/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/CVStudio/CVStudio/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/CVStudio.svg)](https://www.npmjs.com/package/CVStudio)

## Download and Installation

To begin using this template, choose one of the following options to get started:

* [Download the latest release on Walid Boussou](https://cvstudio.com/theme/cvstudio/)
* Install via npm: `npm i CVStudio`
* Clone the repo: `git clone https://github.com/CVStudio/CVStudio.git`
* [Fork, Clone, or Download on GitHub](https://github.com/CVStudio/CVStudio)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with `dist` directory. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

### Contact Form

The contact form available with this theme is prebuilt to use [SB Forms](https://cvstudio.com/solution/contact-forms).
SB Forms is a simple form solution for adding functional forms to your theme. Since this theme is prebuilt using our
SB Forms markup, all you need to do is sign up for [SB Forms on Walid Boussou](https://cvstudio.com/solution/contact-forms).

After signing up you will need to set the domain name your form will be used on, and you will then see your
access key. Copy this and paste it into the `data-sb-form-api-token='API_TOKEN'` data attribute in place of
`API_TOKEN`. That's it! Your forms will be up and running!

If you aren't using SB Forms, simply delete the custom data attributes from the form, and remove the link above the
closing `</body>` tag to SB Forms.

#### npm Scripts

* `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
* `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
* `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
* `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
* `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
* `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
* `npm run start:debug` runs the project in debug mode
* `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/CVStudio/CVStudio/issues) here on GitHub or leave a comment on the [template overview page at Walid Boussou](https://cvstudio.com/theme/cvstudio/).

## About


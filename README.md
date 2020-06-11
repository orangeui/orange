<img src="https://orangecss.com/images/empty-state.svg" width="120px" />

# Orange
**Open-source UI by Fomo**  
[orangecss.com](https://orangecss.com)  

Orange offers a set of UI tools and components made for rapid development. It strives to provide elements that easily fit together so developers can focus solely on building products.

[Read the documentation](https://orangecss.com/docs)  
[Our manifesto](https://orangecss.com/manifesto)   
[Visit Fomo](https://fomo.com)

---

[Quick start](#quick-start) · [Customize](#customize) · [Contribute](#contribute) · [License](#license)

---

## Quick start
There's a couple ways to get you started with Orange. At this time we provide:
- Orange CDN (minimized)
- Node.js (minimized, source code)
- Git repository (minimized, source code)

### Orange CDN
The quickest way to getting started is linking to a minimized version of Orange hosted on our servers.

###### Installation
Add these styles and scripts to all your pages:

``` html
<link rel="stylesheet" href="https://cdn.orangecss.com/1.5.0/css/orange.min.css">
<script src="https://cdn.orangecss.com/1.5.0/js/orange.min.js"></script>
```

... and you're good to go! You'll probably want to [read the documentation](https://orangecss.com/docs) for examples and explanations of available tools.

### Node.js
If you're working on an app powered by Node.js it might make most sense to have Orange among your project's dependencies. But besides version control, this setup let you [customize](#customize) Orange's styling.

You can find this package listed on npm, under the name [@orange-ui/orange](https://www.npmjs.com/package/@orange-ui/orange).

###### Installation

``` sh
yarn add @orange-ui/orange
```

###### Styles and scripts
The simplest way to setup styles and scripts is by using the pre-built versions that can be found in the `/dist` folder within this package.

For this setup, make both `~@orange-ui/orange/dist/css/orange.min.css` and `~@orange-ui/orange/dist/js/orange.min.js` available on all of your pages. Done! You'll probably want to [read the documentation](https://orangecss.com/docs) for examples and explanations of available tools.

###### More control over styles
You can gain more control over Orange, however, by importing `scss` versions of styles found in the same package. Read the [customize](#customize) section for insights on what's possible.



### Git repository
All of Orange's source code is availabe within this repository - [download or fork it](https://github.com/orangeui/orange) on GitHub. Oh, and since you're here, check out the [contribute](#contribute) section.

---

## Customize
It's possible to:

- import  parts of Orange
- change fonts (Google Fonts support)
- adjust colors, dimensions, type scale, etc.

To achieve the above you will need to compile `scss` rather than import `css` stylesheets. Configure your environment like so:

###### 1. Set up styles
See [main.scss](https://github.com/orangeui/orange/blob/master/src/scss/src/main.scss) for the complete list of components and utilities you can pick from.  

First copy the contents of `main.scss` to your app's main styleshet.  
Next, comment out anything you don't need.

``` scss
/** Orange (example configuration) */

/** Core (required) */
@import '~@orange-ui/orange/src/scss/src/_functions';
@import '~@orange-ui/orange/src/scss/src/_variables';
@import '~@orange-ui/orange/src/scss/src/_typography';
@import '~@orange-ui/orange/src/scss/src/_global';

/** Icons (required) */
@import "icons/fontello";
@import "icons/fontello-reset";

/** Utilities (optional) */
@import '~@orange-ui/orange/src/scss/src/utilities/_spacings';
@import '~@orange-ui/orange/src/scss/src/utilities/_colors';
// @import '~@orange-ui/orange/src/scss/src/utilities/_shadows';
// @import '~@orange-ui/orange/src/scss/src/utilities/_text';

/** Components (optional) */
@import '~@orange-ui/orange/src/scss/src/components/_avatar';
@import '~@orange-ui/orange/src/scss/src/components/_breadcrumbs';
@import '~@orange-ui/orange/src/scss/src/components/_card';
// @import '~@orange-ui/orange/src/scss/src/components/_checkbox';
// @import '~@orange-ui/orange/src/scss/src/components/_empty-state';
...
```

###### 2. Set up variables
Make a copy of [_variables.scss]('https://github.com/orangeui/orange/blob/master/src/scss/src/_variables.scss') and include it just about anywhere.  

``` scss
/** Overrides */
@import '_variables';
```
Remove all `!default` modifiers from your newely created file - this will allow values you set to override the defaults.

###### 3. Set up scripts
Add all scripts from `~@orange-ui/orange/src/js/src/*` to your scripts.

---

## Contribute

Write code? [Open an issue](https://github.com/orangeui/orange/issues) on GitHub!

---

## License
Read the [MIT license](https://github.com/orangeui/orange/blob/master/LICENSE).

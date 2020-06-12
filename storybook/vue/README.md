<img src="https://orangecss.com/images/empty-state.svg" width="120px" />

# Orange Vue
**Open-source UI by Fomo**  
[vue.orangecss.com](https://vue.orangecss.com)  

Orange Vue offers a set of UI tools and components made for rapid development. It strives to provide elements that easily fit together so developers can focus solely on building products.

[Read the documentation](https://vue.orangecss.com//?path=/docs/1-getting-started-install--install)  
[Our manifesto](https://vue.orangecss.com/?path=/docs/0-overview-manifesto--manifesto)   
[Visit Fomo](https://fomo.com)

---

[Quick start](#quick-start) · [Customize](#customize) · [Contribute](#contribute) · [License](#license)

---

## Quick start
There's a couple ways to get you started with Orange. At this time we provide:
- Node.js (minimized, source code)
- Git repository (minimized, source code)


### Node.js
If you're working on an app powered by Node.js it might make most sense to have Orange among your project's dependencies. But besides version control, this setup let you [customize](#customize) Orange's styling.

You can find this package listed on npm, under the name [@orange-ui/vue](https://www.npmjs.com/package/@orange-ui/vue).

###### Installation

``` sh
yarn add @orange-ui/vue
```

###### Styles and components
The simplest way to setup styles is by using the pre-built versions that can be found in the `/dist` folder within this package.

For this setup import styles `import "~@orange-ui/vue/dist/orangevue.css"` and import components like `import OButton from "~@orange-ui/vue/src/components/Button/Button"` to your `main.js` file and register them as `Vue.component('o-button', OButton)`. Done!

You'll probably want to [read the documentation](https://vue.orangecss.com//?path=/docs/1-getting-started-install--install) for examples and explanations of available components and their props.

###### More control over styles
You can gain more control over Orange, however, by importing `scss` versions of styles found in the same package. Read the [customize](#customize) section for insights on what's possible.



### Git repository
All of Orange's source code is availabe within this repository - [download or fork it](https://github.com/orangeui/orange) on GitHub. Oh, and since you're here, check out the [contribute](#contribute) section.

---

## Customize
It's possible to:

- import parts of Orange
- change fonts (Google Fonts support)
- adjust colors, dimensions, type scale, etc.

To achieve the above you will need to compile `scss` rather than import `css` stylesheets. Configure your environment like so:

###### 1. Set up styles
See [main.scss](https://github.com/orangeui/orange/blob/master/src/scss/src/main.scss) for the complete list of components and utilities you can pick from.  

First copy the contents of `main.scss` to your app's main stylesheet.  
Next, comment out anything you don't need.

``` scss
/** Orange (example configuration) */

/** Core (required) */
@import '~@orange-ui/vue/src/scss/src/_functions';
@import '~@orange-ui/vue/src/scss/src/_variables';
@import '~@orange-ui/vue/src/scss/src/_typography';
@import '~@orange-ui/vue/src/scss/src/_global';

/** Icons (required) */
@import "~@orange-ui/vue/src/scss/src/icons/fontello";
@import "~@orange-ui/vue/src/scss/src/icons/fontello-reset";

/** Utilities (optional) */
@import '~@orange-ui/vue/src/scss/src/utilities/_spacings';
@import '~@orange-ui/vue/src/scss/src/utilities/_colors';
// @import '~@orange-ui/vue/src/scss/src/utilities/_shadows';
// @import '~@orange-ui/vue/src/scss/src/utilities/_text';

/** Components (optional) */
@import '~@orange-ui/vue/src/scss/src/components/_avatar';
@import '~@orange-ui/vue/src/scss/src/components/_breadcrumbs';
@import '~@orange-ui/vue/src/scss/src/components/_card';
// @import '~@orange-ui/vue/src/scss/src/components/_checkbox';
// @import '~@orange-ui/vue/src/scss/src/components/_empty-state';
...
```

###### 2. Set up variables
Make a copy of [_variables.scss](https://github.com/orangeui/orange/blob/master/src/scss/src/_variables.scss) and include it just about anywhere.

``` scss
/** Overrides */
@import '_variables';
```
Remove all `!default` modifiers from your newely created file - this will allow values you set to override the defaults.

Most likely you will need to fix path to icon font to something like
```scss
$o-font-icon-url: '~@orange-ui/vue/src/fonts';
```

---

## Contribute
Write code? [Open an issue](https://github.com/orangeui/orange/issues) on GitHub!

---

## License
Read the [MIT license](https://github.com/orangeui/orange/blob/master/LICENSE).


---

# Storybook
Orange Vue documentation is based on [Storybook](https://storybook.js.org/) where you can get all the informations about components and their props.

Most of our components have ability to be tried as Tryout / Live Example of applying different props.

## Development

### Setup

Git clone [Orange repository](https://github.com/orangeui/orange) and change directory to `storybook/vue` and run.

```
yarn install
```

### Development
For active Storybook development run.

```
yarn storybook
```

### Production
After we are done with it we will generate static files.

```
yarn build-storybook
```

### Unit tests
We need to run tests to check Storybook snapshots if anything changed. If we changed something we need to manually check it out. 
When we are sure that all is fine we will run the command below with `-u` to update them.

```
yarn test:unit
```

### Linting
Using linting to have consistent code styles.

```
yarn lint
```

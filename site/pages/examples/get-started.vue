<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Orange</h1>
      <h2>Open-source UI library by <a href="https://fomo.com" target="_blank">Fomo</a>. <mark>Orange Vue</mark> packs components and a framework for building projects in Vue.js; <mark>Orange CSS</mark> is a prebuilt version of the same juice.</h2>
    </div>

    <docs-item title="Orange Vue" class="explanation">
      <div slot="body">
        <h3>Install with a package manager</h3>
        <p>Add Orange Vue to your packages:</p>
        <code-block code="yarn add orange-vue" code_markup="Shell" />

        <p>Next, import Orange's source SCSS in your main stylesheet:</p>

        <code-block code='@import "~/orange-vue/src/style/orange";' code_markup="SCSS" />

        <p>While the line above imports all components at once it's possible to cherry pick only the one's you need. Import required files first, selected components second:</p>

        <code-block code='// required
@import "~/orange-vue/src/style/functions";
@import "~/orange-vue/src/style/variables";
@import "~/orange-vue/src/style/mixins";
@import "~/orange-vue/src/style/helpers";

// cherry picked components
@import "~/orange-vue/src/style/components/button";
@import "~/orange-vue/src/style/components/form";' code_markup="SCSS" />

        <h3>Customization</h3>
        <p>To customize the way Orange looks and feels create a copy of <code>~/orange-vue/src/style/variables.scss</code> and include it before or after other Orange stylesheets. Here's an example:</p>

        <code-block code='@import "~/orange-vue/src/style/orange";
@import "/assets/scss/custom-variables";' code_markup="SCSS" />

        <h3>Staying up to date</h3>
        <p>Run <code>npm update && npm upgrade orange-vue</code> to update Orange to the latest stable release. Read the <a href="#">release notes</a> before updating as the components may change specs.</p>

        <h3>Other ways to use it</h3>
        <p>If installing via NPM is not your thing you can obtain all components and styles manually. Download or fork the <a href="#">Orange Vue repository</a> on GitHub.</p>

        <h3>Contribute to Orange</h3>
        <p>We're inviting everyone who wants to improve Orange to <mark>open a pull request</mark>. It's likely your code will be included in future releases!</p>
      </div>
    </docs-item>

    <docs-item title="Orange CSS" class="explanation">
      <div slot="body">
        <p>Projects that are not written in Vue.js can benefit from Orange by using Orange CSS (always up to date with Orange Vue). Add it as an NPM package or link to it from our CDN.</p>

        <h3>Install via CDN</h3>
        <p>If you wish you can link to a production ready version of the library that's hosted on a CDN. The latest release can be found at <mark>https://cdn.address.com/orange-css--latest.min.css</mark>.</p>

        <code-block code='<link rel="stylesheet" href="https://cdn.orangecss.com/1.1.1/css/orange.min.css">' code_markup="HTML" />

        <p>Reference this page for a list of <a href="https://cdn.orangecss.com/">current and past releases</a>.</p>

        <h3>Install via NPM</h3>
        <p>Include Orange CSS in your project by first running:</p>
        <code-block code="npm add orange-css" code_markup="Shell" />
        <p>And later adding it to your pages.</p>
      </div>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'GetStarted',

  data () {
    return {

    }
  }
}
</script>

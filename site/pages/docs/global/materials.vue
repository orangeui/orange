<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Materials</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Helpers that give color and illusion of space to an interface.</p>
      </div>
    </docs-item>

    <!-- Backgrounds -->
    <docs-item title="Backgrounds" :code="backgrounds_list_code" :css_code="backgrounds_css">
      <div slot="body">
        <p>
          <o-label size="small" text="HTML" /> apply a background color by adding <code>.bg-{color}</code> class
        </p>

        <p>
          <o-label size="small" text="SCSS" /> apply a background color with the <code>color('{color}')</code> function
        </p>

        <docs-background-color-list :items="backgrounds_list" />
      </div>
    </docs-item>

    <!-- Shadows -->
    <docs-item title="Shadows" :code="shadows_list_code" :css_code="shadows_css">
      <div slot="body">
        <p>
          <o-label size="small" text="HTML" /> apply a shadow by adding <code>.shadow-{shadow}</code> class
        </p>

        <p>
          <o-label size="small" text="SCSS" /> apply a shadow with the <code>shadow('{shadow}')</code> function
        </p>

        <docs-background-color-list :items="shadows_list" />
      </div>
    </docs-item>

    <!-- Materials - Usage  -->
    <docs-item title="Usage">
      <table class="table table--compact table--celled" slot="body">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
            <th>Type</th>
            <th>Syntax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bg-color</td>
            <td>See <a href="/colors">Colors</a> page for possible values</td>
            <td>Class</td>
            <td><code>.bg-{color}</code></td>
          </tr>
          <tr>
            <td>box-shadow</td>
            <td>Possible values: <code>primary</code>, <code>input</code></td>
            <td>Mixin</td>
            <td><code>shadow('{shadow}')</code></td>
          </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsMaterials',

  data () {
    return {
      backgrounds_list: [
        {
          title: 'White',
          class: 'bg-white'
        },
        {
          title: 'Gray',
          class: 'bg-gray'
        },
        {
          title: 'Black',
          class: 'bg-black'
        },
        {
          title: 'Primary',
          class: 'bg-primary'
        },
        {
          title: 'Secondary',
          class: 'bg-secondary'
        }
      ],
      backgrounds_css: `.example-class {
  background-color: color('{color}');
}`,
      backgrounds_list_code: `<div class="bg-white"></div>
<div class="bg-gray"></div>
<div class="bg-black"></div>
<div class="bg-secondary"></div>
<div class="bg-primary"></div>`,
      shadows_list: [
        {
          title: 'Primary',
          class: 'shadow-primary bg-white'
        },
        {
          title: 'Secondary',
          class: 'shadow-secondary bg-white'
        },
        {
          title: 'Input',
          class: 'shadow-input bg-white'
        }
      ],
      shadows_css: `.example-class {
  box-shadow: shadow('{shadow}');
}`,
      shadows_list_code: `<div class="shadow-primary"></div>
<div class="shadow-secondary"></div>
<div class="shadow-input"></div>`
    }
  }
}
</script>

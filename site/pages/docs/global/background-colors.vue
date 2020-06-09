<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Background Colors</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Helpers that give color to an interface.</p>
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

    

    <!-- Backgrounds - Usage  -->
    <docs-item title="Usage">
      <table class="o-table o-table--compact o-table--celled" slot="body">
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
            <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page for possible values</td>
            <td>Class</td>
            <td><code>.bg-{color}</code></td>
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
      
    }
  }
}
</script>

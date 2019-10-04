<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Box Shadow</h1>
    </div>

    <!-- <docs-item class="explanation">
      <div slot="body">
        <p>Values that define empty space between elements.</p>
      </div>
    </docs-item> -->

    <!-- Shadows -->
    <docs-item title="" :code="shadows_list_code" :css_code="shadows_css">
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

  </div>
</template>

<script>
export default {
  name: 'DocsBoxShadow',

  data () {
    return {
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

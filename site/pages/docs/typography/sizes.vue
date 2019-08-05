<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Sizes</h1>
    </div>

    <!-- Type Sizes  -->
    <docs-item :code="fontSizesHTML" :css_code="fontSizesCSS">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply sizes by adding <code>.fs-{size}</code> class to text elements</p>
        <p><o-label text="SCSS" size="small" />  recall size values with the <code>fontSize('{size}')</code> function</p>
      </div>

      <docs-simple-list :items="fontSizes" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsScale',

  data () {
    return {
      fontSizes: [
        {
          title: 'Giga',
          content: '76 Giga',
          class: 'fs-giga font-bold',
          code: '<p class="fs-giga">76 Giga</p>'
        },
        {
          title: 'Mega',
          content: '54 Mega',
          class: 'fs-mega font-bold',
          code: '<p class="fs-mega">54 Mega</p>'
        },
        {
          title: 'Alpha',
          content: '36 Alpha',
          class: 'fs-alpha',
          code: '<p class="fs-alpha">36 Alpha</p>'
        },
        {
          title: 'Beta',
          content: '28 Beta',
          class: 'fs-beta',
          code: '<p class="fs-beta">28 Beta</p>'
        },
        {
          title: 'Gamma',
          content: '21 Gamma',
          class: 'fs-gamma',
          code: '<p class="fs-gamma">21 Gamma</p>'
        },
        {
          title: 'Delta',
          content: '18 Delta',
          class: 'fs-delta',
          code: '<p class="fs-delta">18 Delta</p>'
        },
        {
          title: 'Epsilon',
          content: '16 Epsilon',
          class: 'fs-epsilon',
          code: '<p class="fs-epsilon">16 Epsilon</p>'
        },
        {
          title: 'Zeta',
          content: '14 Zeta',
          class: 'fs-zeta',
          code: '<p class="fs-zeta">14 Zeta</p>'
        },
        {
          title: 'Omega',
          content: '12 Omega',
          class: 'fs-omega',
          code: '<p class="fs-omega">12 Omega</p>'
        }
      ],
      fontSizesHTML: `<p class="fs-giga">76 Giga</p>
<p class="fs-mega">54 Mega</p>
<p class="fs-alpha">36 Alpha</p>
<p class="fs-beta">28 Beta</p>
<p class="fs-gamma">20 Gamma</p>
<p class="fs-delta">18 Delta</p>
<p class="fs-epsilon">16 Epsilon</p>
<p class="fs-zeta">14 Zeta</p>
<p class="fs-omega">12 Omega</p>`,
      fontSizesCSS: `.example-class {
  font-size: fontSize('giga');
}`
    }
  }
}
</script>

<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Text align</h1>
    </div>

    <!-- Alignments  -->
    <docs-item title="" :code="textAlignHTML">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply align by adding <code>.text-{align}</code> class to text elements</p>
        <p><o-label text="Responsive" size="small" /> apply responsive align with <code>.{breakpoint}:text-{align}</code> class to text elements</p>
      </div>

      <docs-simple-list :items="textAlign" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsTextAlign',

  data () {
    return {
      textAlignHTML: `<p class="text-left">Text align left</p>
<p class="text-right">Text align right</p>
<p class="text-center">Text align center</p>

<p class="md:text-left">Left aligned text on viewport size MD or wider</p>
<p class="sm:text-center">Center aligned text on viewport size SM or wider</p>
<p class="xs:text-right">Right aligned text on viewport size XS or wider</p>`,
      textAlign: [
        {
          title: '',
          content: 'Text align left',
          class: 'fs-gamma text-left',
          code: '<p class="text-left">Text align left</p>'
        },
        {
          title: '',
          content: 'Text align right',
          class: 'fs-gamma text-right',
          code: '<p class="text-right">Text align right</p>'
        },
        {
          title: '',
          content: 'Text align center',
          class: 'fs-gamma text-center',
          code: '<p class="text-center">Text align center</p>'
        },
        {
          title: '',
          content: 'Left aligned text on viewport size MD or wider',
          class: 'fs-gamma md:text-left',
          code: '<p class="md:text-left">Left aligned text on viewport size MD or wider</p>'
        },
        {
          title: '',
          content: 'Center aligned text on viewport size SM or wider',
          class: 'fs-gamma sm:text-center',
          code: '<p class="sm:text-center">Center aligned text on viewport size SM or wider</p>'
        },
        {
          title: '',
          content: 'Right aligned text on viewport size XS or wider',
          class: 'fs-gamma xs:text-right',
          code: '<p class="xs:text-right">Right aligned text on viewport size XS or wider</p>'
        },
      ],
    }
  }
}
</script>

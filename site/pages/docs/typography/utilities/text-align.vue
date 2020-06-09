<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Text align</h1>
    </div>

    <!-- Alignments  -->
    <docs-item title="" :code="text_align_HTML">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply align by adding <code>.text-{align}</code> class to text elements</p>
      </div>

      <docs-simple-list :items="text_align" slot="body"></docs-simple-list>
    </docs-item>
    
    <docs-item title="Responsive">
      <div slot="body">
        <p>Apply responsive align with <code>.{breakpoint}:text-{align}</code> class to text elements</p>
        
        <table class="o-table o-table--fixed o-table--compact o-table--definition o-table--border-bottom">
          <thead>
            <th></th>
            <th>
              Class prefix example
            </th>
            <!-- <th>
              Num of columns
            </th>
            <th>
              Gutter width
            </th> -->
          </thead>
          <tbody>
            <tr>
                <td>
                  <span class="fs-epsilon color-secondary">Default</span><br>
                  > 0px
                </td>
                <td><code>text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra small</span><br>
                > 320px
              </td>
              <td><code>xxs:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra small</span><br>
                > 480px
              </td>
              <td><code>xs:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Small</span><br>
                > 640px
              </td>
              <td><code>sm:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Medium</span><br>
                > 768px
              </td>
              <td><code>md:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Large</span><br>
                > 991px
              </td>
              <td><code>lg:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra large</span><br>
                > 1200px
              </td>
              <td><code>xl:text-{align}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra large</span><br>
                > 1440px
              </td>
              <td><code>xxl:text-{align}</code></td>
            </tr>
          </tbody>
        </table>

        
      </div>
    </docs-item>

    <docs-item :code="text_align_responsive_HTML">
      <docs-simple-list :items="text_align_responsive" slot="body"></docs-simple-list>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsTextAlign',

  data () {
    return {
      text_align_HTML: `<p class="text-left">Text align left</p>
<p class="text-right">Text align right</p>
<p class="text-center">Text align center</p>`,
      text_align: [
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
      ],
      text_align_responsive_HTML: `<p class="md:text-left">Left aligned text on viewport size MD or wider</p>
<p class="sm:text-center">Center aligned text on viewport size SM or wider</p>
<p class="xs:text-right">Right aligned text on viewport size XS or wider</p>`,
      text_align_responsive: [
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

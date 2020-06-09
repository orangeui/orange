<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Display</h1>
      <o-label size="small" text="HTML"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>
          Display class define display class of elements.
        </p>
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="" :css_code="mapCss" :item="{}">
      <div slot="body" class="mb48">
        <p><o-label text="SCSS" size="small" /> recall display with <code>display({key})</code> function</p>
        <p><o-label text="HTML" size="small" /> apply display to elements with <code>.d-{key}</code> class</p>
      </div>
    </docs-item>

    <docs-item title="Block" :code="block_css">
      <div slot="body">
        <div class="d-block p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-block p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-block p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Inline Block" :code="inline_block_css">
      <div slot="body">
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Inline" :code="inline_css">
      <div slot="body">
        <div class="d-inline p-4 bg-primary text-center color-white">1</div>
        <div class="d-inline p-4 bg-primary text-center color-white">2</div>
        <div class="d-inline p-4 bg-primary text-center color-white">3</div>
      </div>
    </docs-item>

    <docs-item title="Flex" :code="flex_css">
      <div slot="body">
        <!-- <p>More detailed use of flex can be found <a href="#">here</a></p> -->

        <div class="d-flex p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-flex p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-flex p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Inline Flex" :code="inline_flex_css">
      <div slot="body">
        <!-- <p>More detailed use of flex can be found <a href="#">here</a></p> -->

        <div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Table" :code="table_css">
      <div slot="body">
        <p>Use the <code>.d-table</code>, <code>.d-table-row</code>, and <code>.d-table-cell</code> to create elements that behave like a <code>table</code>, <code>tr</code>, or <code>td</code> element.</p>
        
        <div class="d-table">
          <div class="d-table-row">
            <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">Table cell 1</div>
            <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3">2</div>
            <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">3</div>
          </div>
          <div class="d-table-row">
            <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3">5</div>
            <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">Table cell 4</div>
            <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3"> Table cell 6</div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="None / Hidden" :code="none_css">
      <div slot="body">
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-none p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Responsive">
      <div slot="body">
        <p>Apply responsive display to elements <code>.{breakpoint}:d-{key}</code> class</p>
        
        <table class="o-table o-table--fixed o-table--compact o-table--definition o-table--border-bottom">
          <thead>
            <th></th>
            <th>
              Class prefix
            </th>
          </thead>
          <tbody>
            <tr>
                <td>
                  <span class="fs-epsilon color-secondary">Default</span><br>
                  > 0px
                </td>
                <td><code>d-</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra small</span><br>
                > 320px
              </td>
              <td><code>xxs:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra small</span><br>
                > 480px
              </td>
              <td><code>xs:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Small</span><br>
                > 640px
              </td>
              <td><code>sm:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Medium</span><br>
                > 768px
              </td>
              <td><code>md:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Large</span><br>
                > 991px
              </td>
              <td><code>lg:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra large</span><br>
                > 1200px
              </td>
              <td><code>xl:d-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra large</span><br>
                > 1440px
              </td>
              <td><code>xxl:d-{key}</code></td>
            </tr>
          </tbody>
        </table>

      </div>
    </docs-item>

    <docs-item :code="responsive_css">
      <div slot="body">
        <div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

  </div>
</template>

<script>
  export default {
    name: 'DocsGrid',

    data () {
      return {
        mapCss: `$o-displays: (
  'block': block,
  'inline-block': inline-block,
  'inline': inline,
  'flex': flex,
  'inline-flex': inline-flex,
  'table': table,
  'table-cell': table-cell,
  'grid': grid,
  'none': none
) !default;`,
        
        block_css: `<div class="d-block p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-block p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-block p-4 bg-primary text-center color-white mb-3">3</div>`,

        inline_block_css: `<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">3</div>`,

        inline_css: `<div class="d-inline p-4 bg-primary text-center color-white">1</div>
<div class="d-inline p-4 bg-primary text-center color-white">2</div>
<div class="d-inline p-4 bg-primary text-center color-white">3</div>`,

        flex_css: `<div class="d-flex p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-flex p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-flex p-4 bg-primary text-center color-white mb-3">3</div>`,

        inline_flex_css: `<div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-inline-flex p-4 bg-primary text-center color-white mb-3">3</div>`,

        table_css: `<div class="d-table">
  <div class="d-table-row">
    <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">1</div>
    <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3">2</div>
    <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">3</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3">1</div>
    <div class="d-table-cell p-4 bg-primary text-center color-white mb-3">2</div>
    <div class="d-table-cell p-4 bg-primary-dark text-center color-white mb-3">3</div>
  </div>
</div>`,
        none_css: `<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-none p-4 bg-primary text-center color-white mb-3">3</div>`,
      
        responsive_css: `<div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-block md:d-inline-block lg:d-inline-flex p-4 bg-primary text-center color-white mb-3">3</div>`
      }
    }
  }
</script>

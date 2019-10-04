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
        <p><o-label text="HTML" size="small" /> apply display to elements with <code>.d-{key}</code> class, except <code>display: none;</code> class is <code>.d-hidden</code></p>
        <p><o-label text="Responsive" size="small" />  apply responsive display to elements <code>.{breakpoint}:-d-{key}</code> class</p>
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
        <p>More detailed use of flex can be found <a href="#">here</a></p>

        <div class="d-flex p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-flex p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-flex p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Inline Flex" :code="inline_flex_css">
      <div slot="body">
        <p>More detailed use of flex can be found <a href="#">here</a></p>

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

    <docs-item title="Hidden" :code="hidden_css">
      <div slot="body">
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-hidden p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

    <docs-item title="Responsive" :code="responsive_css">
      <div slot="body">
        <p>Apply responsive display to elements <code>.{breakpoint}:-d-{key}</code> class</p>

        <div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">1</div>
        <div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">2</div>
        <div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">3</div>
      </div>
    </docs-item>

  </div>
</template>

<script>
  export default {
    name: 'DocsGrid',

    data () {
      return {
        mapCss: `$displays: (
  'block': block,
  'inline-block': inline-block,
  'inline': inline,
  'flex': flex,
  'inline-flex': inline-flex,
  'table': table,
  'table-cell': table-cell,
  'grid': grid,
  'hidden': none
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
        hidden_css: `<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-inline-block p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-hidden p-4 bg-primary text-center color-white mb-3">3</div>`,
      
        responsive_css: `<div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">1</div>
<div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">2</div>
<div class="d-block md:d-inline-block lg:d-flex p-4 bg-primary text-center color-white mb-3">3</div>`
      }
    }
  }
</script>

<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Grid</h1>
      <o-label size="small" text="HTML"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        Description of Grid system
      </div>
    </docs-item>

    <docs-item title="Container" :css_code="container_widths">
      <div slot="body">
        <p>
          Container is an element that wraps content and has gutter on sides. Class <code>.container</code> limits the
          width, while <code>.container-fluid</code> is full width.
          <br>
          Gutter can be changed with variable <code>$container-gutter</code>. Default is <code>12px</code>
        </p>

        <p>Default container widths on all the breakpoints are shown below.</p>
      </div>
    </docs-item>

    <docs-item title="Equal column width" :code="equal_column_width">
      <div slot="body">
        <p>
          By default, <code>.grid</code> stacks the columns horizontally with css property <code>grid-auto-flow:
          column;</code>.
          <br>
          All the columns are equal width and you can put as many columns in a grid as you want.
        </p>

        <div class="grid">
          <div class="col" v-for="number in 6" :key="number">
            {{ number }}
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Different column width" :code="different_column_width">
      <div slot="body">
        <p>
          We achieve width of columns with choosing positions rather than setting exact width to columns.
          We still limit to 12 column grid system, so setting widths of the columns is only available till 12.
        </p>

        <div class="grid">
          <div class="col col--1/5">1</div>
          <div class="col">2</div>
          <div class="col">3</div>
          <div class="col col--row-2 1/3">4</div>
          <div class="col col--row-2 col--2/6">5</div>
          <div class="col col--row-2">6</div>
        </div>
      </div>
    </docs-item>
  </div>
</template>

<script>
  export default {
    name: 'DocsGrid',

    data () {
      return {
        // TODO: Change this value with actual container variable instead of breakpoint
        container_widths: `$breakpoints: (
  xxsmall: 320px,
  xsmall: 480px,
  small: 640px,
  medium: 768px,
  large: 992px,
  xlarge: 1200px,
  xxlarge: 1440px,
) !default;`,
        equal_column_width: `<div class="grid">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
  <div class="col">4</div>
  <div class="col">5</div>
  <div class="col">6</div>
</div>`,
        different_column_width: `<div class="grid">
  <div class="col col--1/5">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
  <div class="col col--row-2 1/3">4</div>
  <div class="col col--row-2 col--2/6">5</div>
  <div class="col col--row-2">6</div>
</div>`
      }
    }
  }
</script>

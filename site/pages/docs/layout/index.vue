<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Grid</h1>
      <o-label size="small" text="HTML"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>
          This grid is non-responsive until Orange <code>v1.4.0</code>.
        </p>
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

    <docs-item title="Auto Fill column" :code="equal_column_width">
      <div slot="body">
        <p>
          By default, <code>.grid</code> is using 12 column system with auto responsive columns.
          <br>
          All the columns are equal width and you can put as many columns in a grid as you want and columns will be moved to a new row when there is not enough space in a container.
        </p>

        <h3>Narrow</h3>
        <div class="grid grid--columns-auto-narrow">
          <div v-for="number in 6" :key="number">
            {{ number }}
          </div>
        </div>

        <h3>Regular (default)</h3>
        <div class="grid grid--columns-auto">
          <div v-for="number in 6" :key="number">
            {{ number }}
          </div>
        </div>

        <h3>Wide</h3>
        <div class="grid grid--columns-auto-wide">
          <div v-for="number in 6" :key="number">
            {{ number }}
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Different column width" :code="different_column_width">
      <div slot="body">
        <div class="grid">
          <div class="col-6">1</div>
          <div class="col-6">2</div>
          <div class="col-4">3</div>
          <div class="col-3">4</div>
          <div class="col-5">5</div>
          <div class="col-1">6</div>
          <div class="col-2">7</div>
          <div class="col-7">8</div>
          <div class="col-2">9</div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Columns with different positions" :code="position_column">
      <div slot="body">
        <p>
          By setting class like <code>.col-7/12</code>, column will span from column 1 to including 7, but you have to set in which row like <code>.row-2</code>.
          <br>
          You can also change positions of columns with this, check the example below.
        </p>

        <div class="grid">
          <div class="col-3">1</div>
          <div class="col-9">2</div>
          <div class="col-1">3</div>
          <div class="col-5">4</div>
          <div class="col-2/7 row-pos-2">5</div>
          <div class="col-5/10 row-pos-3">6</div>
          <div class="col-4">7</div>
          <div class="col-2">8</div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Spanning column over multiple rows" :code="span_column_over_rows">
      <div slot="body">
        <div class="grid">
          <div class="col-3">1</div>
          <div class="col-3">2</div>
          <div class="col-6">3</div>
          <div class="col-8 row-3">4</div>
          <div class="col-4">5</div>
          <div class="col-4">8</div>
          <div class="col-4">8</div>
          <div class="col-4">8</div>
          <div class="col-4">8</div>
          <div class="col-4">8</div>
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
        equal_column_width: `<div class="grid grid--columns-auto-narrow">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<div class="grid grid--columns-auto-wide">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`,
        different_column_width: `<div class="grid">
  <div class="col-6">2</div>
  <div class="col-6">2</div>
  <div class="col-4">1</div>
  <div class="col-3">1</div>
  <div class="col-5">2</div>
  <div class="col-1">2</div>
  <div class="col-2">2</div>
  <div class="col-7">2</div>
  <div class="col-2">2</div>
</div>`,
        position_column: `<div class="grid">
  <div class="col-3">1</div>
  <div class="col-9">2</div>
  <div class="col-5">3</div>
  <div class="col-1/7 row-pos-2">4</div>
  <div class="col-5/12 row-pos-3">5</div>
  <div class="col-4">6</div>
</div>`,
        span_column_over_rows: `<div class="grid">
  <div class="col-3">1</div>
  <div class="col-3">2</div>
  <div class="col-6">3</div>
  <div class="col-8 row-3">4</div>
  <div class="col-4">5</div>
  <div class="col-4">8</div>
  <div class="col-4">8</div>
  <div class="col-4">8</div>
  <div class="col-4">8</div>
  <div class="col-4">8</div>
</div>`
      }
    }
  }
</script>

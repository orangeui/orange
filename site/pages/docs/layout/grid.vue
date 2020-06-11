<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Grid</h1>
      <o-label size="small" text="HTML"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>
        </p>
      </div>
    </docs-item>

    <docs-item title="Number of columns in a row" :code="grid_number_of_columns">
      <div slot="body">
        <p>
          By default, <code>.grid</code> is using 12 column system with auto responsive columns.
          <br>
          All the columns are equal width and you can put as many columns in a grid as you want and columns will be
          moved to a new row when there is not enough space in a container.
        </p>

        <h3>Default</h3>
        <div class="grid">
          <div v-for="number in 12" :key="number">
            {{ number }}
          </div>
        </div>

        <h3>3 columns - responsive</h3>
        <div class="grid grid--2 sm:grid--3">
          <div v-for="number in 12" :key="number">
            {{ number }}
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Auto Fill column" :code="equal_column_width">
      <div slot="body">
        <p>
          By default, <code>.grid</code> is using 12 column system with auto responsive columns.
          <br>
          All the columns are equal width and you can put as many columns in a grid as you want and columns will be
          moved to a new row when there is not enough space in a container.
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

    <!-- Currently not supporting these because of too much bugs with other grid possibilities -->
    <!--<docs-item title="Columns with different positions" :code="position_column">
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
    </docs-item>-->

    <!-- Currently not supporting these because of too much bugs with other grid possibilities -->
    <!--<docs-item title="Spanning column over multiple rows" :code="span_column_over_rows">
      <div slot="body">
        <div class="grid">
          <div class="col-3">1</div>
          <div class="col-3">2</div>
          <div class="col-6">3</div>
          <div class="col-8 row-3">4</div>
          <div class="col-4">5</div>
          <div class="col-4">6</div>
          <div class="col-4">7</div>
          <div class="col-4">8</div>
          <div class="col-4">9</div>
          <div class="col-4">10</div>
        </div>
      </div>
    </docs-item>-->

    <docs-item title="Grid options">
      <div slot="body">

        <table class="o-table o-table--fixed o-table--compact o-table--definition o-table--border-bottom">
          <thead>
          <th></th>
          <th>
            Max container width
          </th>
          <th>
            Class prefix
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
            <td>
              100%
            </td>
            <td><code>col-</code> and <code>row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Extra extra small</span><br>
              > 320px
            </td>
            <td>
              100%
            </td>
            <td><code>xxs:col-</code> and <code>xxs:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Extra small</span><br>
              > 480px
            </td>
            <td>
              480px
            </td>
            <td><code>xs:col-</code> and <code>xs:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Small</span><br>
              > 640px
            </td>
            <td>580px</td>
            <td><code>sm:col-</code> and <code>sm:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Medium</span><br>
              > 768px
            </td>
            <td>720px</td>
            <td><code>md:col-</code> and <code>md:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Large</span><br>
              > 991px
            </td>
            <td>960px</td>
            <td><code>lg:col-</code> and <code>lg:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Extra large</span><br>
              > 1200px
            </td>
            <td>1140px</td>
            <td><code>xl:col-</code> and <code>xl:row-</code></td>
          </tr>
          <tr>
            <td>
              <span class="fs-epsilon color-secondary">Extra extra large</span><br>
              > 1440px
            </td>
            <td>1280px</td>
            <td><code>xxl:col-</code> and <code>xxl:row-</code></td>
          </tr>
          </tbody>
        </table>
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
  xxs: 320px,
  xs: 480px,
  sm: 640px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1440px,
) !default;`,
        grid_number_of_columns: `<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>

<div class="grid grid--2 sm:grid--3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>`,
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
  <div class="col-6">1</div>
  <div class="col-6">2</div>
  <div class="col-4">3</div>
  <div class="col-3">4</div>
  <div class="col-5">5</div>
  <div class="col-1">6</div>
  <div class="col-2">7</div>
  <div class="col-7">8</div>
  <div class="col-2">9</div>
</div>`,
        position_column: `<div class="grid">
  <div class="col-3">1</div>
  <div class="col-9">2</div>
  <div class="col-1">3</div>
  <div class="col-5">4</div>
  <div class="col-2/7 row-pos-2">5</div>
  <div class="col-5/10 row-pos-3">6</div>
  <div class="col-4">7</div>
  <div class="col-2">8</div>
</div>`,
        span_column_over_rows: `<div class="grid">
  <div class="col-3">1</div>
  <div class="col-3">2</div>
  <div class="col-6">3</div>
  <div class="col-8 row-3">4</div>
  <div class="col-4">5</div>
  <div class="col-4">6</div>
  <div class="col-4">7</div>
  <div class="col-4">8</div>
  <div class="col-4">9</div>
  <div class="col-4">10</div>
</div>`
      }
    }
  }
</script>

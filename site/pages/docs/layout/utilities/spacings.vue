<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Spacings</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Values that define empty space between elements.</p>
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="" :css_code="mapCss">
      <div slot="body" class="mb48">
        <p><o-label text="SCSS" size="small" /> recall spacings with <code>space({key})</code> function</p>
        <p><o-label text="HTML" size="small" /> apply margin to elements with <code>.m-{key}</code>, <code>.ml-{key}</code>, <code>.mr-{key}</code>, <code>.mt-{key}</code>, <code>.mb-{key}</code> classes</p>
        <p><o-label text="HTML" size="small" /> apply padding to elements with <code>.p-{key}</code>, <code>.pl-{key}</code>, <code>.pr-{key}</code>, <code>.pt-{key}</code>, <code>.pb-{key}</code> classes</p>
      </div>
    </docs-item>

    <docs-item title="" :code="space_html">
      <div slot="body" class="mb48">
        <div class="grid">
          <div class="col-4">
            <div class="text-center color-white bg-primary p-4">.p-4</div>
          </div>
          <div class="col-4">
            <div class="text-center color-white bg-primary p-5">.p-5</div>
          </div>
          <div class="col-4">
            <div class="text-center color-white bg-primary p-6">.p-6</div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Responsive">
      <div slot="body" class="mb48">
        <p>Apply responsive margin to elements <code>.{breakpoint}:m-{key}</code>, <code>.{breakpoint}:ml-{key}</code>, <code>.{breakpoint}:mr-{key}</code>, <code>.{breakpoint}:mt-{key}</code>, <code>.{breakpoint}:mb-{key}</code> classes</p>
        <p>Apply responsive padding to elements <code>.{breakpoint}:p-{key}</code>, <code>.{breakpoint}:pl-{key}</code>, <code>.{breakpoint}:pr-{key}</code>, <code>.{breakpoint}:pt-{key}</code>, <code>.{breakpoint}:pb-{key}</code> classes</p>
        

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
                <td><code>m-</code>, <code>p-</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra small</span><br>
                > 320px
              </td>
              <td><code>xxs:m-{key}</code>, <code>xxs:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra small</span><br>
                > 480px
              </td>
              <td><code>xs:m-{key}</code>, <code>xs:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Small</span><br>
                > 640px
              </td>
              <td><code>sm:m-{key}</code>, <code>sm:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Medium</span><br>
                > 768px
              </td>
              <td><code>md:m-{key}</code>, <code>md:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Large</span><br>
                > 991px
              </td>
              <td><code>lg:m-{key}</code>, <code>lg:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra large</span><br>
                > 1200px
              </td>
              <td><code>xl:m-{key}</code>, <code>xl:p-{key}</code></td>
            </tr>
            <tr>
              <td>
                <span class="fs-epsilon color-secondary">Extra extra large</span><br>
                > 1440px
              </td>
              <td><code>xxl:m-{key}</code>, <code>xxl:p-{key}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="" :code="space_responsive_html">
      <div class="grid" slot="body">
        <div class="col-12 md:col-4">
          <div class="text-center color-white bg-primary p-1 md:p-2">.p-1 <br> .md:p-2</div>
        </div>
        <div class="col-12 md:col-4">
          <div class="text-center color-white bg-primary p-1 md:p-3">.p-1 <br> .md:p-3</div>
        </div>
        <div class="col-12 md:col-4">
          <div class="text-center color-white bg-primary p-1 md:p-4">.p-1 <br> .md:p-4</div>
        </div>
      </div>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsSpacings',

  data () {
    return {
      mapCss: `
$o-space-base: 24px;

$o-spaces: (
  0: 0,                 // 0px
  1: $o-space-base / 6,   // 4px
  2: $o-space-base / 3,   // 8px
  3: $o-space-base / 2,   // 12px
  4: $o-space-base,       // 24px
  5: $o-space-base * 2,   // 48px
  6: $o-space-base * 3,   // 72px
  7: $o-space-base * 6    // 144px
);`,
      space_html: `<div class="grid">
  <div class="col-4">
    <div class="text-center color-white bg-primary p-4">.p-4</div>
  </div>
  <div class="col-4">
    <div class="text-center color-white bg-primary p-5">.p-5</div>
  </div>
  <div class="col-4">
    <div class="text-center color-white bg-primary p-6">.p-6</div>
  </div>
</div>`,
      space_responsive_html: `<div class="grid">
  <div class="col-12 md:col-4">
    <div class="text-center color-white bg-primary p-1 md:p-2">.p-1 <br> .md:p-2</div>
  </div>
  <div class="col-12 md:col-4">
    <div class="text-center color-white bg-primary p-1 md:p-3">.p-1 <br> .md:p-3</div>
  </div>
  <div class="col-12 md:col-4">
    <div class="text-center color-white bg-primary p-1 md:p-4">.p-1 <br> .md:p-4</div>
  </div>
</div>`,
    }
  }
}
</script>

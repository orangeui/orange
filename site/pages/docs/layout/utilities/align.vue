<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Align</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Values that position/align element.</p>
      </div>
    </docs-item>

    <docs-item title="">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply alignment to elements with <code>.block-{align}</code> or <code>.flex-{align}</code> class.</p>
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Block" :code="block_html">
      <div slot="body">
        <img class="o-image block-left" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

        <img class="o-image block-center" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

        <img class="o-image block-right" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
      </div>
    </docs-item>

    <docs-item title="Flex" :code="flex_html">
      <div slot="body">
        <img class="o-image flex-left" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

        <img class="o-image flex-center" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

        <img class="o-image flex-right" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
      </div>
    </docs-item>

    <docs-item title="Responsive" :code="responsive_html">
      <div slot="body">
        <p>Apply responsive align to elements <code>.{breakpoint}:block-{align}</code> or <code>.{breakpoint}:flex-{align}</code> classes</p>

        <img class="o-image block-left lg:block-center" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

        <img class="o-image flex-center lg:flex-right" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

        <img class="o-image flex-right lg:flex-left" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage">
      <table class="o-table o-table--compact o-table--celled" slot="body">
        <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
          <th>Possible values</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>role</td>
          <td>Set with <code>.{role}-left</code> class</td>
          <td><code>block</code> or <code>flex</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>align</td>
          <td>Set with <code>.block-{align}</code> class</td>
          <td><code>left</code>, <code>center</code> or <code>right</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsAlign',

  data () {
    return {
      mapCss: `$border-radius-base: 3px;

$border-radiuses: (
  0: 0,                         // 0px
  'base': $border-radius-base,  // 3px
  1: $border-radius-base * 2,   // 6px
  'full': 50%                   // 50%
);`,   
      block_html: `<img class="o-image block-left" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

<img class="o-image block-center" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

<img class="o-image block-right" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />`,
      flex_html: `<img class="o-image flex-left" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

<img class="o-image flex-center" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

<img class="o-image flex-right" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />`,
      responsive_html: `<img class="o-image block-left lg:block-center" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />

<img class="o-image flex-center lg:flex-right" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

<img class="o-image flex-right lg:flex-left" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />`
    }
  }
}
</script>

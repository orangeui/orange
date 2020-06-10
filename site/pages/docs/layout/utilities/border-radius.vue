<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Border Radius</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Values that define border radius of element.</p>
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="" :css_code="mapCss" :item="{}">
      <div slot="body" class="mb48">
        <p><o-label text="SCSS" size="small" /> recall border radius with <code>rounded({key})</code> function</p>
        <p><o-label text="HTML" size="small" /> apply border radius to elements with <code>.rounded-{key}</code> class.</p>
      </div>
    </docs-item>

    <docs-item title="Styles" :code="border_radius_html">
      <div slot="body">
        <img class="o-image rounded-0" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Doggo" />

        <img class="o-image rounded" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Doggo" />

        <img class="o-image rounded-1" src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgehog" />

        <img class="o-image rounded-full" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Katze" />
      </div>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsBorderRadius',

  data () {
    return {
      mapCss: `$o-border-radius-base: 3px;

$o-border-radiuses: (
  0: 0,                         // 0px
  'base': $o-border-radius-base,  // 3px
  1: $o-border-radius-base * 2,   // 6px
  'full': 50%                   // 50%
);`,
      border_radius_html: `<img class="o-image rounded-0" src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Doggo" />

<img class="o-image rounded" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Doggo" />

<img class="o-image rounded-1" src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgehog" />

<img class="o-image rounded-full" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Katze" />`
    }
  }
}
</script>

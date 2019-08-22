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
    <docs-item title="" :items="mapHtml" :css_code="mapCss">
      <div slot="body" class="mb48">
        <p><o-label text="SCSS" size="small" /> recall spacings with <code>$spacing-{value}</code></p>
        <p><o-label text="HTML" size="small" /> apply margin to elements with <code>.ml-{value}</code>, <code>.mr-{value}</code>, <code>.mt-{value}</code>, <code>.mb-{value}</code> classes</p>
        <p><o-label text="HTML" size="small" /> apply padding to elements with <code>.pl-{value}</code>, <code>.pr-{value}</code>, <code>.pt-{value}</code>, <code>.pb-{value}</code> classes</p>
      </div>

      <docs-simple-list :items="typeWeightsList" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsSpacings',

  data () {
    return {
      mapCss: `$spacing-small            12px
$spacing-base             24px
$spacing-medium           36px
$spacing-large            48px
$spacing-extra-large      72px`
    }
  }
}
</script>

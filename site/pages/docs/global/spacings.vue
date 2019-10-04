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
        <p><o-label text="SCSS" size="small" /> recall spacings with <code>margin: map-get($spaces, {key});</code>, <code>padding: map-get($spaces, {key});</code>, etc.</p>
        <p><o-label text="HTML" size="small" /> apply margin to elements with <code>.m-{key}</code>, <code>.ml-{key}</code>, <code>.mr-{key}</code>, <code>.mt-{key}</code>, <code>.mb-{key}</code> classes</p>
        <p><o-label text="HTML" size="small" /> apply padding to elements with <code>.p-{key}</code>, <code>.pl-{key}</code>, <code>.pr-{key}</code>, <code>.pt-{key}</code>, <code>.pb-{key}</code> classes</p>
        <p><o-label text="Responsive" size="small" />  apply responsive margin to elements <code>.{breakpoint}:m-{key}</code>, <code>.{breakpoint}:ml-{key}</code>, <code>.{breakpoint}:mr-{key}</code>, <code>.{breakpoint}:mt-{key}</code>, <code>.{breakpoint}:mb-{key}</code> classes</p>
        <p><o-label text="Responsive" size="small" />  apply responsive padding to elements <code>.{breakpoint}:p-{key}</code>, <code>.{breakpoint}:pl-{key}</code>, <code>.{breakpoint}:pr-{key}</code>, <code>.{breakpoint}:pt-{key}</code>, <code>.{breakpoint}:pb-{key}</code> classes</p>
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
$space-base: 24px;

$spaces: (
  0: 0,                 // 0px
  1: $space-base / 6,   // 4px
  2: $space-base / 3,   // 8px
  3: $space-base / 2,   // 12px
  4: $space-base,       // 24px
  5: $space-base * 2,   // 48px
  6: $space-base * 3,   // 72px
  7: $space-base * 6    // 144px
);`
    }
  }
}
</script>

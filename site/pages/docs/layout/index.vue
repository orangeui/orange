<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Breakpoints</h1>
      <o-label size="small" text="SCSS"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>
        </p>
      </div>
    </docs-item>

    <docs-item title="Variables" :css_code="breakpoints">
      <div slot="body">
        <p>
          Default breakpoint widths are shown below.
        </p>
      </div>
    </docs-item>
  </div>
</template>

<script>
  export default {
    name: 'DocsBreakpoints',

    data () {
      return {
        breakpoints: `$o-breakpoints: (
  xxs: 320px,
  xs: 480px,
  sm: 640px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1440px,
) !default;`,
      }
    }
  }
</script>

<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Container</h1>
      <o-label size="small" text="HTML"/>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>

        </p>
      </div>
    </docs-item>

    <docs-item title="Variables" :css_code="container_widths">
      <div slot="body">
        <p>
          Container is an element that wraps content and has gap on sides. Class <code>.container</code> limits the
          width, while <code>.container-fluid</code> is full width.
          <br>
          Side gap can be changed with variable <code>$o-container-gap</code>. Default is <code>12px</code>
        </p>

        <p>Default container widths on all the breakpoints are shown below.</p>
      </div>
    </docs-item>
  </div>
</template>

<script>
  export default {
    name: 'DocsContainer',

    data () {
      return {
        container_widths: `$o-container-gap: 12px !default;
$o-container-gap-mobile: $o-container-gap !default;
$o-container-max-width: 100% !default;

$o-container-max-widths: (
  xs: 480px,
  sm: 580px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1280px
) !default;`
      }
    }
  }
</script>

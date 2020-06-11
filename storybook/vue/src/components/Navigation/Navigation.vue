<template>
  <nav class="o-nav" :class="nav_classes">
    <ul>
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  props: {
    /**
     * Navigation color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Navigation align
     *
     * Possible values: <code>left, center, right</code>
     */
    align: {
      type: String,
      required: false,
      default: "left"
    }
  },

  computed: {
    nav_classes() {
      return {
        [`o-nav--color-${this.color}`]: this.color,
        [`o-nav--${this.align}`]: this.align
      };
    }
  }
};
</script>

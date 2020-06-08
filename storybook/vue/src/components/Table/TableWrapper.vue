<template>
  <div
    class="o-table-wrapper"
    :class="classes"
    :style="{ height: height + 'px' }"
  >
    <!-- @slot Default slot for table component -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "TableWrapper",

  props: {
    /**
     * Set height
     */
    height: {
      type: [String, Number],
      required: false,
      default: null
    },

    /**
     * Sticky header when scrolling
     *
     * Not supported in IE
     */
    fixed_header: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {
    classes() {
      return {
        [`o-table-wrapper--fixed-header`]: this.fixed_header
      };
    }
  }
};
</script>

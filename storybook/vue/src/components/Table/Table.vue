<template>
  <table class="o-table" :class="classes">
    <!-- @slot Default slot for table elements -->
    <slot />
  </table>
</template>

<script>
export default {
  name: "TableWrapper",

  props: {
    /**
     * Set border on bottom of table
     */
    border_bottom: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Distribute columns evenly
     */
    evenly_distributed: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Make table more compact
     */
    compact: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Add borders around cells and add background to header
     */
    celled: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Add more spacing to th tags
     */
    definition: {
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
        [`o-table--border-bottom`]: this.border_bottom,
        [`o-table--fixed`]: this.evenly_distributed,
        [`o-table--compact`]: this.compact,
        [`o-table--celled`]: this.celled,
        [`o-table--definition`]: this.definition
      };
    }
  }
};
</script>

<template>
  <ul class="list" :class="classes">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "List",

  props: {
    /**
     * List size
     *
     * Possible values: <code>small, medium, large</code>
     */
    size: {
      type: String,
      required: false,
      default: "large"
    },

    /**
     * Add divider between items
     */
    divide: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Add negative margins to side at the <code>$spacing-base</code> size. It's common use in cards.
     */
    no_gutter: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Add styling on list item hover
     */
    hover: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Add cursor pointer on list item hover
     */
    pointer: {
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
        [`list--${this.size}`]: this.size,
        "list--divide": this.divide,
        "list--no-gutter": this.no_gutter,
        "list--hover": this.hover,
        "list--pointer": this.pointer
      };
    }
  },

  methods: {}
};
</script>

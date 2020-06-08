<template>
  <img class="o-image" :class="classes" :src="path" :alt="alt_text" />
</template>

<script>
export default {
  name: "OImage",

  props: {
    /**
     * Path to image
     */
    path: {
      type: String,
      required: true,
      default: null
    },

    /**
     * Alt text
     */
    alt_text: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Size
     *
     * Possible values: <code>xsmall, small, medium, large</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Add border radius of <mark>$border-radius-main</mark> (3px) or 100%
     *
     * Possible values: <code>rounded, circle</code>
     */
    rounded: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Throw a shadow
     */
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Show hover effects
     */
    action: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        [`o-image--${this.rounded}`]: this.rounded,
        [`o-image--size-${this.size}`]: this.size,
        [`o-image--shadow`]: this.shadow,
        [`o-image--action`]: this.action
      };
    }
  }
};
</script>

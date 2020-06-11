<template>
  <div class="o-avatar" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Avatar",

  props: {
    /**
     * Size of avatar
     *
     * Possible values: <code>null - basic, small, large, auto - full width</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * How avatar is presented
     *
     * Possible values: <code>circle</code>
     */
    look: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Avatar color and border color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    classes() {
      return {
        [`o-avatar--color-${this.color}`]: this.color,
        [`o-avatar--size-${this.size}`]: this.size,
        [`o-avatar--${this.look}`]: this.look
      };
    }
  }
};
</script>

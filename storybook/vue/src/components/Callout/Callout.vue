<template>
  <div class="o-callout" :class="classes" @click="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Callout",

  props: {
    /**
     * Callout color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
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
        [`o-callout--color-${this.color}`]: this.color,
        [`o-callout--${this.size}`]: this.size,
        "o-callout--shadow": this.shadow,
        "o-callout--action": this.action
      };
    }
  },

  methods: {
    click(e) {
      /**
       * Passthrough <code>click</code> event
       * @type {Event}
       */
      this.$emit("click", e);
    }
  }
};
</script>

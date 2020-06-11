<template>
  <span :class="classes" />
</template>

<script>
export default {
  name: "Icon",

  props: {
    /**
     * Symbol name
     */
    symbol: {
      type: String,
      required: true
    },

    /**
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false
    }
  },

  computed: {
    classes() {
      return {
        [`o-icon-${this.symbol}`]: this.symbol,
        [`color-${this.color}`]: this.color
      };
    }
  }
};
</script>

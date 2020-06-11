<template>
  <div class="o-card" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    /**
     * Remove body gutter
     */
    full: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        "o-card--full": this.full
      };
    }
  }
};
</script>

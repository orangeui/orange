<template>
  <div class="o-card__footer" :class="classes" @[clickEnabled]="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardFooter",

  props: {
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
        "o-card__footer--click": this.action
      };
    },

    clickEnabled() {
      return this.action ? "click" : null;
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

<template>
  <span class="o-label" :class="classes" @[clickEnabled]="click">
    {{ text }}

    <i
      v-if="dismiss || icon"
      :class="`o-icon-${dismiss ? 'x' : icon}`"
      @[dismissClickEnabled]="dismissClick"
    ></i>
  </span>
</template>

<script>
export default {
  name: "Label",

  props: {
    /**
     * Text in label
     */
    text: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Icon on right side of text
     *
     * Possible values: See [Icons page](/?path=/docs/2-global-icon--symbols)
     */
    icon: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Label size
     *
     * Possible values: <code>small, pill, dot</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Label color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    },

    /**
     * It will force to use <code>X</code> icon and add ability to <code>click</code> event on icon.
     */
    dismiss: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        [`o-label--${this.color}`]: this.color,
        [`o-label--${this.size}`]: this.size,
        [`o-label--dismiss`]: this.dismiss
      };
    },

    clickEnabled() {
      return !this.dismiss ? "click" : null;
    },

    dismissClickEnabled() {
      return this.dismiss ? "click" : null;
    }
  },

  methods: {
    click(e) {
      /**
       * Passthrough <code>click</code> event
       * @type {Event}
       */
      this.$emit("click", e);
    },

    dismissClick(e) {
      /**
       * Passthrough <code>dismissClick</code> event that is wired on <code>icon</code>
       * @type {Event}
       */
      this.$emit("dismissClick", e);
    }
  }
};
</script>

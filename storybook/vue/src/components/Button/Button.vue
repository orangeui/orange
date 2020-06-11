<template>
  <button
    :type="type"
    class="o-button"
    :class="[button_classes, button_color]"
    @click="click"
    :disabled="is_disabled"
  >
    <template v-if="text">{{ text }}</template>
    <i v-if="icon" :class="[`o-icon-${icon}`]" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * HTML tag type
     *
     * Possible values: <code>button, submit, reset</code>
     */
    type: {
      type: String,
      required: false,
      default: "button"
    },

    /**
     * Text in button
     */
    text: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Button role
     *
     * Possible values: <code>primary, secondary, basic</code>
     */
    role: {
      type: String,
      required: false,
      default: "primary"
    },

    /**
     * Button icon on right side of text or without text / icon only
     *
     * Possible values: See [Icons page](/?path=/docs/2-global-icon--symbols)
     */
    icon: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Disable button
     */
    is_disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Button color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Button size
     *
     * Possible values: <code>small, large</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Make a button of any size horizontally fit inside it's parent element
     */
    wide: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Invert a button so it can be placed on a solid color background.
     */
    inverted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    button_classes() {
      return {
        [`o-button--${this.role}`]: this.role,
        [`o-button--${this.variant}`]: this.variant,
        [`o-button--${this.size}`]: this.size,
        [`o-button--icon-only`]: !this.text && this.icon,
        "o-button--inverted": this.inverted,
        "o-button--wide": this.wide
      };
    },
    button_color() {
      // Check if button is inside message component
      if (this.$parent.$options._componentTag === "o-message") {
        let message_color = this.$parent.$options.propsData.color;
        return message_color == null
          ? "o-button--color-gray"
          : `o-button--color-${message_color}`;
      } else {
        return {
          [`o-button--color-${this.color}`]: this.color
        };
      }
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

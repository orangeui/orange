<template>
  <button :type="type" class="o-button" :class="[button_classes, button_color]">
    <span v-if="back" class="o-button__arrow-tail" />
    <template v-if="text">{{ text }}</template>
    <i v-if="icon" :class="[ `o-icon-${icon}`]" />
  </button>
</template>`

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },

    role: {
      type: String,
      required: false,
      default: null
    },

    variant: {
      type: String,
      required: false,
      default: null
    },

    text: {
      type: String,
      required: false,
      default: null
    },

    icon: {
      type: String,
      required: false,
      default: null
    },

    color: {
      type: String,
      required: false,
      default: null
    },

    size: {
      type: String,
      required: false,
      default: null
    },

    wide: {
      type: Boolean,
      required: false,
      default: false
    },

    back: {
      type: Boolean,
      required: false,
      default: false
    },

    inverted: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {}
  },

  computed: {
    button_classes () {
      return {
        [`o-button--${this.role}`]: this.role,
        [`o-button--${this.variant}`]: this.variant,
        [`o-button--${this.size}`]: this.size,
        [`o-button--icon-only`]: !this.text && this.icon,
        [`o-button--back`]: this.back,
        'o-button--inverted': this.inverted,
        'o-button--wide': this.wide
      }
    },

    button_color () {
      // Check if button is inside message component
      if (this.$parent.$options._componentTag === 'o-message') {
        let message_color = this.$parent.$options.propsData.color
        return message_color !== undefined ? `o-button--color-${message_color}` : 'o-button--color-gray'
      } else {
        return {
          [`o-button--color-${this.color}`]: this.color,
        }
      }
    }
  }
}
</script>

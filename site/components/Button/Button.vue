<template>
  <button :type="type" class="button" :class="[button_classes, button_color]">
    <span v-if="back" class="button__arrow-tail" />
    <template v-if="text">{{ text }}</template>
    <i v-if="icon" :class="[ `icon-${icon}`]" />
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
        [`button--${this.role}`]: this.role,
        [`button--${this.variant}`]: this.variant,
        [`button--${this.size}`]: this.size,
        [`button--icon-only`]: !this.text && this.icon,
        [`button--back`]: this.back,
        'button--inverted': this.inverted,
        'button--wide': this.wide
      }
    },

    button_color () {
      // Check if button is inside message component
      if (this.$parent.$options._componentTag === 'o-message') {
        let message_color = this.$parent.$options.propsData.color
        return message_color !== undefined ? `button--color-${message_color}` : 'button--color-gray'
      } else {
        return {
          [`button--color-${this.color}`]: this.color,
        }
      }
    }
  }
}
</script>

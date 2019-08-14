<template>
  <div class="callout" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Callout',

  props: {
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

    shadow: {
      type: Boolean,
      required: false,
      default: false
    },

    image: {
      type: String,
      required: false,
      default: null
    },
    
    action: {
      type: Boolean,
      required: false,
      default: false
    },
  },

  computed: {
    classes () {
      return {
        [`callout--color-${this.color}`]: this.color,
        [`callout--${this.size}`]: this.size,
        'callout--shadow': this.shadow,
        'callout--action': this.action
      }
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

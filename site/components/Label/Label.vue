<template>
  <span class="o-label" :class="classes">
    {{ text }}

    <i v-if="dismiss || icon" :class="`o-icon-${dismiss ? 'x' : icon}`"></i>
  </span>
</template>

<script>
export default {
  name: 'Label',

  props: {
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
    size: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    dismiss: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        [`o-label--${this.color}`]: this.color,
        [`o-label--${this.size}`]: this.size,
        [`o-label--dismiss`]: this.dismiss
      }
    }
  }
}
</script>

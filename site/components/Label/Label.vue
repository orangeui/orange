<template>
  <span class="label" :class="classes">
    {{ text }}

    <i v-if="dismiss || icon" :class="`icon-${dismiss ? 'x' : icon}`"></i>
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
        [`label--${this.color}`]: this.color,
        [`label--${this.size}`]: this.size,
        [`label--dismiss`]: this.dismiss
      }
    }
  }
}
</script>

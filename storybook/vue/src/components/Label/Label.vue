<template>
  <span class="label" :class="classes" @[clickEnabled]="click">
    {{ text }}

    <i v-if="dismiss || icon" :class="`icon-${dismiss ? 'x' : icon}`"
    @[dismissClickEnabled]="dismissClick"></i>
  </span>
</template>

<script>
export default {
  name: 'Label',

  props: {
    /**
     * Text in button
     */
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
    },

    clickEnabled() {
      return !this.dismiss ? 'click' : null
    },

    dismissClickEnabled() {
      return this.dismiss ? 'click' : null
    }
  },

  methods: {
    click(e) {
      /**
       * Passthrough dismissClick event
       * @type {Event}
       */
      this.$emit('click', e)
    },

    dismissClick(e) {
      /**
       * Passthrough dismissClick event
       * @type {Event}
       */
      this.$emit('dismissClick', e)
    }
  }
}
</script>
<template>
  <span :class="classes" />

</template>

<script>
export default {
  name: 'Icon',

  props: {
    symbol: {
      type: String,
      required: true
    },

    color: {
      type: String,
      required: false
    }
  },
  computed: {
    classes () {
      return {
      	[`icon-${this.symbol}`]: this.symbol,
        [`color-${this.color}`]: this.color,
      }
	  }
  }
}
</script>

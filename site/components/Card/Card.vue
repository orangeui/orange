<template>
  <div class="card" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    full: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'card--full': this.full
      }
    }
  }
}
</script>

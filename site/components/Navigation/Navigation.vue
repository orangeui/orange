<template>
  <nav class="o-nav" :class="nav_classes">
    <ul>
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',

  props: {
    color: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    nav_classes () {
      return {
        [`o-nav--color-${this.color}`]: this.color
      }
    }
  }
}
</script>

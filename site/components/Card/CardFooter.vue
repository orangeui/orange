<template>
  <div class="card__footer" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardFooter',

  props: {
    click: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'card__footer--click': this.click
      }
    }
  }
}
</script>

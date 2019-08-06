<template>
  <div class="empty-state" :class="classes">
    <div class="empty-state__content">
      <div class="empty-state__title">
        <slot name="heading"></slot>
      </div>

      <div class="empty-state__description">
        <slot></slot>
      </div>

      <div class="empty-state__buttons">
        <slot name="buttons"></slot>
      </div>
    </div>

    <div class="empty-state__image">
      <img :src="`${image_path}`">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',

  props: {
    image_path: {
      type: String,
      required: true,
      default: null
    },
    no_gutter: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'empty-state--no-gutter': this.no_gutter
      }
    }
  }
}
</script>

<template>
  <nav class="breadcrumbs" :class="nav_classes">
    <router-link v-if="back_route" :to="{ name: back_route }" class="breadcrumbs__button">
      <span class="breadcrumbs__button-arrow-tail"></span>
      Back
    </router-link>

    <ul class="breadcrumbs__menu">
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  props: {
    // Support for Object route will be added in the future if we'll need to pass params in
    back_route: {
      type: [ String, Object ],
      required: false,
      default: null
    },

    type: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: null
    },

    color: {
      type: String,
      default: null
    }
  },

  computed: {
    nav_classes () {
      return {
        [`breadcrumbs--${this.size}`]: this.size,
        [`breadcrumbs--color-${this.color}`]: this.color
      }
    },

    tag_type () {
      return this.type ? 'div' : 'a'
    }
  }
}
</script>

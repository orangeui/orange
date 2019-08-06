<template>
  <li>
    <router-link :to="to" :class="{ 'is-disabled': disabled }" :tag="tag" :exact="exact">
      <o-icon v-if="icon" :symbol="`${icon}`" />

      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavigationItem',

  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'a'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<template>
  <li>
    <component :is="tag" :to="to" :href="href" :exact="exact" :class="{ 'is-active': active }">
      <span class="breadcrumbs__link-arrow-tail"></span>
      <o-icon :symbol="icon" v-if="icon"></o-icon>

      <slot />

      <span class="breadcrumbs__link-arrow-head"></span>
    </component>
  </li>
</template>

<script>
export default {
  name: 'BreadcrumbsItem',

  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    exact: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    tag: {
      type: String,
      required: false,
      default: 'router-link'
    }
  }
}
</script>

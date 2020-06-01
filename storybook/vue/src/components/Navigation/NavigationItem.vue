<template>
  <li>
    <router-link
      :to="to"
      :class="{ 'is-disabled': disabled }"
      :tag="tag"
      :exact="exact"
    >
      <o-icon v-if="icon" :symbol="`${icon}`" />

      <slot />
    </router-link>
  </li>
</template>

<script>
import OIcon from "../Icon/Icon";

export default {
  name: "NavigationItem",

  components: {
    OIcon
  },

  props: {
    /**
     * Navigation link as <code>router-link</code>
     */
    to: {
      type: [String, Object],
      default: ""
    },

    /**
     * In which HTML tag will <code>router-link</code> compile to
     */
    tag: {
      type: String,
      default: "a"
    },

    /**
     * Disabled item
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Force the link into "exact match mode"
     *
     * Read [Vue Docs](https://router.vuejs.org/api/#exact) for more info
     */
    exact: {
      type: Boolean,
      default: false
    },

    /**
     * Navigation icon
     *
     * Possible values: See [Icons page](/?path=/docs/2-global-icon--symbols)
     */
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

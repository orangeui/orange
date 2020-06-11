<template>
  <li>
    <component
      :is="tag"
      :to="to"
      :href="href"
      :exact="exact"
      :class="{ 'is-active': active }"
    >
      <o-icon :symbol="icon" v-if="icon"></o-icon>

      <slot />
    </component>
  </li>
</template>

<script>
import OIcon from "../Icon/Icon";

export default {
  name: "BreadcrumbsItem",

  components: {
    OIcon
  },

  props: {
    /**
     * In which HTML tag will <code>router-link</code> compile to
     */
    tag: {
      type: String,
      required: false,
      default: "router-link"
    },

    /**
     * Breadcrumb link as <code>router-link</code>
     */
    to: {
      type: [String, Object],
      default: ""
    },

    /**
     * Use this if you want to link out of app
     */
    href: {
      type: String,
      required: false,
      default: null
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
     * Breadcrumb icon
     *
     * Possible values: See [Icons page](/?path=/docs/2-global-icon--symbols)
     */
    icon: {
      type: String,
      default: null
    },

    /**
     * Force breadcrumb to be active
     */
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

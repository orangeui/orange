<template>
  <nav class="o-breadcrumbs" :class="nav_classes">
    <router-link
      v-if="back_route"
      :to="{ name: back_route }"
      class="o-breadcrumbs__button"
    >
      {{ back_route_text }}
    </router-link>

    <ul>
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumbs",

  props: {
    /**
     * Add back button - pass in <code>name</code> to route
     */
    // Support for Object route will be added in the future if we'll need to pass params in
    back_route: {
      type: [String, Object],
      required: false,
      default: null
    },

    /**
     * Back button text
     */
    back_route_text: {
      type: String,
      required: false,
      default: "Back"
    },

    /**
     * Size
     *
     * Possible values: <code>full</code>
     */
    size: {
      type: String,
      default: null
    },

    /**
     * Breadcrumbs color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      default: null
    }
  },

  computed: {
    nav_classes() {
      return {
        [`o-breadcrumbs--${this.size}`]: this.size,
        [`o-breadcrumbs--color-${this.color}`]: this.color
      };
    }
  }
};
</script>

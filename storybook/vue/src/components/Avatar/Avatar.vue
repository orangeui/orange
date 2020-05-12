<template>
  <div class="avatar" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Avatar',

  props: {
    // Not relevant for Global use(shortcut for Fomo robot, granny, sonny) - Talk to lucian
    // name: {
    //   type: String,
    //   required: false,
    //   default: 'user'
    // },

    /**
     * Size of avatar
     *
     * Possible values: <code>null - basic, small, large, auto - full width</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * How avatar is presented
     *
     * Possible values: <code>circle</code>
     */
    look: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Avatar color and border color
     *
     * Possible values: See [Colors page](link-to-page)
     */
    color: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    classes () {
      return {
        [`avatar--color-${this.color}`]: this.color,
        [`avatar--size-${this.size}`]: this.size,
        [`avatar--${this.look}`]: this.look
      }
    }
  }
}
</script>

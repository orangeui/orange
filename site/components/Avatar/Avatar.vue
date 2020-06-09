<template>
  <div class="o-avatar" :class="classes">
    <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg" v-if="name === 'user'">
      <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Avatar',

  props: {
    name: {
      type: String,
      required: false,
      default: 'user'
    },

    look: {
      type: String,
      required: false,
      default: null
    },

    size: {
      type: String,
      required: false,
      default: null
    },

    color: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    classes () {
      return {
        [`o-avatar--color-${this.color}`]: this.color,
        [`o-avatar--size-${this.size}`]: this.size,
        [`o-avatar--${this.look}`]: this.look
      }
    }
  }
}
</script>

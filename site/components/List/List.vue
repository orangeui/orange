<template>
  <div class="list" :class="classes">
    <!-- List header -->
    <div v-if="header" class="list__header">
      {{ header }}
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'List',

  props: {
    /* small, medium, large - default */
    size: {
      type: String,
      required: false,
      default: 'large'
    },
    divide: {
      type: Boolean,
      required: false,
      default: false
    },
    no_gutter: {
      type: Boolean,
      required: false,
      default: false
    },
    hover: {
      type: Boolean,
      required: false,
      default: false
    },
    pointer: {
      type: Boolean,
      required: false,
      default: false
    },
    header: {
      type: String,
      required: false,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {
    classes () {
      return {
        [`list--${this.size}`]: this.size,
        'list--divide': this.divide,
        'list--no-gutter': this.no_gutter,
        'list--hover': this.hover,
        'list--pointer': this.pointer
      }
    }
  },

  methods: {

  }
}
</script>

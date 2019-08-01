<template>
  <div class="message" :class="classes">
    <slot name="avatar"></slot>

    <div class="message__body">
      <h6 v-if="heading">{{ heading }}</h6>

      <!-- Main Body slot for paragraphs -->
      <slot></slot>
    </div>

    <div class="message__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    color: {
      type: String,
      required: false,
      default: null
    },

    size: {
      type: String,
      required: false,
      default: null
    },

    shadow: {
      type: Boolean,
      required: false,
      default: false
    },

    heading: {
      type: String,
      required: false,
      default: null
    },

    avatar: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    classes () {
      return {
        [`message--color-${this.color}`]: this.color,
        [`message--${this.size}`]: this.size,
        'message--shadow': this.shadow
      }
    }
  }
}
</script>

<template>
  <div class="o-message" :class="classes">
    <!-- @slot Avatar slot -->
    <slot name="avatar"></slot>

    <div class="o-message__body">
      <h6 v-if="heading">{{ heading }}</h6>

      <!-- @slot Main Body slot for paragraphs -->
      <slot></slot>
    </div>

    <div class="o-message__action">
      <!-- @slot Action slot for button -->
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",

  props: {
    /**
     * Message Heading before <code>default slot</code>
     */
    heading: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Message color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Message size but for now only supports <code>full</code>.
     * That is meant to be used outside containers in order to take full browser width.
     *
     * Possible values: <code>full</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        [`o-message--color-${this.color}`]: this.color,
        [`o-message--${this.size}`]: this.size
      };
    }
  }
};
</script>

<template>
  <div class="form__item">
    <div class="radio-group">
      <div class="radio-group__label">{{ label }}</div>

      <!-- @slot Default slot to pass in <o-radio> components -->
      <slot />
    </div>

    <div v-if="description" class="form__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",

  props: {
    /**
     * Group label above radio buttons
     */
    label: {
      type: String,
      required: true,
      default: null
    },

    /**
     * Description text below whole group
     */
    description: {
      type: String,
      required: false,
      default: null
    }
  },

  data() {
    return {};
  }
};
</script>

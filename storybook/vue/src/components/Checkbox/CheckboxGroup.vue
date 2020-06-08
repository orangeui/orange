<template>
  <div class="o-form__item">
    <div class="o-checkbox-group">
      <div class="o-checkbox-group__label">{{ label }}</div>

      <!-- @slot Default slot to pass in <o-checkbox> components -->
      <slot />
    </div>

    <div v-if="description" class="o-form__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",

  props: {
    /**
     * Group label above checkboxes
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

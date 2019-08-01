<template>
  <div class="form__item">
    <div class="checkbox-group">
      <div class="checkbox-group__label">{{ label }}</div>

      <slot />
    </div>

    <div v-if="description" class="form__description">{{ description}}</div>
  </div>

</template>

<script>
  export default {
    name: 'checkboxGroup',

    props: {
      label: {
        type: String,
        required: false,
        default: null
      },
      description: {
        type: String,
        required: false,
        default: null
      }
    },

    data () {
      return {}
    },
  }
</script>

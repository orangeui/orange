<template>
  <div class="form__item">
    <div class="radio-group">
      <div class="radio-group__label">{{ label }}</div>

      <slot />
    </div>

    <div v-if="description" class="form__description">{{ description}}</div>
  </div>

</template>

<script>
  export default {
    name: 'radioGroup',

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

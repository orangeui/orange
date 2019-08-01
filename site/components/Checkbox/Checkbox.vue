<template>
  <div class="checkbox" :class="checkboxClasses">
    <input type="checkbox" :disabled="disabled" v-model="checkboxValue" @change="onChange" :id="id">
    <label @click="onToggle">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',

  data () {
    return {
    }
  },

  computed: {
    checkboxClasses () {
      return {
        'is-disabled': this.disabled,
        'is-checked': this.value
      }
    },
    checkboxValue: {
      get () {
        return this.value
      },
      set (newValue) {
        return newValue
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: false,
      default: null
    }
  },

  methods: {
    onChange (event) {
      this.$emit('input', event.target.checked)
    },

    onToggle () {
      if (!this.disabled) {
        this.$emit('input', !this.checkboxValue)
      }
    }
  }
}
</script>

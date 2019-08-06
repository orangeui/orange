<template>
  <div class="radio" :class="radioClasses">
    <input type="radio" :name="name" :disabled="disabled" v-model="radioValue" :value="id" @change="onChange" :id="id">
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'formRadio',

  data () {
    return {
    }
  },

  computed: {
    radioClasses () {
      return {
        'is-disabled': this.disabled,
        'is-checked': this.value === this.id
      }
    },
    radioValue: {
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
      type: [ Number, String, Boolean ],
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
      type: [ Number, String, Boolean ],
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },

  methods: {
    onChange (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

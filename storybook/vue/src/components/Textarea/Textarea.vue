<template>
  <div class="form__item">
    <textarea class="form__textarea" :class="{ 'has-value': input_value }" :name="id" :id="id" :disabled="disabled" :value="input_value"
              v-on="input_listeners" :readonly="read_only" ref="input_textarea" :rows="rows"
              v-auto-expand="autoexpand"></textarea>
    <label class="form__label" :for="id">{{ label }}</label>

    <div class="form__description" v-if="description">{{ description}}</div>
  </div>
</template>

<script>
export default {
  name: 'formTextarea',

  data () {
    return {}
  },

  computed: {
    input_value: {
      get () {
        return this.value
      },
      set (newValue) {
        return newValue
      }
    },

    name_default () {
      return this.name ? this.name : this.id
    },

    input_listeners () {
      const _this = this

      return Object.assign({},
        this.$listeners,
        {
          input: (event) => {
            _this.$emit('input', event.target.value)
          }
        }
      )
    }
  },

  props: {
    value: {
      required: true
    },
    id: {
      type: String,
      required: false,
      default: null
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
    description: {
      type: String,
      required: false,
      default: null
    },
    read_only: {
      type: Boolean,
      required: false,
      default: false
    },
    rows: {
      type: Number,
      required: false,
      default: 3
    },
    autoexpand: {
      type: Boolean,
      required: false,
      default: true
    },
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  },
}
</script>

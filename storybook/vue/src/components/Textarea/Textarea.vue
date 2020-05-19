<template>
  <div class="form__item" :class="{ 'has-error': errors.has(name_default) || show_custom_error_message }">
    <textarea class="form__textarea" :class="{ 'is-full': input_value }" :name="id" :id="id" :disabled="disabled" :value="input_value"
              v-on="input_listeners" :readonly="read_only" ref="input_textarea" v-validate="validate"
              :data-vv-validate-on="validate_on"
              :data-vv-as="validate_name_default" :rows="rows"
              v-auto-expand></textarea>
    <label class="form__label" :for="id">{{ label }}</label>

    <template v-if="errors.has(name_default) || show_custom_error_message">
      <div class="form__message" v-html="errors.first(name_default)" v-if="!error_message"></div>
      <div class="form__message" v-html="error_message" v-else></div>
    </template>
    <div class="form__description" v-if="description">{{ description}}</div>
  </div>
</template>

<script>
export default {
  name: 'formTextarea',

  data () {
    return {}
  },

  inject: [ '$validator' ],

  computed: {
    input_value: {
      get () {
        return this.value
      },
      set (newValue) {
        return newValue
      }
    },

    validate_name_default () {
      return this.validate_name ? this.validate_name : this.label
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
    validate: {
      type: [String, Object],
      default: null
    },
    validate_initial: {
      type: Boolean,
      default: false
    },
    validate_on: {
      type: String,
      default: 'input'
    },
    validate_name: {
      type: String,
      required: false,
      default: null
    },
    rows: {
      type: Number,
      required: false,
      default: 3
    },
    error_message: {
      type: String,
      required: false,
      default: null
    },
    show_custom_error_message: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  },

  mounted () {
    // Run validation if validate_initial is true
    if (this.validate_initial === true) {
      this.$validator.validate()
    }
  }
}
</script>

<template>
  <div class="form__item"
      :class="{
        'has-error': errors.has(name_default),
        'has-extras has-action': hasActionSlot,
        'dropdown-with-input': dropdown_options
    }">
    <!--<o-dropdown v-if="dropdown_options" :id="dropdown_options.id" :value="dropdown_value" :items="dropdown_options.items" :label="dropdown_options.label" :placeholder="dropdown_options.label" @input="updateDropdownValue" />-->

    <input class="form__input" :id="id" ref="input" v-validate="validate" :type="type"
           :class="{ 'is-full': input_value || input_value === 0, 'has-placeholder': placeholder }"
           :name="name_default" :placeholder="placeholder"  :data-vv-delay="validate_delay"
           :disabled="disabled" :value="input_value" :readonly="read_only" :data-vv-validate-on="validate_on"
           :data-vv-as="validate_name_default" :min="min" :max="max"
           autocomplete="off" v-on="input_listeners">
    <label class="form__label" :for="id">{{ label }}</label>

    <div v-if="hasActionSlot" class="form__action">
      <slot name="action"></slot>
    </div>

    <p v-if="errors.has(name_default)" class="form__message">{{ errors.first(name_default) }}</p>
    <p v-if="description" class="form__description">{{ description}}</p>
  </div>
</template>

<script>

export default {
  name: 'formInput',

  props: {
    value: {
      type: [ String, Number ],
      required: false, // Value is not required since we allow empty inputs as well
      default: null
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    id: {
      type: String,
      required: true,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: [String, Number],
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
      type: [ String, Object ],
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
    is_loading: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: [String, Number],
      required: false,
      default: null
    },
    max: {
      type: [String, Number],
      required: false,
      default: null
    },
    validate_delay: {
      type: [String, Number],
      required: false,
      default: null
    },
    dropdown_options: {
      type: Object,
      required: false,
      default: null
    },
    dropdown_value: {
      type: [ String, Object ],
      required: false,
      default: null
    }
  },

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
            const value = event.target.value.length === 0 ? null : event.target.value
            _this.$emit('input', value)
          }
        }
      )
    },

    hasActionSlot () {
      return this.$slots.action
    }
  },

  mounted () {
    // Make sure only numbers are possible inside input
    if (this.type === 'number') {
      this.$refs.input.addEventListener('keypress', function (evt) {
        // Allow to type in numbers and enter press
        if ((evt.which < 48 || evt.which > 57) && evt.which !== 13) {
          evt.preventDefault()
        }
      })
    }

    // Run validation if validate_initial is true
    if (this.validate_initial === true) {
      this.$validator.validate()
    }
  },

  methods: {
    updateDropdownValue (value) {
      this.$emit('update:dropdown_value', value)
    }
  }
}
</script>

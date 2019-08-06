<template>
  <div class="form__item"  :class="{ 'has-error': errors.has(name_default) }">
    <div class="form__wrapper" :class="[{ 'is-loading is-loading--medium': is_loading } ]">

      <div class="form__input-wrapper">
        <input class="form__input" :class="{ 'is-full': value || value === 0 }"
               :type="type" :name="name"
               :placeholder="label" @input="input()" @blur="onBlur"
               :id="id" :disabled="disabled"
               :readonly="read_only" ref="inputFormatRef" v-validate="validate" :data-vv-validate-on="validate_on"
               :data-vv-as="validate_name_default"
               autocomplete="off">
        <label class="form__label" :for="id">{{ label }}</label>
      </div>

      <div class="form__extras">
        <slot name="extras"></slot>
      </div>
    </div>

    <div class="form__description" v-if="description">{{ description}}</div>
    <div class="form__message" v-if="errors.has(name_default)">{{ errors.first(name_default) }}</div>
  </div>
</template>

<script>
import Cleave from 'cleave.js'

export default {
  name: 'InputFormat',

  props: {
    value: {
      default: null,
      required: true
    },
    // https://github.com/nosir/cleave.js/blob/master/doc/options.md
    format: {
      type: String,
      required: true,
      default: 'credit_card'
    },
    // Set this prop to false to emit masked value
    raw: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'tel'
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
      type: String,
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
    }
  },

  inject: [ '$validator' ],

  computed: {
    validate_name_default () {
      return this.validate_name ? this.validate_name : this.label
    },

    name_default () {
      return this.name ? this.name : this.id
    }
  },

  data () {
    return {
      // cleave.js instance
      cleave: null,
      // callback backup
      onValueChangedFn: null,
      is_loading: false,
      options: {
        credit_card: {
          creditCard: true,
          delimiter: ' '
        },
        date: {
          date: true,
          datePattern: ['MM', 'YY'],
          delimiter: '/'
        }
      }
    }
  },

  mounted () {
    /* istanbul ignore if */
    if (this.cleave) return
    this.cleave = new Cleave(this.$refs.inputFormatRef, this.getOptions(this.options[this.format]))
    this.cleave.setRawValue(this.value)

    if (this.validate_initial === true) {
      this.$validator.validate()
    }
  },
  methods: {
    /**
       * Inject our method in config options
       *
       * @param options Object
       */
    getOptions (options) {
      // Preserve original callback
      this.onValueChangedFn = options.onValueChanged
      return Object.assign({}, options, {
        onValueChanged: this.onValueChanged
      })
    },
    /**
       * Watch for value changed by cleave and notify parent component
       *
       * @param event
       */
    onValueChanged (event) {
      let value = this.raw ? event.target.rawValue : event.target.value
      this.$emit('input', value)
      // Call original callback method
      if (typeof this.onValueChangedFn === 'function') {
        this.onValueChangedFn.call(this, event)
      }
    },

    onBlur (event) {
      this.$emit('blur', this.$refs.inputFormatRef.value)
    },

    input () {
      this.$emit('input', this.$refs.inputFormatRef.value)
    }
  },
  watch: {
    /**
       * Watch for changes from parent component and notify cleave instance
       *
       * @param newValue
       */
    value (newValue) {
      /* istanbul ignore if */
      if (!this.cleave) return
      // when v-model is not masked (raw)
      if (this.raw && newValue === this.cleave.getRawValue()) return
      //  when v-model is masked (NOT raw)
      if (!this.raw && newValue === this.$refs.inputFormatRef.value) return
      // Lastly set newValue

      this.$emit('input', this.$refs.inputFormatRef.value)
      this.cleave.setRawValue(this.$refs.inputFormatRef.value)
    }
  },
  /**
     * Free up memory
     */
  beforeDestroy () {
    /* istanbul ignore if */
    if (!this.cleave) return
    this.cleave.destroy()
    this.cleave = null
    this.onValueChangedFn = null
  }
}
</script>

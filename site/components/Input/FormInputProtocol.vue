<template>
  <form-input :id="id" v-model="input_value" name="url_without_protocol"
              :label="label" placeholder="myhonestcompany.com" :description="description"
              validate="required|url" :validate_name="validate_name" validate_delay="700"
              :dropdown_options="dropdown_options" :dropdown_value.sync="dropdown_value" v-on="$listeners" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FormInputProtocol',

  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    id: {
      type: String,
      required: false,
      default: 'site_url'
    },
    label: {
      type: String,
      required: false,
      default: 'Site URL'
    },
    description: {
      type: String,
      required: false,
      default: 'Your homepage will do for now'
    },
    validate_name: {
      type: String,
      required: false,
      default: 'Site URL'
    }
  },

  data () {
    return {
      dropdown_options: {
        id: 'site_url_protocol',
        items: [
          'http://',
          'https://'
        ],
        label: '',
        placeholder: 'Protocol'
      },
      dropdown_value: 'http://',
      new_value: null,
      protocol_regex: new RegExp(/^http(s?):\/\//i)
    }
  },

  inject: [ '$validator' ],

  computed: {
    ...mapState({
      application: state => state.Application.application
    }),

    input_value: {
      get () {
        const value = this.new_value ? this.new_value.replace(this.protocol_regex, '') : this.new_value
        this.$emit('input', this.dropdown_value + value)
        return value
      },
      set (value) {
        this.new_value = value

        if (this.protocol_regex.test(this.new_value)) {
          this.dropdown_value = this.new_value.match(this.protocol_regex)[0]
        }
      }
    }
  },

  watch: {
    application: {
      handler () {
        this.new_value = this.value

        if (this.new_value) {
          const protocol = this.new_value.match(this.protocol_regex)[0]

          if (this.dropdown_value !== protocol) {
            this.dropdown_value = protocol
          }
        }
      },
      immediate: true
    }
  }
}
</script>

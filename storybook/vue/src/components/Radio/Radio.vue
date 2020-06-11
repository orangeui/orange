<template>
  <div class="o-radio" :class="radioClasses">
    <input
      type="radio"
      :name="name"
      :disabled="disabled"
      v-model="radioValue"
      :value="id"
      @change="onChange"
      :id="id"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "FormRadio",

  data() {
    return {};
  },

  computed: {
    radioClasses() {
      return {
        "is-disabled": this.disabled,
        "is-checked": this.value === this.id
      };
    },
    radioValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        return newValue;
      }
    }
  },

  props: {
    /**
     * Set value with <code>v-model</code> prop
     */
    value: {
      type: [Number, String, Boolean],
      required: true
    },

    /**
     * Set id to input
     */
    id: {
      type: [Number, String, Boolean],
      required: true,
      default: null
    },

    /**
     * Label text
     */
    label: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Disabled radio
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Set name to the set of radios
     */
    name: {
      type: String,
      required: false,
      default: null
    }
  },

  methods: {
    onChange(event) {
      /**
       * Passthrough <code>input</code> event with input/radio value same as id
       * @type {Event}
       */
      this.$emit("input", event.target.value);
    }
  }
};
</script>

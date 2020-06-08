<template>
  <div class="o-checkbox" :class="checkboxClasses">
    <input
      type="checkbox"
      :disabled="disabled"
      v-model="checkboxValue"
      @change="onChange"
      :id="id"
    />
    <label @click="onToggle">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",

  data() {
    return {};
  },

  computed: {
    checkboxClasses() {
      return {
        "is-disabled": this.disabled,
        "is-checked": this.value
      };
    },
    checkboxValue: {
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
      type: Boolean,
      required: true
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
     * Disabled checkbox
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Set id to input
     */
    id: {
      type: String,
      required: false,
      default: null
    }
  },

  methods: {
    onChange(event) {
      /**
       * Passthrough <code>input</code> event with input/checkbox value
       * @type {Event}
       */
      this.$emit("input", event.target.checked);
    },

    onToggle() {
      if (!this.disabled) {
        this.$emit("input", !this.checkboxValue);
      }
    }
  }
};
</script>

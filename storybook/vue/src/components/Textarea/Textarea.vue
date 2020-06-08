<template>
  <div class="o-form__item">
    <textarea
      class="o-form__textarea"
      :class="{ 'has-value': input_value }"
      :name="id"
      :id="id"
      :disabled="disabled"
      :value="input_value"
      v-on="input_listeners"
      :readonly="read_only"
      ref="input_textarea"
      :rows="rows"
      v-auto-expand="autoexpand"
    ></textarea>
    <label class="o-form__label" :for="id">{{ label }}</label>

    <div class="o-form__description" v-if="description">{{ description }}</div>
  </div>
</template>

<script>
import AutoExpand from "../../directives/AutoExpand";

export default {
  name: "formTextarea",

  data() {
    return {};
  },

  directives: {
    AutoExpand
  },

  computed: {
    input_value: {
      get() {
        return this.value;
      },
      set(newValue) {
        return newValue;
      }
    },

    name_default() {
      return this.name ? this.name : this.id;
    },

    input_listeners() {
      const _this = this;

      return Object.assign({}, this.$listeners, {
        input: event => {
          _this.$emit("input", event.target.value);
        }
      });
    }
  },

  props: {
    /**
     * Set value with <code>v-model</code> prop
     */
    value: {
      required: true
    },

    /**
     * Set id to textarea and label
     */
    id: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Label text that also serves as placeholder
     */
    label: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Disable textarea
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Description text below input
     */
    description: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Read-only textarea
     */
    read_only: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Set rows that also serves as height
     */
    rows: {
      type: Number,
      required: false,
      default: 3
    },

    /**
     * Autoexpand that makes textarea autoresize
     */
    autoexpand: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    updateValue(value) {
      /**
       * Passthrough <code>input</code> event
       * @type {Event}
       */
      this.$emit("input", value);
    }
  }
};
</script>

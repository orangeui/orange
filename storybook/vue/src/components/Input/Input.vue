<template>
  <div
    class="o-form__item"
    :class="{
      'has-extras has-action': hasActionSlot
    }"
  >
    <div
      v-if="hasActionSlot && action_position === 'left'"
      class="o-form__action"
    >
      <!-- @slot Action slot to pass in <o-button> component or text -->
      <slot name="action"></slot>
    </div>

    <div class="o-form__input-wrapper">
      <input
        class="o-form__input"
        :id="id"
        ref="input"
        :type="type"
        :class="{ 'has-value': input_value || input_value === 0 }"
        :name="name_default"
        :disabled="disabled"
        :value="input_value"
        :readonly="read_only"
        :min="min"
        :max="max"
        autocomplete="off"
        v-on="input_listeners"
      />
      <label class="o-form__label" :for="id">{{ label }}</label>
    </div>

    <div
      v-if="hasActionSlot && action_position === 'right'"
      class="o-form__action"
    >
      <slot name="action"></slot>
    </div>

    <p v-if="description" class="o-form__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "formInput",

  props: {
    /**
     * Set value with <code>v-model</code> prop
     */
    value: {
      type: [String, Number],
      required: false, // Value is not required since we allow empty inputs as well
      default: null
    },

    /**
     * Set input type
     */
    type: {
      type: String,
      required: false,
      default: "text"
    },

    /**
     * Set id to input and label
     */
    id: {
      type: String,
      required: true,
      default: null
    },

    /**
     * Set custom name for input
     */
    name: {
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
     * Disable input
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
     * Read-only input
     */
    read_only: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Set minimum value allowed
     */
    min: {
      type: [String, Number],
      required: false,
      default: null
    },

    /**
     * Set maximum value allowed
     */
    max: {
      type: [String, Number],
      required: false,
      default: null
    },

    /**
     * Action position
     *
     * Possible values: <code>left, right</code>
     */
    action_position: {
      type: String,
      required: false,
      default: "left"
    }
  },

  data() {
    return {};
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
          const value =
            event.target.value.length === 0 ? null : event.target.value;
          _this.$emit("input", value);
        }
      });
    },

    hasActionSlot() {
      return this.$slots.action;
    }
  },

  mounted() {
    // Make sure only numbers are possible inside input
    if (this.type === "number") {
      this.$refs.input.addEventListener("keypress", function(evt) {
        // Allow to type in numbers and enter press
        if ((evt.which < 48 || evt.which > 57) && evt.which !== 13) {
          evt.preventDefault();
        }
      });
    }
  }
};
</script>

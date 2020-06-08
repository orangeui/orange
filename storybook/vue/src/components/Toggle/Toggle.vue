<template>
  <div class="o-form__item">
    <div class="o-toggle" :class="toggleClasses">
      <div class="o-toggle__button">
        <input
          class="o-toggle__input"
          type="checkbox"
          :disabled="disabled"
          v-model="toggleValue"
          @change="onChange"
          :id="id"
        />
        <label class="o-toggle__label" @click="onToggle">
          <span v-if="size !== 'large'">{{ label }}</span>
        </label>
      </div>

      <!-- Extra elements for large  -->
      <div v-if="size === 'large'">
        <label class="o-toggle__text" @click="onToggle">{{ label }}</label>
        <div class="o-toggle__value" v-if="toggleValue">{{ valueText }}</div>
        <div class="o-toggle__value o-toggle__value--disabled" v-else>
          {{ valueTextDisabled }}
        </div>
      </div>
    </div>
    <div class="o-form__description" v-if="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "toggle",

  data() {
    return {};
  },

  computed: {
    toggleClasses() {
      return {
        "o-toggle--label": this.label,
        [`o-toggle--color-${this.color}`]: this.color,
        [`o-toggle--${this.size}`]: this.size,
        "is-disabled": this.disabled,
        "is-checked": this.value
      };
    },
    toggleValue: {
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
     * Disable toggle
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
    },

    /**
     * Toggle color
     *
     * Possible values: See [Colors page](/?path=/docs/2-global-colors--list)
     */
    color: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Description text below toggle
     */
    description: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Toggle size
     *
     * Possible values: <code>large</code>
     */
    size: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Custom checked text for <code>large</code> size
     */
    valueText: {
      type: String,
      required: false,
      default: "Enabled"
    },

    /**
     * Custom unchecked text for <code>large</code> size
     */
    valueTextDisabled: {
      type: String,
      required: false,
      default: "Disabled"
    }
  },

  methods: {
    onChange(event) {
      /**
       * Passthrough <code>input</code> event
       * @type {Event}
       */
      this.$emit("input", event.target.checked);
    },

    onToggle() {
      if (!this.disabled) {
        this.$emit("input", !this.toggleValue);
      }
    }
  }
};
</script>

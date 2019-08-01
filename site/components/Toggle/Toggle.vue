<template>
  <div class="form__item">
    <div class="toggle" :class="toggleClasses">
      <div class="toggle__button">
        <input class="toggle__input" type="checkbox" :disabled="disabled" v-model="toggleValue" @change="onChange" :id="id">
        <label class="toggle__label" @click="onToggle">
          <span v-if="size !== 'large'">{{ label }}</span>
        </label>
      </div>

      <!-- Extra elements for large  -->
      <div v-if="size === 'large'">
        <label class="toggle__text" @click="onToggle">{{ label }}</label>
        <div class="toggle__value" v-if="toggleValue">{{ valueText }}</div>
        <div class="toggle__value toggle__value--disabled" v-else>{{ valueTextDisabled }}</div>
      </div>

    </div>
    <div class="form__description" v-if="description">{{ description }}</div>
  </div>

</template>

<script>
export default {
  name: 'toggle',

  data () {
    return {
    }
  },

  computed: {
    toggleClasses () {
      return {
        'toggle--label': this.label,
        [`toggle--color-${this.color}`]: this.color,
        [`toggle--${this.size}`]: this.size,
        'is-disabled': this.disabled,
        'is-checked': this.value
      }
    },
    toggleValue: {
      get () {
        return this.value
      },
      set (newValue) {
        return newValue
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      required: true
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
    id: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: String,
      required: false,
      default: null
    },
    valueText: {
      type: String,
      required: false,
      default: 'Enabled'
    },
    valueTextDisabled: {
      type: String,
      required: false,
      default: 'Disabled'
    }
  },

  methods: {
    onChange (event) {
      this.$emit('input', event.target.checked)
    },

    onToggle () {
      if (!this.disabled) {
        this.$emit('input', !this.toggleValue)
      }
    }
  }
}
</script>

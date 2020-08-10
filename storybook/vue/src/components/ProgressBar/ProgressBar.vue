<!--
  TAKEN FROM ELEMENT UI with Custom modifications
  https://github.com/ElemeFE/element/blob/dev/packages/progress/src/progress.vue - 27.6.2018
-->

<template>
  <div
    class="o-progress-bar"
    :class="[
      'o-progress-bar--' + type,
      {
        'o-progress-bar--without-text': !show_text,
        'o-progress-bar--text-inside': text_inside,
        'is-disabled': disabled
      }
    ]"
    :style="{color: color_convert}"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="o-progress-bar__line" v-if="type === 'line'">
      <div class="o-progress-bar__line-outer" :style="{height: stroke_width + 'px'}">
        <div class="o-progress-bar__line-inner" :style="bar_style">
          <div class="o-progress-bar__line-innerText" :class="{ 'o-progress-bar__line-innerText--below': percentage < 50 }" v-if="show_text && text_inside">
            {{percentage}}%
            <span class="o-progress-bar__custom-text" v-if="custom_text !== null">{{ custom_text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="o-progress-bar__circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path class="o-progress-bar__circle-track" :d="track_path" stroke="#F3F3F3" :stroke-width="relative_stroke_width" fill="none"></path>
        <path class="o-progress-bar__circle-path" :d="track_path" stroke-linecap="square" :stroke="stroke" :stroke-width="relative_stroke_width" fill="none" :style="circle_path_style"></path>
      </svg>
    </div>

    <div
      class="o-progress-bar__text"
      v-if="show_text && !text_inside && !custom_text_array"
      :style="{fontSize: progress_text_size + 'px'}"
    >
      <template>
        <span class="o-progress-bar__text-number">{{ percentage }}</span>
        <span class="o-progress-bar__text-percentage">%</span>
        <span class="o-progress-bar__custom-text" v-if="custom_text !== null">{{ custom_text }}</span>
      </template>
    </div>

    <div v-if="show_text && custom_text_array" class="o-progress-bar__text mt-3">
      <div class="flex flex--justify-space-between">
        <span v-for="item in custom_text_array" :key="item" class="color-gray-light fs-zeta">
          {{ item | formatNumber }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    /**
     * Progress Bar Type
     *
     * Possible values: Line and Circle
     */
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'circle'].indexOf(val) > -1
    },

    /**
     * Progress Bar Percentage / Value
     */
    percentage: {
      type: [String, Number],
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },

    /**
     * Stroke width
     */
    stroke_width: {
      type: Number,
      default: 8
    },

    /**
     * Progress Bar color
     *
     * Possible values: HEX code or predefined values (green, red, sapphire)
     */
    color: {
      type: String,
      default: 'sapphire'
    },

    /**
     * Display text inside Progress Bar
     */
    text_inside: {
      type: Boolean,
      default: false
    },

    /**
     * Progress Bar width (only for type of Circle)
     */
    width: {
      type: Number,
      default: 170
    },

    /**
     * Display percentage and custom text
     */
    show_text: {
      type: Boolean,
      default: false
    },

    /**
     * Custom text next to percentage
     */
    custom_text: {
      type: String,
      default: null
    },

    /**
     * Display custom text from array merged to one string
     */
    custom_text_array: {
      type: Array,
      default: null
    },

    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },

  filters: {
    formatNumber: function (value) {
      if (value || value === 0) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  },

  computed: {
    bar_style () {
      const style = {}
      style.width = this.percentage + '%'
      style.backgroundColor = this.color_convert
      return style
    },
    relative_stroke_width () {
      return (this.stroke_width / this.width * 100).toFixed(1)
    },
    track_path () {
      const radius = parseInt(50 - parseFloat(this.relative_stroke_width) / 2, 10)

      return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
    },
    perimeter () {
      const radius = 50 - parseFloat(this.relative_stroke_width) / 2
      return 2 * Math.PI * radius
    },
    circle_path_style () {
      const perimeter = this.perimeter
      return {
        strokeDasharray: `${perimeter}px,${perimeter}px`,
        strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    },
    stroke () {
      let ret
      if (this.color_convert) {
        ret = this.color_convert
      }
      return ret
    },
    progress_text_size () {
      return this.type === 'line'
        ? 12 + this.stroke_width * 0.4
        : this.width * 0.111111 + 2 
    },
    color_convert () {
      let color
      switch (this.color) {
        case 'green':
          color = '#14B72F'
          break
        case 'red':
          color = '#FF727B'
          break
        case 'sapphire':
          color = '#474BA5'
          break
        default:
          this.color ? color = this.color : color = '#A8A8A8'
      }

      return color
    }
  }
}
</script>

<template>
  <div class="docs__item">
    <h2 v-if="title">{{ title }}</h2>
    <slot name="body" />

    <code-block v-if="code" :code="code" />

    <code-block v-if="css_code" :code="css_code" code_markup="SCSS" />
  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'DocsItem',

  mixins: [ clickaway ],

  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    css_code: {
      type: String,
      required: false,
      default: null
    },
    code: {
      type: String,
      required: false,
      default: null
    },
    code_markup: {
      type: String,
      required: false,
      default: 'HTML'
    }
  },

  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="code-block">
    <o-label :text="code_markup" size="small" />

    <pre v-highlightjs>
      <code :class="code_language">{{ code }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',

  props: {
    code: {
      type: String,
      required: true,
      default: null
    },
    code_markup: {
      type: String,
      required: false,
      default: 'HTML'
    }
  },

  computed: {
    code_language () {
      return this.code_markup.toLowerCase()
    }
  }
}
</script>

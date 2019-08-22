<template>
</template>

<script>
  export default {
    name: 'custom',

    beforeCreate () {
      this.$router.push({ name: 'docs-components-custom-avatar' })
    }
  }
</script>

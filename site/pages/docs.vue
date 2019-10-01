<template>
  <div>
    <div class="docs__view">
      <docs-sidebar></docs-sidebar>

      <div class="docs__content-wrap container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import DocsSidebar from '@/components/DocsComponents/docs-sidebar'

export default {
  name: 'Docs',

  components: {
    DocsSidebar
  },

  data () {
    return {
    }
  }
}
</script>

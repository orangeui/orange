<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Grid</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <div class="grid">
          <div class="grid-col">
            <div class="bg-gray">1</div>
          </div>
          <div class="grid-col">
            <div class="bg-gray">2</div>
          </div>
        </div>
      </div>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsGrid',

  data () {
    return {

    }
  }
}
</script>

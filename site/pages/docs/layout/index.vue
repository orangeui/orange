<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Grid</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        Description of Grid system
      </div>
    </docs-item>

    <docs-item title="Container">

    </docs-item>

    <docs-item title="Simple row of 6 columns">
      <div slot="body">
        <div class="grid">
          <div class="col" v-for="number in 6" :key="number">
            <div class="col__content bg-primary">{{ number }}</div>
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

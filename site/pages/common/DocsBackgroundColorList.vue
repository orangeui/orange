<template>
  <ul class="docs__bg-color-list" slot="body">
    <li v-for="item in items" :key="item.title">
      <div class="docs__bg-color-item" :class="item.class"></div>
      <p>
        {{ item.title }} <br>
        {{ item.variable }} <br>
        {{ item.hex }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>

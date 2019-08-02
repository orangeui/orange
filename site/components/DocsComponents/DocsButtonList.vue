<template>
  <ul class="docs__simple-list" slot="body">
    <li v-for="item in items">
      <button :class="item.class">{{ item.title }}  <i :class="item.html"></i></button>
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

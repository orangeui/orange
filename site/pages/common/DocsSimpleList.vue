<template>
  <ul class="docs__simple-list" slot="body">
    <li v-for="item in items">
      <h5>{{ item.title }} <span v-html="item.html"></span></h5>
      <p :class="item.class">{{ item.content }} <span v-html="item.html"></span></p>
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

<template>
  <div :class="{ 'o-list__action': action }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ListSlot",

  props: {
    /**
     * Move slot to the right side
     */
    action: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

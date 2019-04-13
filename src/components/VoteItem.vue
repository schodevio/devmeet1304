<template>
  <span class="vote-item">{{ item.text }}</span>
</template>

<script>
export default {
  name: "VoteItem",
  props: {
    item: {
      type: Object,
      default: () => ({ id: null, text: '' })
    }
  }
}
</script>

<style lang="scss" scoped>
.vote-item {
  display: inline-block;
  padding: 1rem;
  color: red;
}
</style>


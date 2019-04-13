<template>
  <div class="vote-options">
    <slot name="header">
      <h3>Vote Options Header</h3>
    </slot>

    <ul class="vote-options__list">
      <slot
        v-for="item in items"
        name="item"
        :vote-item="item"
      >
        <li class="vote-options__list-item" :key="item.id">
          {{ item.text }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VoteOptions',
  props: [ 'items' ]
}
</script>

<style lang="scss">
.vote-options {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>


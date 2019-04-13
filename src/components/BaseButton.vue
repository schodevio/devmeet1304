<template>
  <button :disabled="value" @click="$emit('input', true)" v-on="$listeners">
    <template v-if="value">Loading ...</template>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>


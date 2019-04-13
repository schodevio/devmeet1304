<template>
  <div class="form-group">
    <label :for="$attrs.name">{{ label }}</label>
    <input 
      type="text"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

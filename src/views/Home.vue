<template>
  <div class="home">
    <h1>Hello {{ name }}</h1>
    <BaseInput
      v-model="name"
      name="first_name"
      label="First name"
    />

    <BaseButton
      v-model="loading"
      @click="resetAfterTwoSec"
    >
      Click
    </BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      name: ''
    }
  },
  methods: {
    resetAfterTwoSec() {
      setTimeout(() => this.loading = false ,3000)
    }
  }
}
</script>

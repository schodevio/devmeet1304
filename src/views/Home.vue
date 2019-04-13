<template>
  <div class="home">
    <h1>Home</h1>
    <BaseButton v-model="loading" @click="resetAfterTwoSec">Click</BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    resetAfterTwoSec() {
      setTimeout(() => this.loading = false ,3000)
    }
  }
}
</script>

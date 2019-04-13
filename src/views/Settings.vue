<template>
  <div class="settings">
    <h1>Settings for user #{{ userId }}</h1>
    <input type="number" v-model="id" />
    <button @click="changeId">Click</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      id: 0
    }
  },
  computed: {
    ...mapGetters({
      userId: 'UsersStore/userId'
    })
  },
  methods: {
    changeId() {
      this.$store.commit('UsersStore/setId', this.id)
    }
  }
}
</script>

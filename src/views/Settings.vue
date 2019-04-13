<template>
  <div class="settings">
    <h1>Settings for user #{{ userId }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  computed: {
    ...mapGetters({
      userId: 'UsersStore/userId'
    })
  }
}
</script>

<template>
  <div class="vote">
    <h1>Vote</h1>
    <vote-options :items="voteItems">
      <template #item="{ voteItem }">
        <vote-item :item="voteItem" />
      </template>
    </vote-options>
  </div>
</template>

<script>

import VoteOptions from '../components/VoteOptions'
import VoteItem from '../components/VoteItem'

export default {
  name: 'Vote',
  components: { VoteOptions, VoteItem },
  data() {
    return {
      voteItems: [
        {
          id: 1,
          text: 'Option 1'
        },
        {
          id: 2,
          text: 'Option 2'
        }
      ]
    }
  }
}
</script>

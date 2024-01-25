<!-- 
  PlayingCard Component
  - Just a simple and reusuable way to render the playing cards and use unicode to display the suits
  - Used for the deck and player hand rendering

  Props:
  - rank - card display value
  - suit - card suit
 -->
<template>
  <div class="tt-card">
    {{ rank }}
    <span
      v-if="suit === 'hearts'"
    >
      &#x2661;
    </span>
    <span
      v-else-if="suit === 'diamonds'"
    >
      &#9826;
    </span>
    <span
      class="tt-card--filled"
      v-else-if="suit === 'clubs'"
    >
      &clubs;
    </span>
    <span
      class="tt-card--filled"
      v-else-if="suit === 'spades'"
    >
      &spades;
    </span>
  </div>
</template>

<script>
  export default {
    name: 'PlayingCard',
    props: {
      rank: String,
      suit: String,
    },
  }
</script>

<style lang="scss" scoped>
.tt-card {
  border: 1px solid black;
  height: 48px;
  line-height: 48px;
  width: 48px;

  &--filled {
    font-size: 24px;
  }
}
</style>
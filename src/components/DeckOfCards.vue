<template>
  <div class="tt-deck-of-cards">
    <PlayingCard
      v-for="d of deck"
      :key="`create-${d.rank}-${d.suit}`"
      :rank="d.rank"
      :suit="d.suit"
    />
  </div>
</template>

<script>
  import PlayingCard from './PlayingCard.vue'

  export default {
    name: 'DeckOfCards',
    components: {
      PlayingCard,
    },
    props: {
      deck: Array,
    },
  }
</script>

<style lang="scss" scoped>
.tt-deck-of-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
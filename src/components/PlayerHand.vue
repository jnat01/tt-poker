<!-- 
  PlayerHand
 -->
<template>
  <div class="tt-player-hand">
    <div class="tt-player-hand--number">
      Player {{ player }}
    </div>
    <div class="tt-player-hand--cards">
      <PlayingCard
        v-for="(card, i) in hand"
        :key="`player-${player}-card-${i}`"
        :rank="card.rank"
        :suit="card.suit"
      />
    </div>
  </div>
</template>

<script>
  import PlayingCard from './PlayingCard.vue';

  export default {
    name: 'PlayerHand',
    components: {
      PlayingCard,
    },
    props: {
      player: Number,
      hand: {
        type: Array,
        required: true,
        validator(value) {
          return value.length == 5
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.tt-player-hand {
  border: 1px solid black;
  margin: 16px auto;
  padding: 8px;
  max-width: 320px;

  &--number {
    margin-bottom: 8px;
  }

  &--cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>

<!-- 
  PlayerHand Component
  - Used to render each players hand and their player number
  - leverages the PlayingCard component

  Props:
  - player - number to identify the player
  - hand - provided by iterating upon the dealtHands in PokerTable 
 -->
<template>
  <div
    class="tt-player-hand"
    :class="getWinnerClass"
  >
    <div class="tt-player-hand--info">
      <span v-if="isWinner">
        🎉 🎉
      </span>
      <span class="tt-player-hand--player-number">
        Player {{ player }}
      </span>
      <span v-if="isWinner">
        🐓 🍽️
      </span>
    </div>
    <div class="tt-player-hand--info">
      Score: {{ getScore }}
    </div>
    <div class="tt-player-hand--info">
      Hand: {{ getHandType }}
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
  import handTypes from '../constants/handTypes';

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
      score: Number,
      isWinner: Boolean,
    },
    computed: {
      getScore() {
        return this.score > 0 ? this.score : '?'
      },
      getWinnerClass() {
        return this.isWinner ? 'tt-player-hand--winner' : ''
      },
      getHandType() {
        return this.score > 0 ? handTypes[this.score] : '?'
      }
    }
  }
</script>

<style lang="scss" scoped>
.tt-player-hand {
  border: 3px solid lightgray;
  margin: 16px auto;
  padding: 8px;
  max-width: 320px;

  &--winner {
    border: 4px solid green
  }

  &--player-number {
    margin-left: 8px;
    margin-right: 8px;
  }

  &--info {
    margin-bottom: 8px;
  }

  &--cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
../constants/handTypes
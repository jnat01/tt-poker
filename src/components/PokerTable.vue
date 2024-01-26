<!-- 
  PokerTable
  - Where all the action happens :)
  - Handles creating, shuffling, dealing, finding the winner, and reseting the table.
 -->
<template>
  <div class="tt-poker-table">
    <div class="tt-poker-table--container">
      <button
        v-if="!isCreated"
        class="tt-poker-table--primary-button"
        @click="create()"
        :disabled="isDealt"
      >
        Create
      </button>
      <button
        v-if="isCreated"
        class="tt-poker-table--secondary-button"
        @click="shuffle()"
        :disabled="isDealt"
      >
        Shuffle
      </button>
      <button @click="reset()">
        Reset
      </button>
    </div>

    <div class="tt-poker-table--container">
      <DeckOfCards :deck="deck" />
    </div>

    <div
      v-if="isShuffled"
      class="tt-poker-table--container"
    >
      <div class="tt-poker-table--player-count">
        <label for="playerCount">
          Player Count:
        </label>
        <input
          v-model="playerCount"
          name="playerCount"
          type="number"
          :disabled="isDealt"
        >
      </div>
      <button
        class="tt-poker-table--primary-button"
        @click="deal()"
        :disabled="isDealt"  
      >
        Deal Hands
      </button>
      <button
        class="tt-poker-table--primary-button"
        @click="findWinner()"
        :disabled="!isDealt"
      >
        Find Winner(s)
      </button>
    </div>

    <div class="tt-poker-table--container tt-poker-table--player-hands">
      <PlayerHand
        v-for="(hand, i) in dealtHands"
        :key="`player-${i}`"
        :player="i"
        :hand="hand"
        :score="handScores[i]"
      />
    </div>
  </div>
</template>

<script>
  import ranks from '../constants/ranks'
  import suits from '../constants/suits'
  import * as check from '../utils/check'
  import DeckOfCards from './DeckOfCards.vue'
  import PlayerHand from './PlayerHand.vue'

  export default {
    name: 'PokerTable',
    components: {
    DeckOfCards,
    PlayerHand,
},
    data() {
      return {
        deck: [],
        dealtHands: [],
        handScores: [],
        playerCount: 2,
        isCreated: false,
        isShuffled: false,
        isDealt: false,
      }
    },
    methods: {
      /**
       * Creates the deck
       */
      create() {
        this.deck = []

        ranks.forEach(rank => {
          suits.forEach(suit => {
            this.deck.push({ rank, suit })
          })
        });

        this.isCreated = true
        this.isShuffled = false
      },
      /**
       * Shuffles the deck
       */
      shuffle() {
        if (this.deck.length < 1) {
          alert('deck has not been created.')
          return;
        }

        for (let i = this.deck.length - 1; i > 0; i--) {
          const x = Math.floor(Math.random() * (i + 1));

          [this.deck[i], this.deck[x]] = [this.deck[x], this.deck[i]]
        }

        this.isShuffled = true
      },
      /**
       * Resets the entire poker table
       */
      reset() {
        this.deck = []
        this.dealtHands = []
        this.handScores = []
        this.playerCount = 2
        this.isCreated = false
        this.isShuffled = false
        this.isDealt = false
      },
      /**
       * Deals 5 cards per player, 1 card at a time
       */
      deal() {
        if (this.playerCount < 2 || this.playerCount > 10) {
          alert('player count must be between 2 and 10.')
          return;
        }

        this.dealtHands = []

        for (let i = 0; i < this.playerCount; i++) {
          this.dealtHands.push(new Array())
        }

        for (let i = 0; i < 5; i++) {
          for (let x = 0; x < this.playerCount; x++) {
            this.dealtHands[x].push(this.deck.pop());
          }
        }

        this.isDealt = true
      },
      /**
       * Finds the winner
       *
       * Assigns a strength value to each players hand
       * Then determines the highest strength across the hands and identifies the winners
       */
      findWinner() {
        this.handScores = this.dealtHands.map(hand => this.checkHands(hand))
        // TODO - identify high score
        // TODO - identify winner(s)
      },
      /**
       * Leveraged in the findWinner method and uses the check.js util methods to evaluate the hands 
       */
      checkHands(hand) {
        if (check.isRoyalFlush(hand)) return 10;
        if (check.isStraightFlush(hand)) return 9;
        if (check.isFourOfAKind(hand)) return 8;
        if (check.isFullHouse(hand)) return 7;
        if (check.isFlush(hand)) return 6;
        if (check.isStraight(hand)) return 5;
        if (check.isThreeOfAKind(hand)) return 4;
        if (check.isTwoPair(hand)) return 3;
        if (check.isPair(hand)) return 2;
        return 1;
      }
    },
  }
</script>

<style lang="scss" scoped>
.tt-poker-table {
  &--container {
    margin: 16px;
  }

  &--primary-button {
    border: 1px solid gray;
    background-color: lightgreen;

    &:hover {
      background-color: yellowgreen;
    }

    &:disabled {
      background-color: #EFEFEF;
      border-color: lightgray;
      cursor: not-allowed;
    }
  }

  &--secondary-button {
    border: 1px solid gray;
    background-color: lightgoldenrodyellow;

    &:hover {
      background-color: goldenrod;
    }

    &:disabled {
      background-color: #EFEFEF;
      border-color: lightgray;
      cursor: not-allowed;
    }
  }

  &--playing-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &--player-count {
    display: block;
  }

  &--player-hands {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
  }
}
</style>
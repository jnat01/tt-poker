<template>
  <div class="tt-poker-table">
    <div class="tt-poker-table--container">

    </div>
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
    </div>

    <div class="tt-poker-table--container tt-poker-table--player-hands">
      <PlayerHands
        v-for="(hand, i) in dealtHands"
        :key="`player-${i}`"
        :player="i"
        :hand="hand"
      />
    </div>
  </div>
</template>

<script>
  import ranks from '../constants/ranks'
  import suits from '../constants/suits'
  import DeckOfCards from './DeckOfCards.vue'
  import PlayerHands from './PlayerHands.vue'

  export default {
    name: 'PokerTable',
    components: {
    DeckOfCards,
    PlayerHands,
},
    data() {
      return {
        deck: [],
        dealtHands: [],
        playerCount: 0,
        isCreated: false,
        isShuffled: false,
        isDealt: false,
      }
    },
    methods: {
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
      reset() {
        this.deck = []
        this.dealtHands = []
        this.playerCount = 0
        this.isCreated = false
        this.isShuffled = false
        this.isDealt = false
      },
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

        console.log(this.dealtHands)
        this.isDealt = true
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
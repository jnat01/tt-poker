<template>
  <div class="tt-app--header">
    TT Poker
  </div>
  <PokerTable />
  <a
    class="tt-app--do-not-click"
    target="_blank"
    href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU"
  >
    Do Not Click 😬
  </a>
</template>

<script>
import PokerTable from './components/PokerTable.vue';

export default {
  name: 'App',
  components: {
    PokerTable,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh
}

.tt-app {
  &--header {
    font-size: 48px;
    font-weight: 500;
    padding-top: 16px;
  }

  // the fun anchor tag
  &--do-not-click {
    background-color: lightcyan;
    border: 1px solid lightblue;
    color: black;
    font-size: 10px;
    padding: 4px 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
}

// app wide poker styling
button {
  font-size: 14px;
  line-height: 20px;
  margin: 16px;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
  }
}

input {
  height: 20px;
  width: 40px;
  padding: 8px 16px;
}
</style>

<template>
  <h1>TT Poker</h1>
  <PokerTable />
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
// #app boilerplate app styling
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

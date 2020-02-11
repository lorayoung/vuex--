<template>
  <div class="hello">
    <button @click="increase">增加</button>
    <button @click="increaseM">增加N</button>
    <button @click="increaseAsync">增加1异步</button>
    <button @click="increaseAsyncN">增加N异步</button>
    <button @click="decrease">减少</button>
    <button @click="decreaseAsync">减少1异步</button>
    <button @click="subAsyncN(4)">减少N异步</button>
    <button @click="decreaseN">减少N</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement', 'decrementN']), // 对应 decrease
    ...mapActions(['subAsync', 'subAsyncN']),
    increase () {
      this.$store.commit('increment')
    },
    decrease () {
      // this.$store.commit('decrement')
      this.decrement()
    },
    increaseM () {
      this.$store.commit('addN', 3)
    },
    decreaseN () {
      this.decrementN(4)
    },
    // 异步+1
    increaseAsync () {
      this.$store.dispatch('addAsync')
    },
    // 异步+n
    increaseAsyncN () {
      this.$store.dispatch('addAsyncN', 5)
    },
    // 异步-1
    decreaseAsync () {
      this.subAsync()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

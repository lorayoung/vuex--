<template>
  <div id="app">
    <h1>{{$store.getters.showNum}}</h1>
    <h2>{{showNum}}</h2>
    {{count}}
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    // 不会改变state中数据
    showNum (state) {
      return '最新' + state.count
    }
  },
  // 用于变更store中的数据
  mutations: { // 不能进行异步操作
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    addN (state, step) { // 传递参数
      state.count += step
    },
    decrementN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // actions中不能直接修改state中的数据
        // 通过context.commit来触发某mutation
        context.commit('increment')
      }, 1000)
    },
    addAsyncN (context, step) {
      setTimeout(() => {
        // actions中不能直接修改state中的数据
        // 通过context.commit来触发某mutation
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // actions中不能直接修改state中的数据
        // 通过context.commit来触发某mutation
        context.commit('decrement')
      }, 1000)
    },
    subAsyncN (context, step) {
      setTimeout(() => {
        // actions中不能直接修改state中的数据
        // 通过context.commit来触发某mutation
        context.commit('decrementN', step)
      }, 1000)
    }
  }
})
export default store

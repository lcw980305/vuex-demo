import Vue from 'vue'
import Vuex from 'vuex'
import classobj from './moudles/classobj'
import books from './moudles/books'
import user from './moudles/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '张三',
    age: 18
  },
  mutations: {
    setName (state) {
      state.name = '李四'
    }
  },
  getters: {
    addAge (state) {
      return state.age + 2
    }
  },
  actions: {
    aget (context, m) {
      var n = 1
      setInterval(() => {
        n += m
        console.log(n)
      }, 500)
    }
  },
  modules: {
    classobj,
    books,
    user
  }
})

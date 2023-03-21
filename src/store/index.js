import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    getListPosts: ['1'],
    title: 'iPhone Store'
  },
  getters: {
  },
  actions: {
    changeTitleGlobal (context) {
      context.commit('CHANGE_TITLE_GLOBAL', 'xxx')
    }
  },
  mutations: {
    CHANGE_TITLE_GLOBAL (state, val) {
      state.title = val
    }
  }
})

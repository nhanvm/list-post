import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import GetListBlogs from '../apis/GetListBlogs'
import SearchBlogs from '../apis/SearchBlogs'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    valSearch: '',
    getListBlogs: {},
    currentPage: 1,
    perPage: 10,
    totalItems: null,
    getSearchListBlogs: {}
  },
  getters: {
  },
  actions: {
    // GET LIST BLOGS
    async getListBlogs ({state, commit}, payload) {
      const response = await GetListBlogs.all({
        page: payload.page,
        limit: 20
      })
      if (response.status !== 200) {
      } else {
        await commit('getListBlogsSuccess', response.data)
      }
    },
    // GET LIST BLOGS
    async getSearchListBlogs ({state, commit}, payload) {
      const response = await SearchBlogs.search({
        search: payload.search
      })
      if (response.status !== 200) {
      } else {
        await commit('getSearchListBlogsSuccess', response.data)
      }
    }
  },
  mutations: {
    getListBlogsSuccess (state, val) {
      state.getListBlogs = val
    },
    getSearchListBlogsSuccess (state, val) {
      state.getSearchListBlogs = val
    },
    getValSearch (state, val) {
      state.valSearch = val
    }
  }
})

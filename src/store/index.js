import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import GetListBlogs from '../apis/GetListBlogs'
import SearchBlogs from '../apis/SearchBlogs'
import GetDetailBlog from '../apis/GetDetailBlog'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    valSearch: '',
    getListBlogs: {},
    currentPage: 1,
    perPage: 10,
    totalItems: null,
    getSearchListBlogs: {},
    dataDetailBlogsSuccess: {},
    refCount: 0,
    isLoading: false,
    message: {
      type: '',
      content: {
      }
    }
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
        state.currentPage = payload.page
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
        await commit('getValSearch', payload.search)
      }
    },
    // GET DETAIL BLOGS
    async getDetailBlog ({state, commit}, payload) {
      const response = await GetDetailBlog.show(payload)
      if (response.status !== 200) {
      } else {
        await commit('getDetailBlogsSuccess', response.data)
      }
    },
    async addAlert ({ state, commit }, payload) {
      state.message.type = 'error'
      state.message.content = payload
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
    },
    getDetailBlogsSuccess (state, val) {
      state.dataDetailBlogsSuccess = val
    },
    setLoadingSuccess (state, val) {
      if (val) {
        state.refCount++
        state.isLoading = true
      } else if (state.refCount > 0) {
        state.refCount--
        state.isLoading = (state.refCount > 0)
      }
    }
  }
})

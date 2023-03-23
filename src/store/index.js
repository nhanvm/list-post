import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import GetListBlogs from '../apis/GetListBlogs'
import SearchBlogs from '../apis/SearchBlogs'
import GetDetailBlog from '../apis/GetDetailBlog'
import AddBlog from '../apis/AddBlog'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    dataAddBlog: {},
    valSearch: '',
    typeOrder: 'desc',
    getListBlogs: {},
    currentPage: 1,
    perPage: 10,
    totalItems: null,
    getSearchListBlogs: {},
    dataDetailBlogsSuccess: {},
    dataGetOrderListBlogsSuccess: {},
    refCount: 0,
    isLoading: false,
    dataGetTotalBlogs: 0,
    message: {
      type: '',
      content: {
      }
    }
  },
  getters: {
  },
  actions: {
    // GET TOTAL BLOGS
    async getTotalBlogs ({state, commit}, payload) {
      const response = await GetListBlogs.all()
      if (response.status !== 200) {
      } else {
        await commit('getTotalBlogsSuccess', response.data.length)
      }
    },
    // GET LIST BLOGS
    async getListBlogs ({state, commit}, payload) {
      const response = await GetListBlogs.all({
        order: state.typeOrder,
        sortBy: 'createdAt',
        page: payload.page,
        limit: 20
      })
      if (response.status !== 200) {
      } else {
        state.currentPage = payload.page
        await commit('getListBlogsSuccess', response.data)
      }
    },
    // GET LIST SEARCH BLOGS
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
    // GET LIST ORDER BY CREATED AT BLOGS
    // async getOrderListBlogs ({state, commit}, payload) {
    //   const response = await GetListBlogs.all({
    //     order: payload.order,
    //     sortBy: payload.sortBy,
    //     page: payload.page,
    //     limit: 20
    //   })
    //   if (response.status !== 200) {
    //   } else {
    //     await commit('getListBlogsSuccess', response.data)
    //     await commit('getOrderListBlogsSuccess', response.data)
    //   }
    // },
    // GET DETAIL BLOGS
    async getDetailBlog ({state, commit}, payload) {
      const response = await GetDetailBlog.show(payload)
      if (response.status !== 200) {
        console.log(11111)
      } else {
        await commit('getDetailBlogsSuccess', response.data)
      }
    },
    // GET TOTAL BLOGS
    async addBlog ({state, commit}, payload) {
      const response = await AddBlog.add({
        title: payload.title,
        content: payload.content,
        createdAt: payload.createdAt
      })
      if (response.status !== 201) {
      } else {
        await commit('getAddBlogSuccess', response.data)
      }
    },
    async addAlert ({ state, commit }, payload) {
      state.message.type = 'error'
      state.message.content = payload
    }
  },
  mutations: {
    getTotalBlogsSuccess (state, val) {
      state.dataGetTotalBlogs = Math.ceil(val / 20)
    },
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
    getOrderListBlogsSuccess (state, val) {
      state.dataGetOrderListBlogsSuccess = val
    },
    typeOrderSuccess (state, val) {
      state.typeOrder = val
    },
    getAddBlogSuccess (state, val) {
      state.dataAddBlog = val
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

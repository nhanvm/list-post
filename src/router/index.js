import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage'
import PageSearch from '@/pages/PageSearch/PageSearch'
import DetailBlog from '@/pages/DetailBlog/DetailBlog'
import NotFound from '@/pages/NotFound/NotFound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search:key',
      name: 'PageSearch',
      component: PageSearch
    },
    {
      path: '/blog/:id',
      name: 'DetailBlog',
      component: DetailBlog
    },
    //  404
    {
      path: '*',
      name: 'NotFound',
      //  load dynamic
      component: NotFound
    }
  ]
})

export default router

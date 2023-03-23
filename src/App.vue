<template>
  <div id="app">
    <div
      v-if="isLoading"
      class="isLoading"
    >
      <img src="@/assets/images/isLoading.gif" alt="loading">
    </div>
    <div class="container pt-2">
      <CpnHeader />
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
    <template v-if="isOpenAddBlog">
      <AddBlog @hanldeCloseAddBlog="hanldeCloseAddBlog" />
    </template>
    <div class="add-blog">
      <!-- Button trigger modal -->
      <img src="@/assets/images/add-block.png" alt="add blog" @click="openAddBlog">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CpnHeader from './components/common/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import AddBlog from './components/AddBlog/AddBlog'
export default {
  name: 'App',
  components: {
    CpnHeader,
    HomePage,
    AddBlog
  },
  data () {
    return {
      isOpenAddBlog: false
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  methods: {
    openAddBlog () {
      this.isOpenAddBlog = true
    },
    hanldeCloseAddBlog () {
      this.isOpenAddBlog = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .isLoading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(255,255,255, 0.8);
    pointer-events: none;
    img {
      width: 100px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .add-blog {
    position: fixed;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
    > img {
      transition: 0.4s all ease;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
</style>

<template>
  <div id="app">
    <div
      v-if="isLoading"
      class="isLoading"
    >
      <img src="@/assets/images/isLoading.gif" alt="loading">
    </div>
    <div class="container pt-5">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomePage from './pages/HomePage/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
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
    background: rgba(255,255,255, 1);
    pointer-events: none;
    img {
      width: 100px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>

<template>
  <div id="app">
    <div class="container pt-5">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from './pages/HomePage/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

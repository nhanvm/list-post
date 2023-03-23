<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="container">
    <div class="col-md-6 mx-auto text-center">
      <h2 class="text-warning">{{ this.$route.params.message }}</h2>
      <h4 class="text-danger">{{ this.$route.params.statusCode }}</h4>
      <div class="mt-5">
        <router-link to="/" class="d-grid gap-2 col-6 mx-auto text-decoration-none">
          <button class="btn btn-success py-3" type="button">Go To HomePage</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

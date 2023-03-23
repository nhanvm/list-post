<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="search-blog col-md-6">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="valSearch"
      />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2"
        @click="handleSearchBlogs"
      >
        Search
      </button>
    </div>
  </div>
</template>

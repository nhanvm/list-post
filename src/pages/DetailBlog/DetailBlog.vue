<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <img :src="dataDetailBlog.image" :alt="dataDetailBlog.title" class="rounded img-fluid img-thumbnail">
      </div>
      <div class="col-md-9">
        <h1>{{ dataDetailBlog.title }}</h1>
        <i>{{ formatCreateAt(dataDetailBlog.createdAt) }}</i>
        <p class="mt-3">{{ dataDetailBlog.content }}</p>
      </div>
    </div>
  </div>
</template>

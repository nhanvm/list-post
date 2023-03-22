<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <SearchBlogs />
    <p class="text-danger">{{ this.getSearchListBlogs.length }} posts found</p>
    <ul class="list-unstyled row">
      <ItemBlog
        v-for="(item, index) in this.getSearchListBlogs"
        v-bind:key="index"
        v-bind:data="{
          img: item.image,
          title: item.title,
          content: item.content
        }"
      />
    </ul>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <SearchBlogs />
    <ul class="list-unstyled row">
      <ItemBlog
        v-for="(item, index) in this.getListBlogs"
        v-bind:key="index"
        v-bind:data="{
          img: item.image,
          title: item.title,
          content: item.content
        }"
      />
    </ul>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li
          class="page-item"
          v-for="(number, index) in this.displayedItems"
          v-bind:key="index"
        >
          <a class="page-link"
            @click="() => handlePagination(number)"
          >{{ number }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

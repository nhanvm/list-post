<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <SearchBlogs />
    <SortBlogs />
    <ul class="list-unstyled row">
      <ItemBlog
        v-for="(item, index) in this.getListBlogs"
        v-bind:key="index"
        v-bind:data="{
          id: item.id,
          img: item.image,
          title: item.title,
          content: item.content
        }"
      />
    </ul>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"
          :class="pageCurrent === 1 ? 'disabled' : ''"
        >
        <a class="page-link"
          @click="perPage()">
        Previous</a></li>
        <li
          class="page-item"
          v-for="(number, index) in this.displayedItems"
          v-bind:key="index"
          :class="(index + 1 === pageCurrent) ? 'active': ''"
        >
          <a class="page-link"
            @click="() => handlePagination(number)"
          >{{ number }}</a>
        </li>
        <li class="page-item">
          <a class="page-link"
            @click="nextPage()"
          >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

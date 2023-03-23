<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-6">
        <SortBlogs />
      </div>
      <div class="col-md-6">
        <SearchBlogs />
      </div>
    </div>
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
    <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-5">
      <ul class="pagination pt-3">
        <li class="page-item"
          :class="currentPage === 1 ? 'disabled' : ''"
        >
        <a class="page-link"
          @click="perPage()">
        Previous</a></li>
        <li
          class="page-item"
          v-for="(number, index) in this.displayedItems"
          v-bind:key="index"
          :class="(index + 1 === currentPage) ? 'active': ''"
        >
          <a class="page-link"
            @click="() => handlePagination(number)"
          >{{ number }}</a>
        </li>
        <li class="page-item"
          :class="currentPage === dataGetTotalBlogs ? 'disabled' : ''"
        >
          <a class="page-link"
            @click="nextPage()"
          >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

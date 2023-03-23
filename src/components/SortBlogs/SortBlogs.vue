<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        @click="toogleIsActive"
      >
        Sort by Create Time
      </button>
      <ul class="dropdown-menu"
        v-if="isActive"
      >
        <li>
          <a
            class="dropdown-item"
            :class="typeActive === 0 ? 'active' : ''"
            @click="orderByBlogs('desc', 'createdAt')">
            DESC</a>
        </li>
        <li>
          <a
            class="dropdown-item"
            :class="typeActive === 1 ? 'active' : ''"
            @click="orderByBlogs('asc', 'createdAt')">
            ASC</a>
        </li>
      </ul>
    </div>
  </div>
</template>

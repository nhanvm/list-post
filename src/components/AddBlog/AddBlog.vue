<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="add-blog_modal">
    <img
      src="@/assets/images/close.png" alt="close" class="add-blog_modal_close"
      @click="closeAddBlog"
    >
    <div class="container">
      <div>
        <h4 class="text-center">ADD NEW BLOG</h4>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              v-model="dataAddBlog.title"
              required
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              id="content"
              v-model="dataAddBlog.content"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

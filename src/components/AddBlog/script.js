export default {
  name: 'AddBlog',
  data () {
    return {
      dataAddBlog: {
        title: null,
        content: null,
        createdAt: new Date()
      }
    }
  },
  methods: {
    async submitForm () {
      // console.log(this.title, this.content, this.createdAt)
      await this.$store.dispatch('addBlog', this.dataAddBlog)
      await this.$emit('hanldeCloseAddBlog')
    },
    closeAddBlog () {
      this.$emit('hanldeCloseAddBlog')
    }
  }
}

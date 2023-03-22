export default {
  name: 'ItemBlog',
  data () {
    return {
    }
  },
  props: {
    data: {
      id: Number,
      img: String,
      title: String,
      content: String
    }
  },
  methods: {
    async handleGoToDetailBlog (id) {
      await this.$store.dispatch('getDetailBlog', id)
      await this.$router.push({ name: 'DetailBlog', params: { id: this.data.id } })
    }
  }
}

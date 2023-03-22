import { mapState } from 'vuex'

export default {
  name: 'DetailBlog',
  components: {
  },
  data () {
    return {}
  },
  async created () {
    await this.$store.dispatch('getDetailBlog', this.$route.params.id)
  },
  computed: {
    ...mapState({
      dataDetailBlog: state => state.dataDetailBlogsSuccess
    })
  },
  methods: {
    formatCreateAt (val) {
      if (val) {
        return new Date(val).toISOString().slice(0, 10)
      }
    }
  }
}

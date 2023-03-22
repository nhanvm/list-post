import { mapState } from 'vuex'
import SearchBlogs from './../../components/SearchBlogs/SearchBlogs'
import ItemBlog from './../../components/ItemBlog/ItemBlog'

export default {
  name: 'HomePage',
  components: {
    SearchBlogs,
    ItemBlog
  },
  data () {
    return {
    }
  },
  async created () {
    await this.$store.dispatch('getSearchListBlogs', { search: this.$route.params.key.slice(1) })
  },
  computed: {
    ...mapState({
      valSearch: state => state.valSearch,
      getSearchListBlogs: state => state.getSearchListBlogs
    })
  }
}

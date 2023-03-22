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
    // if (this.getValSearch) {
    //   await this.$store.dispatch('getSearchListBlogs', { search: this.getValSearch })
    // }
  },
  computed: {
    ...mapState({
      getValSearch: state => state.getValSearch,
      getSearchListBlogs: state => state.getSearchListBlogs
    })
  }
}

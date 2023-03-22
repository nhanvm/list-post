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
      page: 1
    }
  },
  computed: {
    ...mapState({
      getListBlogs: state => state.getListBlogs
    }),
    displayedItems () {
      return 5
    }
  },
  created () {
    this.$store.dispatch('getListBlogs', {page: 1})
  },
  methods: {
    handlePagination (valPerPage) {
      this.$store.commit('getValSearch', valPerPage)
      this.$store.dispatch('getListBlogs', {page: valPerPage})
    }
  }
}

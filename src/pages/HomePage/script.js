import { mapState } from 'vuex'
import SearchBlogs from './../../components/SearchBlogs/SearchBlogs'
import SortBlogs from './../../components/SortBlogs/SortBlogs'
import ItemBlog from './../../components/ItemBlog/ItemBlog'

export default {
  name: 'HomePage',
  components: {
    SearchBlogs,
    SortBlogs,
    ItemBlog
  },
  data () {
    return {
      page: 1,
      pageCurrent: 1
    }
  },
  computed: {
    ...mapState({
      getListBlogs: state => state.getListBlogs,
      currentPage: state => state.currentPage
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
      this.pageCurrent = valPerPage
      this.$store.dispatch('getListBlogs', {page: valPerPage})
    },
    async nextPage () {
      await this.$store.dispatch('getListBlogs', {page: this.currentPage + 1})
      this.pageCurrent = this.currentPage
    },
    async perPage () {
      await this.$store.dispatch('getListBlogs', {page: this.currentPage - 1})
      this.pageCurrent = this.currentPage
    }
  }
}

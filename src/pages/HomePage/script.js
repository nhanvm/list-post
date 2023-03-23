import { mapState } from 'vuex'
import SearchBlogs from '@/components/SearchBlogs/SearchBlogs'
import SortBlogs from '@/components/SortBlogs/SortBlogs'
import ItemBlog from '@/components/ItemBlog/ItemBlog'

export default {
  name: 'HomePage',
  components: {
    SearchBlogs,
    SortBlogs,
    ItemBlog
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState({
      getListBlogs: state => state.getListBlogs,
      currentPage: state => state.currentPage,
      typeOrder: state => state.typeOrder,
      dataGetTotalBlogs: state => state.dataGetTotalBlogs
    }),
    displayedItems () {
      return this.dataGetTotalBlogs
    }
  },
  created () {
    this.$store.dispatch('getTotalBlogs')
    this.$store.dispatch('getListBlogs', {page: 1})
  },
  methods: {
    async handlePagination (valPerPage) {
      await this.$store.dispatch('getListBlogs', { order: this.typeOrder, page: valPerPage })
    },
    async nextPage () {
      await this.$store.dispatch('getListBlogs', {page: this.currentPage + 1})
    },
    async perPage () {
      await this.$store.dispatch('getListBlogs', {page: this.currentPage - 1})
    }
  }
}

import {mapState} from 'vuex'

export default {
  name: 'SortBlogs',
  components: {
  },
  data () {
    return {
      isActive: false,
      typeActive: 0
    }
  },
  computed: {
    ...mapState({
      typeOrder: state => state.typeOrder
    })
  },
  methods: {
    // toggle button sort order by blogs
    toogleIsActive () {
      this.isActive = !this.isActive
    },
    // sort order by blogs
    async orderByBlogs (order, sortBy) {
      this.isActive = false
      await this.$store.commit('typeOrderSuccess', order)
      await this.$store.dispatch('getListBlogs', {order: this.typeOrder, sortBy: sortBy, page: 1})
      if (order === 'desc') {
        this.typeActive = 0
      } else if (order === 'asc') {
        this.typeActive = 1
      }
    }
  }
}

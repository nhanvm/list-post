export default {
  name: 'SearchBlogs',
  data () {
    return {
      valSearch: null
    }
  },
  methods: {
    handleSearchBlogs () {
      this.$store.dispatch('getSearchListBlogs', {search: this.valSearch})
      this.$router.push({path: 'search=' + this.valSearch})
    }
  }
}

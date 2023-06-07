<template>
  <div class='main'>
    <div v-for='(item, key) in singleItem'>
      <p>{{ key }} : {{ item }}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'kursAdminCategoryItem',
  methods: {
    ...mapMutations({
      getFeedFromStorage: 'getAdminParamsFromStorage'
    }),
    ...mapActions({
      getSingleItem: 'getSingleItem'
    })
  },
  computed: {
    ...mapState({
      currentParams: state => state.adminFeed.currentParams,
      singleItem: state => state.adminFeed.singleItem
    }),
    api() {
      return this.currentParams?.payload?.api
    }
  },
  mounted() {
    this.getFeedFromStorage()
    this.getSingleItem(this.$route.params.id)
  }
}
</script>

<style scoped>
.main {
  min-width: 20em;
  min-height: 20em;
  background-color: #fff;
}
</style>
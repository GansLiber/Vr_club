<template>
  <div class='main'>
    <div>
      <div v-for='(item, key, i) in singleItem'>
        <template v-if='i!==0'>
          <p><span style='background-color: #bcdeff;'>{{ key }}</span> : {{ item }}</p>
        </template>
      </div>
      <kurs-button @click='delItem' class='card-btn'>Удалить</kurs-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'kursAdminCategoryItem',
  components: {},

  methods: {
    ...mapMutations({
      getFeedFromStorage: 'getAdminParamsFromStorage'
    }),
    ...mapActions({
      getSingleItem: 'getSingleItem',
      delSingleItem: 'delItem'
    }),
    delItem() {
      this.delSingleItem(this.$route.params.id)
    }
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
  padding: 10px;
}

.main > div:first-child {
  position: relative;
  height: 100%;

}

.card-btn {
  position: absolute;
  background-color: #c93535;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
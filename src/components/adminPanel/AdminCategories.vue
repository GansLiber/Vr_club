<template>
  <div class='card' v-for='(item) in data' :key='item[primaryKey]'>
    <router-link :to="{ name: 'categoryItem', params: { id: item[primaryKey] }}">
      <p>{{ item[primaryKey] }}</p>
      <div v-for='(value, keyin) in item' :key='value'>
        <p>{{ keyin }}: {{ value }}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'kursAdminCategories',
  methods: {
    ...mapActions({
      getFeed: 'getFeed',
      addItem: 'addItem'
    })
  },
  computed: {
    ...mapState({
      data: state => state.adminFeed.data,
      currentParams: state => state.adminFeed.currentParams
    }),
    primaryKey() {
      return this.currentParams?.payload?.key
    }
  },
  watch: {},
  mounted() {
    this.getFeed()
  }
}
</script>

<style scoped>
.card {
  flex: 0 0 calc(33.33% - 20px);
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 20em;
  /*min-width: 20em;*/
}
</style>
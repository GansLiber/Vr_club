<template>
  <h3>{{ categoryName }}</h3>
  <div class='categoryIn'>
    <div class='left-section'>
      <form @submit.prevent=''>
        <input type='text' v-model='newItem' placeholder='Введите новый элемент' />
        <button type='submit'>Добавить</button>
      </form>
    </div>
    <div class='right-section'>
      <router-view />
    </div>

  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import kursAdminCategories from '@/components/adminPanel/AdminCategories'

export default {
  name: 'kursAdminMainForm',
  components: {kursAdminCategories},
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    ...mapActions({
      // addItem: 'addItem'
    }),
    ...mapMutations({
      getAdminFeedParams: 'getAdminParamsFromStorage'
    })
  },
  computed: {
    ...mapState({
      currentParams: state => state.adminFeed.currentParams
    }),
    categoryName() {
      return this.currentParams?.payload?.name
    }
  },
  mounted() {
    this.getAdminFeedParams()
  }
}
</script>

<style scoped>
.categoryIn {
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
  background-color: #f1f1f1;
}

.right-section {
  flex: 2;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 0 0 calc(33.33% - 20px);
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

p {
  color: #333;
  margin: 0;
}

input {
  margin-right: 10px;
}

button {
  padding: 6px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

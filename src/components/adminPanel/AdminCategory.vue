<template>

  <div class='categoryIn'>
    <div class='left-section'>
      <form @submit.prevent='addItem'>
        <input type='text' v-model='newItem' placeholder='Введите новый элемент' />
        <button type='submit'>Добавить</button>
      </form>
    </div>
    <div class='right-section'>
      <div class='card' v-for='(item) in data' :key='item[primaryKey]'>
        <p>{{ item[primaryKey] }}</p>
        <div v-for='(value, keyin) in item' :key='keyin'>
          <p>{{ keyin }}: {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'kursAdminCategory',
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    ...mapActions({
      getFeed: 'getFeed',
      addItem: 'addItem'
    })
  },
  computed: {
    ...mapState({
      data: state => state.adminFeed.data
    }),
    primaryKey() {
      return this.$route.params.key
    }
  },
  mounted() {
    this.getFeed({apiUrl: this.$route.params.api})
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
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>


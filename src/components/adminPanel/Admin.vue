<template>
  <div class='admin-panel'>
    <div class='category-list'>
      <h2>Категории:</h2>
      <ul>
        <li v-for='category in categories' :key='category.value'>
          <router-link
            @click='setCategoryToStorage(category)'
            :to="{
              name: 'category',
              params: {category: category.value,}}"
            exact
          >
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
import categories from '@/data/admin/categories'
import {mapMutations} from 'vuex'

export default {
  name: 'kursAdmin',
  data() {
    return {
      categories: categories
    }
  },
  methods: {
    ...mapMutations(['setAdminFeedToStorage']),
    setCategoryToStorage(category) {
      this.setAdminFeedToStorage({payload: category})
    }
  },
  computed() {

  }
}
</script>

<style scoped>
.admin-panel {
  margin: 0 auto;
  height: 55em;
}

.category-list ul {
  list-style-type: none;
  padding: 0;
}

.category-list li {
  margin-bottom: 10px;
}

.category-list a {
  color: blue;
  text-decoration: none;
}

.category-list a:hover {
  text-decoration: underline;
}

</style>

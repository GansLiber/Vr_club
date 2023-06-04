<template>
  <div class='admin-panel'>
    <div class='category-list'>
      <h2>Категории:</h2>
      <ul>
        <li v-for='category in categories' :key='category.value'>
          <router-link
            :to="{ name: 'category', params: { category: category.value, name: category.name, api: category.api } }"
            exact
          >
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import categories from '@/data/admin/categories'

export default {
  name: 'kursAdmin',
  data() {
    return {
      categories: categories
    }
  },
  methods: {
    isActiveCategory(categoryValue) {
      return this.$route.params.category === categoryValue
    }
  }
}
</script>

<style scoped>
.admin-panel {
  max-width: 800px;
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

.category-list .active {
  font-weight: bold;
}
</style>

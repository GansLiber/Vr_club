<template>
  <div v-if='!this.$route.params.id'>
    <h4>Добавить объект</h4>
    <form @submit.prevent='submitAdd'>
      <div v-for='field in fields'>
        <label :for='field.name'>{{ field.name }}</label>
        <kurs-input
          v-model.trim='field.value'
          :type='field.type'
          :name='field.name'
          :id='field.name'
          :placehold='field.name'></kurs-input>
      </div>
      <kurs-button>Добавить</kurs-button>
    </form>
  </div>
  <div v-else>
    <form v-if='singleItemData' @submit.prevent='submitChange'>
      <h4>Изменить объект</h4>
      <div v-for='field in fields'>
        <label :for='field.name'>{{ field.name }}</label>
        <kurs-input
          v-model.trim='singleItemData[field.name]'
          :type='field.type'
          :name='field.name'
          :id='field.name'
          :placehold='field.name'></kurs-input>
      </div>
      <kurs-button>Изменить</kurs-button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'kursAdminInForm',
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    ...mapActions({
      addItem: 'addItem',
      changeItem: 'changeItem'
    }),
    submitAdd() {
      const formData = {}
      for (const field of this.fields) {
        formData[field.name] = field.value
      }
      console.log(formData)
      this.addItem(formData)
    },
    submitChange() {
      const credentials = {item: this.singleItem, id: this.$route.params.id}
      this.changeItem(credentials)
    }
  },
  computed: {
    ...mapState({
      currentParams: state => state.adminFeed.currentParams,
      singleItem: state => state.adminFeed.singleItem
    }),
    fields() {
      return this.currentParams?.payload?.fields
    },
    singleItemData() {
      return this.singleItem
    }
  }
}
</script>

<style scoped>

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
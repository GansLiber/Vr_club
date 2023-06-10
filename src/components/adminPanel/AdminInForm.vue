<template>
  <div v-if='!this.$route.params.id'>
    <h4>Добавить объект</h4>
    <form @submit.prevent='submitAdd'>
      <div v-for='field in fields'>
        <label :for='field.name'>{{ field.keyIn }}</label>
        <kurs-input
          v-model.trim='field.value'
          :type='field.type'
          :name='field.keyIn'
          :id='field.name'
          :placehold='field.name'></kurs-input>
      </div>
      <div v-if='sideFieldsLocal && sideFieldsStore'>
        <div v-for='(sideField, index) in sideFieldsLocal'>
          <label :for="'sideField-' + index">{{ sideField.name }}</label>
          <kurs-select
            v-model='sideField.value'
            :name='sideField.keyIn'
            :id="'sideField-' + index">
            <option
              v-for='subSide in sideFieldsStore[index].data'
              :value='subSide[sideField.keyIn]'>
              {{ subSide[sideField.name] }}
            </option>
          </kurs-select>
        </div>
      </div>
      <kurs-button>Добавить</kurs-button>
    </form>
  </div>
  <div v-else>
    <form v-if='singleItemData' @submit.prevent='submitChange'>

      <h4>Изменить объект</h4>
      <div v-for='field in fields'>
        <label :for='field.name'>{{ field.keyIn }}</label>
        <kurs-input
          v-model.trim='singleItemData[field.name]'
          :type='field.type'
          :name='field.name'
          :id='field.name'
          :placehold='field.name'></kurs-input>
      </div>
      <div v-if='sideFieldsLocal && sideFieldsStore'>
        <div v-for='(sideField, index) in sideFieldsLocal'>
          <label :for="'sideField-' + index">{{ sideField.subName }}</label>
          <kurs-select
            v-model='singleItemData[sideField.subName]'
            :name='sideField.keyIn'
            :id="'sideField-' + index">
            <option
              v-for='subSide in sideFieldsStore[index].data'
              :value='subSide[sideField.keyIn]'>
              {{ subSide[sideField.name] }}
            </option>
          </kurs-select>
        </div>
      </div>
      <kurs-button>Изменить</kurs-button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import KursSelect from '@/components/UI/Select'

export default {
  name: 'kursAdminInForm',
  components: {KursSelect},
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    ...mapActions({
      addItem: 'addItem',
      changeItem: 'changeItem',
      getSideFeed: 'getSideFeed'
    }),
    submitAdd() {
      const formData = {}
      for (const field of this.fields) {
        formData[field.keyIn] = field.value
      }
      for (const sideField of this.sideFieldsLocal) {
        formData[sideField.keyIn] = sideField.value
      }
      console.log(formData)
      this.addItem(formData)
    },
    submitChange() {
      if (!this.singleItemData) {
        return
      }

      for (const field of this.fields) {
        field.value = this.singleItemData[field.name]
      }

      const formData = {}

      for (const field of this.fields) {
        formData[field.keyIn] = field.value
      }

      for (const sideField of this.sideFieldsLocal) {
        formData[sideField.keyIn] = this.singleItemData[sideField.subName]
      }

      const credentials = {item: formData, id: this.$route.params.id}
      this.changeItem(credentials)
    }
  },
  computed: {
    ...mapState({
      currentParams: state => state.adminFeed.currentParams,
      singleItem: state => state.adminFeed.singleItem,
      sideFieldsFromStore: state => state.adminFeed.sideFeedsStore
    }),
    fields() {
      return this.currentParams?.payload?.fields
    },
    sideFieldsLocal() {
      return this.currentParams?.payload?.sideFieldsLocal
    },
    sideFieldsStore() {
      return this.sideFieldsFromStore
    },
    singleItemData() {
      return this.singleItem
    }
  },

  async mounted() {
    await this.getSideFeed()
  }
}
</script>

<style scoped>

input {
  margin-right: 10px;
}

</style>
<template>
  <h3>{{ categoryName }}</h3>
  <div class='categoryIn'>
    <div class='left-section' v-if='fields'>
      <kurs-admin-in-form></kurs-admin-in-form>
    </div>
    <div class='right-section'>
      <router-view />
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import kursAdminCategories from '@/components/adminPanel/AdminCategories'
import kursAdminInForm from '@/components/adminPanel/AdminInForm'

export default {
  name: 'kursAdminMainForm',
  components: {kursAdminCategories, kursAdminInForm},

  methods: {
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
    },
    fields() {
      return this.currentParams?.payload?.fields
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

p {
  color: #333;
  margin: 0;
}

</style>

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import components from '@/components/UI'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app
  .use(VuePlyr, {
    plyr: {},
  })
  .use(store)
  .use(router)
  .mount('#app')

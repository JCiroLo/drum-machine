import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import icon from './components/icon/index.vue'
import input from './components/input/index.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('v-icon', icon)
  .component('v-input', input)
  .mount('#app')

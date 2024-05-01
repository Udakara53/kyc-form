import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'; 
import axios from 'axios'
import VueAxios from 'vue-axios'






loadFonts()

axios.create({
  baseURL:'http://localhost:5080'
});

const pinia = createPinia();

createApp(App).use(pinia).use(router)
  .use(vuetify).use(VueAxios, axios)
  .mount('#app')

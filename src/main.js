import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import less from 'less'

createApp(App).use(pinia).use(router).mount('#app').use(less)

//console.log(gaga)

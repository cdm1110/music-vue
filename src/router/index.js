import Index from '@/view/index.vue'
import PlayList from '@/view/PlayList.vue'
import { createRouter, createWebHistory } from 'vue-router'

// import { useUserStore } from '@/stores'

//路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/playlist/:id', component: PlayList, props: true }
  ]
})

export default router

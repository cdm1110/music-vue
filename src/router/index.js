import Index from '@/view/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

// import { useUserStore } from '@/stores'

//路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: Index }]
})

export default router

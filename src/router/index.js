import DailyMusic from '@/components/home-menu/DailyMusic.vue'
import TopMusic from '@/components/home-menu/TopMusic.vue'
import CommentPage from '@/view/CommentPage.vue'
import Index from '@/view/index.vue'
import MusicShow from '@/view/MusicShow.vue'
import PlayList from '@/view/PlayList.vue'
import { createRouter, createWebHistory } from 'vue-router'

// import { useUserStore } from '@/stores'

//路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index }, //主页
    { path: '/index/daily', component: DailyMusic }, //每日推荐
    { path: '/index/top', component: TopMusic }, //排行榜

    { path: '/playlist/:id', component: PlayList, props: true }, //歌单页
    { path: '/music', name: 'music', component: MusicShow }, //播放页
    { path: '/comment', component: CommentPage } //评论页
  ]
})

export default router

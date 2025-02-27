<template>
  <CommentTopNav></CommentTopNav>
  <CommentTitle :Ob="Ob"></CommentTitle>
  <CommentText :Ob="Ob"></CommentText>
  <CommentBottom></CommentBottom>
</template>

<script setup>
//评论页组件
import CommentTopNav from '@/components/comment/CommentTopNav.vue'
import CommentTitle from '@/components/comment/CommentTitle.vue'
import CommentText from '@/components/comment/CommentText.vue'
import CommentBottom from '@/components/comment/CommentBottom.vue'

import { useRoute } from 'vue-router'

const Ob = JSON.parse(useRoute().query.Ob)
//console.log(Ob)

//底部组件显示
import { usePlayStore } from '@/stores'
import { onMounted } from 'vue'
const PlayStore = usePlayStore()
const { updateFooterShow } = PlayStore
onMounted(() => {
  updateFooterShow(false)
})
</script>

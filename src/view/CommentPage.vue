<template>
  <CommentTopNav :total="Comment.total"></CommentTopNav>
  <CommentTitle></CommentTitle>
  <CommentText></CommentText>
</template>

<script setup>
import { getPlayCommentData } from '@/api/comment'

//评论页组件
import CommentTopNav from '@/components/comment/CommentTopNav.vue'
import CommentTitle from '@/components/comment/CommentTitle.vue'
import CommentText from '@/components/comment/CommentText.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'

const Id = useRoute().query.id

//获取歌单评论
const Comment = ref({})
const getPlayComment = async () => {
  const res = await getPlayCommentData(Id)
  console.log(res.data)
  Comment.value = res.data
}
getPlayComment()
</script>

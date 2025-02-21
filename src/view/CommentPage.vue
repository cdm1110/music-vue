<template>
  <CommentTopNav :total="Ob.total"></CommentTopNav>
  <CommentTitle :Ob="Ob"></CommentTitle>
  <CommentText :Ob="Ob"></CommentText>
</template>

<script setup>
//评论页组件
import CommentTopNav from '@/components/comment/CommentTopNav.vue'
import CommentTitle from '@/components/comment/CommentTitle.vue'
import CommentText from '@/components/comment/CommentText.vue'

import { useRoute } from 'vue-router'

const Ob = JSON.parse(useRoute().query.Ob)
console.log(Ob)
</script>

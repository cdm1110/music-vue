<template>
  <ShowTopNav :title="title"></ShowTopNav>
</template>

<script setup>
import { getMusicShowData } from '@/api/playlist'
import { useRoute } from 'vue-router'
import ShowTopNav from '@/components/musicshow/ShowTopNav.vue'

//获取歌曲数据和所属歌单标题
const id = useRoute().query.id
const title = useRoute().query.title

const getMusicShow = async () => {
  const res = await getMusicShowData(id)
  console.log(res.data.data[0])
}
getMusicShow()
</script>

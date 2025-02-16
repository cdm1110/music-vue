<template>
  <ShowTopNav :title="title"></ShowTopNav>
  <ShowContent :id="id"></ShowContent>
</template>

<script setup>
import { getMusicShowData } from '@/api/musicshow'
import { useRoute } from 'vue-router'
import ShowTopNav from '@/components/musicshow/ShowTopNav.vue'
import ShowContent from '@/components/musicshow/ShowContent.vue'

//获取歌曲id和所属歌单标题
const id = useRoute().query.id
const title = useRoute().query.title

//获取歌曲url和相关参数
const getMusicShow = async () => {
  const res = await getMusicShowData(id)
  console.log(res.data.data[0])
}
getMusicShow()
</script>

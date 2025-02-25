<template>
  <PlayTopNav></PlayTopNav>
  <PlayTitle :id="id" @playname="getPlayname"></PlayTitle>
  <PlayMusic :MusicList="MusicList" :title="title"></PlayMusic>
</template>

<script setup>
import PlayTopNav from '@/components/musiclist/PlayTopNav.vue'
import PlayTitle from '@/components/musiclist/PlayTitle.vue'
import PlayMusic from '@/components/musiclist/PlayMusic.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

//从子组件获取歌单标题
const title = ref('')
const getPlayname = (name) => {
  //console.log(name)
  title.value = name
}

//获取歌单的歌曲列表
import { getMusicListData } from '@/api/playlist'
import { ref } from 'vue'
const id = props.id
const MusicList = ref([])
const getMusicList = async () => {
  const res = await getMusicListData({ id, limit: 1000, offset: 0 })
  MusicList.value = res.data.songs
  // console.log(MusicList.value)
}
getMusicList()
</script>

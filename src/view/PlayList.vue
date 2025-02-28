<template>
  <PlayTopNav></PlayTopNav>
  <PlayTitle :id="id"></PlayTitle>
  <PlayMusic :MusicList="MusicList"></PlayMusic>
</template>

<script setup>
import PlayTopNav from '@/components/musiclist/PlayTopNav.vue'
import PlayTitle from '@/components/musiclist/PlayTitle.vue'
import PlayMusic from '@/components/musiclist/PlayMusic.vue'
import { onMounted, ref } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

//底部组件显示
import { usePlayStore } from '@/stores'
const PlayStore = usePlayStore()
const { updateFooterShow } = PlayStore
onMounted(() => {
  updateFooterShow(true)
})

// //从子组件获取歌单标题
// const title = ref('')
// const getPlayname = (name) => {
//   //console.log(name)
//   title.value = name
// }

//获取歌单的歌曲列表
import { getMusicListData } from '@/api/playlist'
const id = props.id
const MusicList = ref([])
const getMusicList = async () => {
  const res = await getMusicListData({ id, limit: 1000, offset: 0 })
  MusicList.value = res.data.songs
  console.log(MusicList.value)
}
getMusicList()
</script>

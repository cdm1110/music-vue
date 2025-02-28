import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore(
  'music',
  () => {
    //切换歌词界面/磁盘界面
    const lyric_change = ref()
    const setlyric_change = (data) => {
      lyric_change.value = data
    }
    const updatelyric_change = () => {
      lyric_change.value = !lyric_change.value
    }

    //歌单名称（便于播放页展示）
    const ListName = ref('')
    const setListName = (value) => {
      ListName.value = value
    }
    return {
      lyric_change,
      setlyric_change,
      updatelyric_change,
      ListName,
      setListName
    }
  },
  {
    persist: true
  }
)

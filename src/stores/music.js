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

    return {
      lyric_change,
      setlyric_change,
      updatelyric_change
    }
  },
  {
    persist: true
  }
)

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayStore = defineStore(
  'play',
  () => {
    //播放相关参数
    const currentTime = ref(0) //当前时间
    return { currentTime }
  },
  {
    persist: true
  }
)

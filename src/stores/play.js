import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayStore = defineStore('play', () => {
  //播放相关参数
  const play_List = ref([
    {
      //播放列表
      al: {
        id: 15199,
        name: 'David Tao',
        pic: 109951169507121140,
        picUrl:
          'https://p2.music.126.net/vcyUJw7mfEzzMCgbJry31w==/109951169507121139.jpg',
        pic_str: '109951169507121139'
      },
      id: 2025533834,
      name: '流沙',
      ar: [{ name: '陶喆' }]
    }
  ])

  //播放下标
  const playListIndex = ref(0)

  //当前时间
  const currentTime = ref(0)
  const updateCurrentTime = (value) => {
    currentTime.value = value
  }

  //暂停与播放的按钮
  const isbtnShow = ref(false)
  const changeIsbtnShow = (value) => {
    isbtnShow.value = value
  }

  //歌曲总时间
  const duration = ref(0)
  const addDuration = (value) => {
    duration.value = value
  }

  //底部播放组件是否显示
  const footerShow = ref(true)
  const updateFooterShow = (value) => {
    footerShow.value = value
  }

  return {
    play_List,
    playListIndex,
    currentTime,
    updateCurrentTime,
    isbtnShow,
    changeIsbtnShow,
    duration,
    addDuration,
    footerShow,
    updateFooterShow
  }
})

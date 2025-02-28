import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayStore = defineStore('play', () => {
  //播放相关参数
  const play_List = ref([
    {
      //播放列表
      al: {
        id: 15185,
        name: '太平盛世',
        pic: 109951163803188850,
        picUrl:
          'https://p2.music.126.net/ZR6QuByWgej9-aRhZjLqHw==/109951163803188844.jpg',
        pic_str: '109951163803188844'
      },
      id: 150432,
      name: '爱我还是他',
      ar: [{ name: '陶喆' }]
    }
  ])
  const pushPlay_List = (value) => {
    play_List.value.push(value)
  }
  const updatePlay_List = (value) => {
    play_List.value = value
    console.log(play_List.value)
  }

  //播放下标
  const playListIndex = ref(0)
  const updatePlayListIndex = (value) => {
    playListIndex.value = value
  }

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
    pushPlay_List,
    updatePlay_List,
    playListIndex,
    updatePlayListIndex,
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

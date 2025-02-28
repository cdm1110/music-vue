<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="ToMusic()">
      <img :src="play_List[playListIndex].al.picUrl" alt="播放音乐封面" />
      <div>
        {{ play_List[playListIndex].name }}-
        {{ play_List[playListIndex].ar[0].name }}
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" v-if="isbtnShow" @click="funplay">
        <use xlink:href="#icon-zanting2"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-else @click="funplay">
        <use xlink:href="#icon-bofang1"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu-copy"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${play_List[playListIndex].id}.mp3`"
    ></audio>
    <!-- <van-popup
        v-model:show="detailShow"
        position="right"
        :style="{ height: '100%', width: '100%' }"
      >
      </van-popup> -->
  </div>
</template>

<script setup>
import { onUpdated, ref, watch } from 'vue'
//播放仓库解构
import { useMusicStore, usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
import router from '@/router'
const MusicStore = useMusicStore()
const PlayStore = usePlayStore()
const { changeIsbtnShow, updateCurrentTime, addDuration } = PlayStore
const { play_List, playListIndex, isbtnShow } = storeToRefs(PlayStore)

const audio = ref()
//更新总时间
const getDuration = () => {
  //console.log(audio.value.duration)
  addDuration(audio.value.duration)
}
onUpdated(() => {
  getDuration()
})
let Time
//更新当前播放时间
function updateTime() {
  //clearInterval(Time)
  Time = setInterval(() => {
    console.log(audio.value.currentTime)
    updateCurrentTime(audio.value.currentTime)
  }, 1000)
}
const funplay = () => {
  if (audio.value.paused) {
    changeIsbtnShow(true)
  } else {
    changeIsbtnShow(false)
  }
}

watch(isbtnShow, (newValue) => {
  if (newValue) {
    audio.value.play()
    updateTime()
  } else {
    audio.value.pause()
    clearInterval(Time)
  }
})

const ToMusic = () => {
  //保证进入播放页时是磁盘界面
  MusicStore.setlyric_change(false)
  //路由传参
  router.push({
    path: '/music',
    name: 'music',
    query: {
      id: play_List.value[playListIndex.value].id
    }
  })
  //更新播放按钮
  changeIsbtnShow(false)
}
</script>

<style lang="less" scoped>
.FooterMusic {
  z-index: 9999;
  width: 100%;
  height: 0.9rem;
  background-color: #e8e8e8;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 5.2rem;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    img {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
    }
    div {
      font-size: 0.24rem;
      width: 4rem;
      padding-left: 0.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .footerRight {
    width: 75px;
    height: 100%;
    display: flex;
    margin-right: 0.2rem;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>

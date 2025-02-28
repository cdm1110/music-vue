<template>
  <div class="ShowBottom">
    <div class="footerContent">
      <input
        type="range"
        class="range"
        min="0"
        max="02:30"
        v-model="currentTime"
        step="0.05"
      />
    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-next-fill-copy"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-if="!isbtnShow"
        @click="changeIsbtnShow(true)"
      >
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-else
        @click="changeIsbtnShow(false)"
      >
        <use xlink:href="#icon-zanting1"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-next-fill"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { useMusicStore, usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
const MusicStore = useMusicStore()
const PlayStore = usePlayStore()
const { changeIsbtnShow, updatePlayListIndex } = PlayStore
const { play_List, currentTime, isbtnShow, playListIndex } =
  storeToRefs(PlayStore)

const props = defineProps({
  title: String
})

const goPlay = (n) => {
  //更新播放下标
  let index = playListIndex.value + n
  if (index < 0) {
    index = play_List.value.length - 1
  } else if (index == play_List.value.length) {
    index = 0
  }
  updatePlayListIndex(index)

  //保证进入播放页时是磁盘界面
  MusicStore.setlyric_change(false)
  //路由传参
  router.replace({
    path: '/music',
    name: 'music',
    query: {
      id: play_List.value[playListIndex.value].id,
      title: props.title
    }
  })
  //更新播放按钮
  changeIsbtnShow(false)
}
</script>

<style lang="less" scoped>
.ShowBottom {
  width: 100%;
  height: 3.24rem;
  padding: 0 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .footerContent {
    width: 100%;
    height: 0.6rem;
    margin-bottom: 0.3rem;
    .range {
      width: 100%;
      height: 0.06rem;
    }
  }
  .footer {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>

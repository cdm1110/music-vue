<template>
  <ShowTopNav>{{ title }}</ShowTopNav>
  <div class="ShowLyric" ref="m_lyric" @click="MusicStore.updatelyric_change()">
    <p
      class="lyric_item"
      v-for="(item, index) in musicLyric"
      :key="index"
      :class="{
        active: currentTime >= item.time && currentTime < item.pre
      }"
    >
      {{ item.lyric }}
    </p>
  </div>
  <div class="ShowText">
    <div class="love">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
    </div>
    <div class="comment">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun-copy"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { getMusicLyricData } from '@/api/musicshow'
import ShowTopNav from '@/components/musicshow/ShowTopNav.vue'

//导入music和play仓库
import { useMusicStore, usePlayStore } from '@/stores'

import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
const MusicStore = useMusicStore()
const PlayStore = usePlayStore()
const { currentTime, duration } = storeToRefs(PlayStore)

const props = defineProps({
  title: String,
  id: String
})
const id = props.id

//获取歌词
const lyric = ref()
const musicLyric = ref([])
const getMusicLyric = async () => {
  const res = await getMusicLyricData(id)
  lyric.value = res.data.lrc.lyric
  //console.log(lyric.value)
  //正则表达式
  const re = /\[([^\]]+)\]([^[]+)/g
  const result = ref([])
  lyric.value.replace(re, ($0, $1, $2) => {
    result.value.push({ time: FormatTime($1), lyric: $2 })
  })
  console.log(result.value)
  musicLyric.value = result.value
  musicLyric.value.forEach((item, i) => {
    if (
      i === musicLyric.value.length - 1 ||
      isNaN(musicLyric.value[i + 1].time)
    ) {
      item.pre = 100000
    } else {
      item.pre = musicLyric.value[i + 1].time
    }
  })
}
getMusicLyric()

//格式化歌词时间
const FormatTime = (t) => {
  const arr = t.split(':')
  return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1)
}

const m_lyric = ref()
//监听currentTime
let lastActiveLine = null
watch(currentTime, (newTime) => {
  const active = document.querySelector('.lyric_item.active')
  console.log(active)

  // 只有当 active 行发生变化时才触发滚动
  if (active && active !== lastActiveLine) {
    lastActiveLine = active // 更新上一次的 active 行

    // 获取容器和歌词行的高度
    const containerHeight = m_lyric.value.clientHeight
    const lineHeight = active.offsetHeight
    const lineTop = active.offsetTop
    console.log(lineTop)

    // 计算滚动位置，使 active 行居中
    const scrollToPosition = lineTop - containerHeight / 2 + lineHeight / 2 - 90
    // console.log(scrollToPosition)

    // 平滑滚动到目标位置
    m_lyric.value.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    })
  }

  if (newTime === duration) {
    // if (playListIndex === playList.length - 1) {
    //   this.updatePlayListIndex(0)
    //   this.play()
    // } else {
    //   this.updatePlayListIndex(this.playListIndex + 1)
    // }
    console.log('播放完毕')
  }
})
</script>

<style lang="less" scoped>
.ShowLyric {
  color: #b4b4b4;
  font-size: 0.26rem;
  height: 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.6rem;
  overflow: scroll;
  .active {
    color: white;
    font-size: 0.3rem;
  }
}
.ShowText {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: right;
  .love {
    padding-top: 0.06rem;
    padding-right: 0.36rem;
    .icon {
      height: 0.6rem;
      width: 0.6rem;
    }
  }
  .comment {
    padding-top: 0.06rem;
    margin-right: 0.45rem;
    .icon {
      height: 0.6rem;
      width: 0.6rem;
    }
  }
}
</style>

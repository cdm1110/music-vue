<template>
  <ShowTopNav>{{ title }}</ShowTopNav>
  <div class="ShowLyric" @click="MusicStore.updatelyric_change()">
    <div class="lyric_item">我是歌词1</div>
    <div class="lyric_item active">我是歌词2</div>
    <div class="lyric_item">我是歌词3</div>
    <div class="lyric_item">我是歌词4</div>
    <div class="lyric_item">我是歌词5</div>
    <div class="lyric_item">我是歌词6</div>
    <div class="lyric_item">我是歌词7</div>
    <div class="lyric_item">我是歌词8</div>
    <div class="lyric_item">我是歌词9</div>
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

//导入music仓库
import { useMusicStore } from '@/stores'
const MusicStore = useMusicStore()

const props = defineProps({
  title: String,
  id: String
})
const id = props.id
const getMusicLyric = async () => {
  const res = await getMusicLyricData(id)
  console.log(res.data)
}
getMusicLyric()
</script>

<style lang="less" scoped>
.ShowLyric {
  color: #b4b4b4;
  font-size: 0.26rem;
  height: 7.2rem;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.6rem;
  overflow: hidden;
  .active {
    color: white;
    font-size: 0.3rem;
  }
}
.ShowText {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.3rem;
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

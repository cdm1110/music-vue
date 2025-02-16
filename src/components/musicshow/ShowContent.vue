<template>
  <div class="showContent">
    <div class="showImg">
      <img :src="MusicContent.picUrl" />
      <div class="showIcon"></div>
    </div>
    <div class="showText">
      <div class="name">
        <div class="title">
          {{ MusicContent.title }}
          <span v-if="MusicContent.tns">({{ MusicContent.tns[0] }})</span>
        </div>
        <div class="arname">
          <span v-for="(item, i) in MusicContent.arname" :key="i">
            {{ item.name }}
          </span>
        </div>
      </div>
      <div class="love">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hear-half"></use>
        </svg>
      </div>
      <div class="comment">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getMusicContentData } from '@/api/musicshow'
import { ref } from 'vue'
const props = defineProps({
  id: String
})
const id = props.id

//获取歌曲详细内容
const MusicContent = ref({
  picUrl: '', //歌曲图片
  title: '', //歌曲标题
  arname: [] //作者名字
  // tns: [] 别名
})

const getMusicContent = async () => {
  const res = await getMusicContentData(id)
  const a = res.data.songs[0]
  console.log(a)
  MusicContent.value.picUrl = a.al.picUrl
  MusicContent.value.arname = a.ar
  MusicContent.value.title = a.name
  if (a.tns) {
    MusicContent.value.tns = a.tns
    console.log(a.tns)
  }
}
getMusicContent()
</script>

<style lang="less" scoped>
.showContent {
  width: 100%;
  height: 100%;
  .showImg {
    width: 6rem;
    height: 6rem;
    margin: 1.3rem auto 0;
    background: url('@/assets/cd.png');
    background-size: cover;
    position: relative;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 2.5rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .showIcon {
      width: 1.6rem;
      height: 2.65rem;
      background: url('@/assets/needle-ab.png');
      background-size: cover;
      position: absolute;
      top: -1.4rem;
      left: 1rem;
      right: 0;
      margin: auto;
    }
  }
  .showText {
    width: 100%;
    height: 0.7rem;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.45rem;
    .name {
      height: 100%;
      width: 4.5rem;
      margin-right: 0.2rem;
      .title {
        font-size: 0.34rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .arname {
        font-weight: 400;
        color: #383838;
        font-size: 0.24rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .love {
      padding-top: 0.06rem;
      .icon {
        height: 0.55rem;
        width: 0.55rem;
      }
    }
    .comment {
      padding-top: 0.02rem;
      .icon {
        height: 0.6rem;
        width: 0.6rem;
      }
    }
  }
}
</style>

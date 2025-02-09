<template>
  <div class="box" :style="{ '--coverImgUrl': playlist.ImgUrl }">
    <div class="title">
      <div class="left">
        <img :src="playlist.ImgUrl" />
      </div>
      <div class="right">
        <div class="name">{{ playlist.name }}</div>
        <img src="" />
        <span>{{ playlist.nickname }}</span>
        <div>标签</div>
      </div>
    </div>
    <div class="descrip">{{ playlist.description }}</div>
  </div>
</template>

<script setup>
import { getPlaylistData } from '@/api/playlist'
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const id = props.id

//歌单详细数据
const playlist = ref({
  ImgUrl: '', //封面
  name: '', //标题
  description: '', //描述
  tags: [], //标签
  playCount: 0, //播放量
  avatarUrl: '', //作者头像
  nickname: '' //作者名字
  // commentCount:''//评论数量
})

//获取歌单详细
const getPlaylist = async (x) => {
  const res = await getPlaylistData(x)
  const a = res.data.playlist
  console.log(res.data)
  //赋值
  playlist.value.ImgUrl = a.coverImgUrl
  playlist.value.name = a.name
  playlist.value.description = a.description
  playlist.value.tags = a.tags
  playlist.value.playCount = a.playCount
  playlist.value.avatarUrl = a.creator.avatarUrl
  playlist.value.nickname = a.creator.nickname

  console.log(playlist.value)
}
getPlaylist(id)
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 3.3rem;
  .title {
    width: 100%;
    height: 2.9rem;
    padding: 0.2rem;
    display: flex;
    .left {
      width: 2.5rem;
      height: 2.5rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
      }
    }
    .right {
      width: 4.6rem;
      height: 2.5rem;
      padding: 0 0.2rem;
      color: black;
    }
  }
  .descrip {
    padding: 0 0.2rem;
  }
}
</style>

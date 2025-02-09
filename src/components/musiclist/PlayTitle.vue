<template>
  <div class="bigbox">
    <div
      id="cdm"
      :style="{
        background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)),  no-repeat center/100% url(${playlist.ImgUrl})`
      }"
    >
      <div class="title">
        <div class="left">
          <img :src="playlist.ImgUrl" />
        </div>
        <div class="right">
          <div class="name">{{ playlist.name }}</div>
          <div class="avatarurl"><img :src="playlist.avatarUrl" /></div>
          <div class="avatarname">{{ playlist.nickname }}</div>
          <div class="tags">
            <van-tag
              class="item"
              round
              color="rgb(151, 151, 151)"
              type="primary"
              v-for="item in playlist.tags"
              :key="item.index"
              >{{ item }}</van-tag
            >
          </div>
        </div>
      </div>
      <div class="descrip">{{ playlist.description }}</div>
    </div>
  </div>
</template>

<script setup>
import { getPlaylistData } from '@/api/playlist'
import { ref } from 'vue'
// import { computed } from 'vue'

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
.bigbox {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
  #cdm {
    width: 100%;
    height: 5.5rem;
    border-radius: 0 0 0.4rem 0.4rem;
    font-family: Microsoft Yahei;
    position: absolute;
    top: -1rem;
    .title {
      width: 100%;
      height: 2.9rem;
      padding: 1rem 0.2rem;
      display: flex;
      color: rgb(0, 0, 0);
      .left {
        width: 2.5rem;
        height: 2.5rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.3rem;
          border-style: ridge;
          border-color: white;
        }
      }
      .right {
        width: 4.6rem;
        height: 2.5rem;
        padding: 0 0.2rem;
        position: relative;
        .name {
          font-size: 0.4rem;
          font-weight: 700;
        }
        .avatarurl {
          width: 0.6rem;
          height: 0.6rem;
          position: absolute;
          top: 1.42rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.3rem;
          }
        }
        .avatarname {
          width: 3rem;
          font-size: 0.35rem;
          position: absolute;
          left: 0.9rem;
          top: 1.45rem;
          color: rgb(99, 99, 99);
        }
        .tags {
          padding: 1rem 1rem 0 0.05rem;
          color: rgb(99, 99, 99);
          font-size: 0.3rem;
          .item {
            margin-right: 0.1rem;
          }
        }
      }
    }
    .descrip {
      padding: 1rem 0.2rem;
      height: 2.3rem;
      font-size: 0.32rem;
      overflow: hidden;
      text-overflow: ellipsis;
      background-clip: text;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

<template>
  <div class="bigbox">
    <div
      id="cdm"
      :style="{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)),  no-repeat center/100% url(${playlist.ImgUrl})`
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
      <div class="descrip">
        介绍：{{ playlist.description ? playlist.description : '无' }}
      </div>
      <div class="button">
        <div class="comment">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          <span>{{ handleCount(playlist.commentCount) }}</span>
        </div>
        <div class="collect">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucangjia"></use>
          </svg>
          <span>{{ handleCount(playlist.collectCount) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPlaylistData } from '@/api/playlist'
import { ref } from 'vue'
import handleCount from '@/utils/count'

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
  nickname: '', //作者名字
  commentCount: '', //评论数量
  collectCount: '' //收藏数量
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
  playlist.value.commentCount = a.commentCount
  playlist.value.collectCount = a.subscribedCount
  console.log(playlist.value)
}
getPlaylist(id)
</script>

<style lang="less" scoped>
.bigbox {
  width: 100%;
  height: 100%;
  position: relative;
  #cdm {
    width: 100%;
    height: 5.4rem;
    font-family: Microsoft Yahei;
    position: absolute;
    top: -1rem;
    z-index: -1;
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
          height: 1.04rem;
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
          width: 100%;
          font-size: 0.35rem;
          position: absolute;
          left: 0.9rem;
          top: 1.45rem;
          color: black;
        }
        .tags {
          padding: 1rem 1rem 0 0.05rem;
          color: rgb(99, 99, 99);
          font-size: 0.3rem;
          .item {
            margin-right: 0.1rem;
            height: 0.4rem;
          }
        }
      }
    }
    .descrip {
      margin: 0.75rem 0.2rem 0 0.2rem;
      // height: 0.8rem;
      font-size: 0.32rem;
      overflow: hidden;
      text-overflow: ellipsis;
      background-clip: text;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 0.15rem;
      // margin-bottom: 0.1rem;
      div {
        height: 0.8rem;
        width: 2rem;
        border: 0.02rem solid;
        border-radius: 0.8rem;
        text-align: center;
        svg {
          display: inline-block;
          vertical-align: middle;
          height: 0.645rem;
          padding-bottom: 0.09rem;
          padding-right: 0.1rem;
        }
        span {
          line-height: 0.8rem;
        }
      }
    }
  }
}
</style>

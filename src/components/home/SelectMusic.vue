<template>
  <div class="SelectMusic">
    <div class="SelectTop">
      <div class="title">甄选歌单</div>
      <div class="more">更多</div>
    </div>
    <div class="SelectContent">
      <van-swipe
        :loop="false"
        :width="130"
        :show-indicators="false"
        class="music-swipe"
      >
        <van-swipe-item v-for="item in SelectMusicList" :key="item.id">
          <router-link :to="'/playlist/' + item.id">
            <img :src="item.picUrl" alt="" />
            <span class="subscripe">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-erji"></use>
              </svg>
              <span class="count">{{ handleCount(item.playCount) }}</span>
            </span>
            <span class="name">{{ item.name }}</span></router-link
          >
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
  <div class="SelectMusic moreheight">
    <div class="SelectTop">
      <div class="title">精品歌单</div>
      <div class="more">更多</div>
    </div>
    <div class="SelectContent">
      <van-swipe
        :loop="false"
        :width="130"
        :show-indicators="false"
        class="music-swipe"
      >
        <van-swipe-item v-for="item in NiceMusicList" :key="item.id">
          <router-link :to="'/playlist/' + item.id">
            <img :src="item.coverImgUrl" alt="" />
            <span class="subscripe">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-erji"></use>
              </svg>
              <span class="count">{{ handleCount(item.playCount) }}</span>
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { getNiceMusicData, getSelectMusicData } from '@/api/home'
import { ref } from 'vue'
import handleCount from '@/utils/count'

//获取甄选歌单数据
const SelectMusicList = ref([])
const getSelectMusic = async () => {
  const res = await getSelectMusicData(10)
  SelectMusicList.value = res.data.result
  // console.log(SelectMusicList.value)
}
getSelectMusic()

const NiceMusicList = ref([])
const getNiceMusic = async () => {
  const res = await getNiceMusicData(10)
  NiceMusicList.value = res.data.playlists
}
getNiceMusic()
</script>

<style lang="less" scoped>
.SelectMusic {
  width: 100%;
  height: 4rem;
  padding: 0 0.2rem;
  background: white;

  .SelectTop {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.35rem;
      font-weight: 900;
    }
    .more {
      width: 1.05rem;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 0.25rem;
      line-height: 0.5rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .SelectContent {
    width: 100%;
    height: 3.5rem;
    .music-swipe {
      position: relative;
      height: 100%;
      .van-swipe-item {
        padding-right: 10px;
        img {
          width: 100%;
          height: 2.4rem;
          border-radius: 0.2rem;
        }
        .subscripe {
          width: 1.5rem;
          height: 0.4rem;
          position: absolute;
          z-index: 100;
          left: 0.1rem;
          color: white;
          margin-top: 0.06rem;
          .icon {
            width: 0.3rem;
            height: 0.3rem;
          }
          .count {
            position: absolute;
            top: 0rem;
            left: 0.35rem;
            font-size: 0.23rem;
          }
        }
        .name {
          font-size: 0.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          background-clip: text;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
.moreheight {
  height: 4.9rem;
}
</style>

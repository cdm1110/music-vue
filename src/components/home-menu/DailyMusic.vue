<template>
  <div class="top">
    <div class="back" @click="goBack()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
    </div>
    <div class="text">
      <span>每日推荐</span>
    </div>
    <div class="search">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
  <!-- 每日推荐歌单 -->
  <div class="DailyMusic">
    <div class="DailyTop">
      <div class="title">推荐歌单</div>
    </div>
    <div class="DailyContent">
      <van-swipe
        :loop="false"
        :width="130"
        :show-indicators="false"
        class="music-swipe"
      >
        <van-swipe-item v-for="item in DailyList" :key="item.id">
          <router-link :to="'/playlist/' + item.id">
            <img :src="item.picUrl" alt="" />
            <span class="subscripe">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-erji"></use>
              </svg>
              <span class="count">{{ handleCount(item.playcount) }}</span>
            </span>
            <span class="name">{{ item.name }}</span></router-link
          >
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
  <div class="DailyTop">
    <div class="title">推荐歌曲</div>
  </div>
  <!-- 每日推荐歌曲 -->
  <div class="box">
    <div class="nav bgc">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang1-copy"></use>
      </svg>
      <span>播放全部 ({{ DailyMusic.length }})</span>
    </div>
    <div class="musiclist bgc">
      <div class="musicItem" v-for="(item, index) in DailyMusic" :key="index">
        <div class="ItemLeft" @click="ToMusic(item.id)">
          <span class="musicIndex">{{ index + 1 }}</span>
          <div class="musicContent">
            <div class="musicname">
              {{ item.name }} <span v-if="item.tns">({{ item.tns[0] }})</span>
            </div>
            <div class="musicar">
              <span class="reason" v-if="item.reason">{{ item.reason }}</span>
              <span v-for="(item1, index) in item.ar" :key="index">{{
                item1.name
              }}</span>
              <span>-{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="ItemRight">
          <!-- 需要注册点击事件 -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caidan1-copy"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import handleCount from '@/utils/count'

const goBack = () => {
  router.go(-1)
}
//获取每日推荐歌单
import { getDailyListData } from '@/api/home'
const DailyList = ref([])
const getDailyList = async () => {
  const res = await getDailyListData()
  DailyList.value = res.data.recommend
  //console.log(DailyList.value)
}
getDailyList()

//获取每日推荐歌曲
import { getDailyMusicData } from '@/api/home'
const DailyMusic = ref([])
const getDailyMusic = async () => {
  const res = await getDailyMusicData()
  DailyMusic.value = res.data.data.dailySongs
  //console.log(DailyMusic.value)
}
getDailyMusic()

//导入music仓库
import { useMusicStore } from '@/stores'
const MusicStore = useMusicStore()
const ToMusic = (data) => {
  //保证进入播放页时是磁盘界面
  MusicStore.setlyric_change(false)
  //路由传参
  router.push({
    path: '/music',
    name: 'music',
    query: {
      id: data,
      title: '每日推荐'
    }
  })
}
</script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: Microsoft Yahei;
  color: black;
  background-color: white;
  display: flex;
  justify-content: left;
  .back {
    height: 100%;
  }
  .text {
    height: 100%;
    width: 5rem;
    font-size: 0.34rem;
    margin-left: 0.2rem;
  }
  .search {
    height: 100%;
    position: absolute;
    right: 0.2rem;
    top: 0.21rem;
  }
}
.DailyTop {
  width: 100%;
  padding: 0 0.2rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
  .title {
    font-size: 0.34rem;
    font-weight: 600;
  }
}
.DailyMusic {
  width: 100%;
  height: 4rem;
  .DailyContent {
    width: 100%;
    height: 3.5rem;
    padding: 0 0.2rem;
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
.bgc {
  background: rgb(174, 174, 174);
  color: white;
}
.box {
  width: 100%;
  position: relative;
  // z-index: 3;
  .nav {
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 0rem;
    line-height: 1rem;
    padding: 0 0.2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    svg {
      display: inline-block;
      vertical-align: middle;
      height: 0.645rem;
      padding-bottom: 0.08rem;
      padding-right: 0.1rem;
      margin-left: 0.12rem;
    }
    span {
      margin-left: 0.3rem;
    }
  }
  .musiclist {
    width: 100%;
    position: absolute;
    top: 1rem;
    .musicItem {
      width: 100%;
      height: 1.1rem;
      padding: 0 0.2rem;
      display: flex;
      // border: 1px solid;
      .ItemLeft {
        height: 100%;
        width: 6.5rem;
        display: flex;
        align-items: center;
        .musicIndex {
          display: inline-block;
          width: 0.6rem;
          height: 100%;
          text-align: center;
          font-size: 0.35rem;
          line-height: 1.1rem;
          font-weight: 100;
        }
        .musicContent {
          margin-left: 0.3rem;
          width: 5.4rem;
          .musicname {
            height: 0.4rem;
            line-height: 0.4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .musicar {
            height: 0.4rem;
            //color: #383838;
            font-weight: 400;
            font-size: 0.24rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .reason {
              font-size: 0.18rem;
              font-weight: 600;
              padding: 0 0.06rem;
              color: rgba(227, 41, 41, 0.592);
              //background: #6e0000;
              border: 1px solid;
            }
            span {
              margin-right: 0.15rem;
            }
          }
        }
      }
      .ItemRight {
        height: 100%;
        width: 0.6rem;
        padding-top: 0.18rem;
      }
    }
  }
}
</style>

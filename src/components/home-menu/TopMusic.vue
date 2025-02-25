<template>
  <div class="TopMusic bgw">
    <div class="top">
      <div class="back" @click="goBack()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou1"></use>
        </svg>
      </div>
      <div class="text">
        <span>排行榜</span>
      </div>
      <div class="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
    <div class="TopTop" style="margin-top: 0.2rem">
      <div class="title">榜单推荐</div>
    </div>
    <div class="List1">
      <div class="List1-item" v-for="(item, index) in List1" :key="index">
        <router-link :to="'/playlist/' + item.id">
          <img :src="item.coverImgUrl" :alt="`推荐榜单封面${index}`" />
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang2"></use>
            </svg>
          </span>
        </router-link>
      </div>
    </div>
    <div class="TopTop">
      <div class="title">官方榜</div>
    </div>
    <div class="List2">
      <div class="List2-item" v-for="(item, index) in List2" :key="index">
        <router-link :to="'/playlist/' + item.id">
          <div class="item-top">
            <div class="item-title">{{ item.name }}</div>
            <div class="item-statu">{{ item.updateFrequency }}</div>
          </div>
          <div class="item-content">
            <img :src="item.coverImgUrl" :alt="`官方榜榜单封面${index + 1}`" />
            <div class="item-text">
              <div class="a" v-for="(i, index) in item.tracks" :key="index">
                <span style="font-weight: 600">{{ index + 1 }}</span>
                <span>{{ i.first }}</span
                >-
                <span style="color: #4a4a4a">{{ i.second }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="TopTop">
      <div class="title">其余榜单</div>
    </div>
    <div class="List3">
      <div v-for="(item, index) in List3" :key="index">
        <router-link :to="'/playlist/' + item.id">
          <img :src="item.coverImgUrl" :alt="`更多榜单封面${index + 1}`" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
const goBack = () => {
  router.go(-1)
}

import { ref } from 'vue'

//获取所有榜单
import { getTopListData } from '@/api/home'
const AllList = ref([])
const List1 = ref([]) //43、28、30
const List2 = ref([]) //0-4
const List3 = ref([]) //6-18
const getTopList = async () => {
  const res = await getTopListData()
  AllList.value = res.data.list
  //console.log(AllList.value)
  //获取榜单推荐的三个榜单
  List1.value = AllList.value.filter((x) => {
    if (
      x.name == '黑胶VIP热歌榜' ||
      x.name == '云音乐国风榜' ||
      x.name == '云音乐民谣榜'
    )
      return x
  })
  console.log(List1.value)
  //获取官方榜的榜单
  List2.value = AllList.value.filter((x) => x.ToplistType)
  //console.log(List2.value)
  //获取更多榜单
  List3.value = AllList.value.slice(5, 23) //最多5-59
  //console.log(List3.value)
}
getTopList()
</script>

<style lang="less" scoped>
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
.TopTop {
  width: 100%;
  padding: 0 0.25rem;
  height: 0.5rem;
  margin: 0.2rem 0;
  margin-top: 0.6rem;
  .title {
    font-size: 0.32rem;
    font-weight: 600;
  }
}

@List1_a: 2.15rem;
@List1_b: @List1_a - 1.9rem;
@List1_c: @List1_a + 0.25rem;
.List1 {
  width: 100%;
  height: @List1_a;
  padding: 0 0.25rem;
  display: flex;
  justify-content: space-between;
  .List1-item {
    width: @List1_a;
    height: @List1_a;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: @List1_b;
    }
    span {
      position: absolute;
      bottom: 0;
      right: 0.08rem;
    }
  }
}

.List2 {
  width: 100%;
  .List2-item {
    width: 7rem;
    height: 2.9rem;
    padding: 0.25rem;
    margin: 0.25rem;
    background-color: rgba(246, 246, 246, 0.988);
    border-radius: 0.25rem;
    .item-top {
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      .item-title {
        font-size: 0.38rem;
        letter-spacing: 0.07rem;
        font-weight: 600;
      }
      .item-statu {
        font-size: 0.22rem;
        color: #747474;
      }
    }
    .item-content {
      display: flex;
      padding-top: 0.3rem;
      justify-content: left;
      img {
        width: 1.55rem;
        height: 1.55rem;
        border-radius: 0.2rem;
      }
      .item-text {
        height: 1.55rem;
        padding-left: 10px;
        align-items: center;
        .a {
          height: 0.4rem;
          width: 4.6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0.15rem;
          span {
            letter-spacing: 0.006rem;
            padding: 0 3.5px;
            font-size: 14px;
          }
        }
      }
    }
  }
}

.List3 {
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  div {
    margin-left: 0.25rem;
    margin-bottom: 0.25rem;
    img {
      width: @List1_a;
      height: @List1_a;
      border-radius: @List1_b;
    }
  }
}
</style>

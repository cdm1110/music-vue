<template>
  <div class="" id="SwipeTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in SwipeTopList" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { getSwipeTopData } from '@/api/interfaces'
import { ref } from 'vue'

const SwipeTopList = ref([])

const getSwipeTop = async () => {
  const res = await getSwipeTopData()
  SwipeTopList.value = res.data.banners
  console.log(SwipeTopList.value)
}
getSwipeTop()
console.log(SwipeTopList.value)

// const images = [
//   'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
//   'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
// ]
</script>

<style lang="less">
#SwipeTop {
  .van-swipe {
    width: 100%;
    height: 4rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 4rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>

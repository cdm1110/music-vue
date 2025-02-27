<template>
  <div class="ShowBottom">
    <div class="footerContent">
      <input
        type="range"
        class="range"
        min="0"
        max="02:30"
        v-model="currentTime"
        step="0.05"
      />
    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-next-fill-copy"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-if="!isbtnShow"
        @click="changeIsbtnShow(true)"
      >
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-else
        @click="changeIsbtnShow(false)"
      >
        <use xlink:href="#icon-zanting1"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-next-fill"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
const PlayStore = usePlayStore()
const { changeIsbtnShow } = PlayStore
const { currentTime, isbtnShow } = storeToRefs(PlayStore)

const goPlay = (n) => {
  console.log(n)
}
</script>

<style lang="less" scoped>
.ShowBottom {
  width: 100%;
  height: 3.24rem;
  padding: 0 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .footerContent {
    width: 100%;
    height: 0.6rem;
    margin-bottom: 0.3rem;
    .range {
      width: 100%;
      height: 0.06rem;
    }
  }
  .footer {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>

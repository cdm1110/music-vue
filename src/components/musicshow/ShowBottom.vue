<template>
  <div class="ShowBottom">
    <div class="footerContent">
      <input
        type="range"
        class="range"
        min="0"
        max="02:30"
        v-model="PlayStore.currentTime"
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
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-else @click="play">
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
import { usePlayStore } from '@/stores/play'
const PlayStore = usePlayStore()
</script>

<style lang="less" scoped>
.ShowBottom {
  width: 100%;
  height: 3.44rem;
  padding: 0 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .footerContent {
    width: 100%;
    height: 0.9rem;
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

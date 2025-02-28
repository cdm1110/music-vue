<template>
  <div class="top">
    <div class="back" @click="goBack()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
    </div>
    <div class="text">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinle"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="search">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
  font-family: Microsoft Yahei;
  color: black;
  background-color: transparent;

  .back {
    height: 100%;
    position: absolute;
    left: 0.2rem;
  }
  .text {
    height: 100%;
    position: absolute;
    left: 0.9rem;
    line-height: 100%;
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      top: 0.065rem;
    }
    span {
      width: 5rem;
      font-size: 0.36rem;
      position: absolute;
      top: 0.12rem;
      left: 25px;
    }
  }
  .search {
    height: 100%;
    position: absolute;
    right: 0.2rem;
    top: 0.21rem;
  }
}
</style>

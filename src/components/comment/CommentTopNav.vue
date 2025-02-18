<template>
  <div class="top">
    <div class="back" @click="goBack()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
    </div>
    <div class="text">评论({{ total }})</div>
  </div>
</template>

<script setup>
import router from '@/router'

const goBack = () => {
  router.go(-1)
}

defineProps({
  total: Number
})
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
}
</style>

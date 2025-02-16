<template>
  <div class="top">
    <div class="back">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
    </div>
    <div class="text">
      <span>{{ title }}</span>
    </div>
    <div class="share">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang-copy"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.top {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  position: relative;
  background-color: transparent;
  font-family: Microsoft Yahei;
  color: black;
  .back {
    height: 100%;
    position: absolute;
    left: 0.2rem;
  }
  .text {
    height: 100%;
    width: 5.5rem;
    position: absolute;
    left: 1rem;
    line-height: 100%;
    margin: 0 0;
    span {
      height: 0.3rem;
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 0.24rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      position: absolute;
      top: 0.12rem;
    }
  }
  .share {
    height: 100%;
    position: absolute;
    right: 0.2rem;
    top: 0.21rem;
  }
}
</style>

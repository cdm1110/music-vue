<template>
  <div class="CommentTitle">
    <div class="titleImg">
      <img :src="Ob.img" />
    </div>
    <div class="titleText">
      <div class="title">{{ Ob.title }}</div>
      <div class="arname">{{ Ob.name }}</div>
    </div>
    <div class="titleButton">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youjiantou"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  Ob: Object
})
</script>

<style lang="less" scoped>
.CommentTitle {
  width: 100%;
  height: 2rem;
  padding: 0.2rem;
  display: flex;
  background: #ffffff;
  .titleImg {
    width: 1.6rem;
    height: 1.6rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.3rem;
    }
  }
  .titleText {
    width: 5rem;
    height: 100%;
    padding-left: 0.2rem;
    padding-top: 0.36rem;
    .title {
      font-size: 0.34rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .arname {
      color: #747474;
      margin-top: 0.12rem;
      font-size: 0.24rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .titleButton {
    width: 0.5rem;
    height: 100%;
    padding-top: 0.55rem;
  }
}
</style>

<template>
  <div class="MenuList">
    <div class="recommend iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-meirituijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="ranking iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
    <div class="playlist iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="privatefm iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianshiju"></use>
      </svg>
      <span>私人FM</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.MenuList {
  width: 100%;
  height: 1.8rem;
  padding: 0.2rem;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconitem {
    text-align: center;
    font-size: 0.25rem;
    width: 1.2rem;
    height: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    width: 0.9rem;
    height: 0.9rem;
  }
}
</style>

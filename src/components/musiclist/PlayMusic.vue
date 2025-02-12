<template>
  <div class="box">
    <div class="nav bgc">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang1-copy"></use>
      </svg>
      <span>播放全部 ({{ MusicList.length }})</span>
    </div>
    <div class="musiclist bgc">
      <div class="musicItem" v-for="(item, index) in MusicList" :key="index">
        <div class="ItemLeft">
          <span class="musicIndex">{{ index + 1 }}</span>
          <div class="musicContent">
            <div class="musicname">{{ item.name }}</div>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
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
import { getMusicListData } from '@/api/playlist'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const id = props.id
const MusicList = ref([])

const getMusicList = async () => {
  const res = await getMusicListData({ id, limit: 1000, offset: 0 })
  MusicList.value = res.data.songs
  // console.log(MusicList.value)
}
getMusicList()
</script>

<style lang="less" scoped>
.bgc {
  background: rgb(174, 174, 174);
  color: white;
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
  // z-index: 3;
  .nav {
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 4.2rem;
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
    top: 5.2rem;
    .musicItem {
      width: 100%;
      height: 0.9rem;
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
          line-height: 0.8rem;
          font-weight: 100;
        }
        .musicContent {
          margin-left: 0.3rem;
          width: 5.4rem;
          .musicname {
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
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

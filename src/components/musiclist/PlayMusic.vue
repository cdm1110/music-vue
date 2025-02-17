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
        <div class="ItemLeft" @click="ToMusic(item.id)">
          <span class="musicIndex">{{ index + 1 }}</span>
          <div class="musicContent">
            <div class="musicname">
              {{ item.name }} <span v-if="item.tns">({{ item.tns[0] }})</span>
            </div>
            <div class="musicar">
              <span v-for="(item1, index) in item.ar" :key="index">{{
                item1.name
              }}</span>
              <span>-{{ item.al.name }}</span>
            </div>
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
//导入music仓库
import { useMusicStore } from '@/stores'
const MusicStore = useMusicStore()

import { useRouter } from 'vue-router'
const props = defineProps({
  MusicList: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const router = useRouter()
const ToMusic = (data) => {
  //保证进入播放页时是磁盘界面
  MusicStore.setlyric_change(false)
  //路由传参
  router.push({
    path: '/music',
    name: 'music',
    query: {
      id: data,
      title: props.title
    }
  })
}
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
      height: 1.1rem;
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
          line-height: 1.1rem;
          font-weight: 100;
        }
        .musicContent {
          margin-left: 0.3rem;
          width: 5.4rem;
          .musicname {
            height: 0.4rem;
            line-height: 0.4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .musicar {
            height: 0.3rem;
            //color: #383838;
            font-weight: 400;
            font-size: 0.24rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span {
              margin-right: 0.15rem;
            }
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

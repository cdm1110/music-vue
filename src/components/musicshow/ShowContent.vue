<template>
  <ShowTopNav>{{ title }} </ShowTopNav>
  <div class="showContent">
    <div class="showImg" @click="MusicStore.updatelyric_change()">
      <img
        :src="MusicContent.picUrl"
        class="img"
        :class="{ img_ar_active: isbtnShow, img_ar_pauesd: !isbtnShow }"
      />
      <div class="showIcon">
        <img
          src="@/assets/needle-ab.png"
          alt=""
          class="img_needle"
          :class="{ img_needle_active: isbtnShow }"
        />
      </div>
    </div>
    <div class="showText">
      <div class="name">
        <div class="title">
          {{ MusicContent.title }}
          <span v-if="MusicContent.tns">({{ MusicContent.tns[0] }})</span>
        </div>
        <div class="arname">
          <span v-for="(item, i) in MusicContent.arname" :key="i">
            {{ item.name }}&nbsp;
          </span>
        </div>
      </div>
      <div class="love">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin"></use>
        </svg>
      </div>
      <div class="comment" @click="ToComment()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun-copy"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShowTopNav from '@/components/musicshow/ShowTopNav.vue'
import router from '@/router'

//导入music仓库
import { useMusicStore, usePlayStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const MusicStore = useMusicStore()
const PlayMusic = usePlayStore()
const { isbtnShow } = storeToRefs(PlayMusic)

const props = defineProps({
  title: String,
  MusicContent: Object
})

const a = props.MusicContent

//传给评论页的参数
const CommentObject = ref({
  id: '', //资源id
  total: 100, //资源评论数量
  type: 0, //资源类型，此为歌曲

  img: '', //资源图片
  title: '', //资源标题
  name: '' //资源作者名字
})

const ToComment = () => {
  CommentObject.value.id = a.id
  CommentObject.value.img = a.picUrl
  CommentObject.value.title = a.title
  CommentObject.value.name = a.arname[0].name
  console.log(CommentObject.value)
  router.push({
    path: '/comment',
    query: {
      Ob: JSON.stringify(CommentObject.value)
    }
  })
}
</script>

<style lang="less" scoped>
@needle-w: 2rem;
@needle-h: 3rem;

.showContent {
  width: 100%;
  height: 100%;
  .showImg {
    width: 6rem;
    height: 6rem;
    margin: 1.5rem auto 0;
    background: url('@/assets/cd.png');
    background-size: cover;
    position: relative;
    .img {
      width: 4rem;
      height: 4rem;
      border-radius: 2.5rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      animation: rotate_ar 10s linear infinite;
    }
    //播放封面旋转
    .img_ar_active {
      animation-play-state: running;
    }
    .img_ar_pauesd {
      animation-play-state: paused;
    }
    @keyframes rotate_ar {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
    // .img_needle_active {
    //   position: absolute;
    //   left: 46%;
    //   transform-origin: 0 0;
    //   transform: rotate(0deg);
    //   transition: all 2s;
    // }
    .showIcon {
      position: absolute;
      top: -1.55rem;
      left: 2.6rem;
      right: 0;
      margin: auto;
      //播放指针旋转
      .img_needle {
        width: @needle-w;
        height: @needle-h;
        position: absolute;
        // left: 46%;
        transform-origin: 0 0;
        transform: rotate(-30deg);
        transition: all 1s;
      }
      .img_needle_active {
        width: @needle-w;
        height: @needle-h;
        position: absolute;
        //left: 46%;
        transform-origin: 0 0;
        transform: rotate(-4deg);
        transition: all 1s;
      }
    }
  }
  .showText {
    width: 100%;
    height: 0.8rem;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.45rem;
    .name {
      height: 100%;
      width: 4.5rem;
      margin-right: 0.2rem;
      color: white;
      .title {
        font-size: 0.34rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .arname {
        font-weight: 400;
        // color: #383838;
        color: #e2e2e2;
        font-size: 0.24rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .love {
      padding-top: 0.06rem;
      margin-right: 40px;
      .icon {
        height: 0.6rem;
        width: 0.6rem;
      }
    }
    .comment {
      padding-top: 0.06rem;
      margin-right: 10px;
      .icon {
        height: 0.6rem;
        width: 0.6rem;
      }
    }
  }
}
</style>

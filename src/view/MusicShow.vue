<template>
  <!-- :style="{ background: `url(${MusicContent.picUrl})` }" -->
  <div class="MusicShow" :style="{ '--bg': bg }">
    <ShowContent
      v-if="!MusicStore.lyric_change"
      :MusicContent="MusicContent"
      :title="title"
    ></ShowContent>
    <ShowLyric v-else :id="id" :title="MusicContent.title"></ShowLyric>
    <ShowBottom></ShowBottom>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

//导入music仓库
import { useMusicStore } from '@/stores'
const MusicStore = useMusicStore()

//音乐播放页组件
import ShowContent from '@/components/musicshow/ShowContent.vue'
import ShowLyric from '@/components/musicshow/ShowLyric..vue'
import ShowBottom from '@/components/musicshow/ShowBottom.vue'

//获取歌曲id和所属歌单标题
const id = useRoute().query.id
const title = useRoute().query.title

//获取歌曲url和相关参数
import { getMusicShowData } from '@/api/musicshow'
const getMusicShow = async () => {
  const res = await getMusicShowData(id)
  console.log(res.data.data[0])
}
getMusicShow()

//获取歌曲详细内容
import { getMusicContentData } from '@/api/musicshow'

const MusicContent = ref({
  picUrl: '', //歌曲图片
  title: '', //歌曲标题
  arname: [] //作者名字
  // tns: [] 别名
})
const bg = ref('')
const getMusicContent = async () => {
  const res = await getMusicContentData(id)
  const a = res.data.songs[0]
  console.log(a)
  MusicContent.value.picUrl = a.al.picUrl
  MusicContent.value.arname = a.ar
  MusicContent.value.title = a.name
  if (a.tns) {
    MusicContent.value.tns = a.tns
    console.log(a.tns)
  }
  bg.value = `url(${MusicContent.value.picUrl})`
}
getMusicContent()
</script>

<style lang="less" scoped>
.MusicShow {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.MusicShow::before {
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  opacity: 0.1; /* 设置透明度 */
  filter: brightness(0.5) blur(80px); /* 添加模糊效果 */
  z-index: -1;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
}

//黑色遮罩层
// .MusicShow::after {
//   content: '';
//   position: absolute;
//   z-index: -2;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.1),
//     rgba(0, 0, 0, 0.1)
//   );
//   z-index: 0;
// }
</style>

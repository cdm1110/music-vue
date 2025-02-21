<script setup>
// 在vue3 compositionAPI中
// 1. 获取路由对象 router useRouter
//    const router = userRouter()
// 2. 获取路由参数 route useRoute()
//    const route = useRooute()
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lantinghei SC;
  letter-spacing: 0.5px;
}

.icon {
  width: 0.5rem;
  height: 0.5rem;
}

.router-link-active {
  text-decoration: none;
  color: orange;
}
a {
  text-decoration: none;
  color: black;
}
</style>

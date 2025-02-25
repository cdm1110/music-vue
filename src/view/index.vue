<template>
  <TopNav></TopNav>
  <SwipeTop></SwipeTop>
  <MenuList></MenuList>
  <SelectMusic></SelectMusic>
</template>

<script setup>
import TopNav from '@/components/home/TopNav.vue'
import SwipeTop from '@/components/home/SwipeTop.vue'
import MenuList from '@/components/home/MenuList.vue'
import SelectMusic from '@/components/home/SelectMusic.vue'

// import { getTopDetailData } from '@/api/home'
// const ClassList = ref([])
// const getClassList = async () => {
//   const res = await getTopDetailData()
//   ClassList.value = res.data.list
//   console.log(ClassList.value)
//   const TopList = ClassList.value.filter((x) => x.ToplistType)
//   console.log(TopList)
// }
// getClassList()
</script>

<style scoped></style>

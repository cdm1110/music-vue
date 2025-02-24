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

import { ref } from 'vue'

import { getTopListData } from '@/api/home'
const AllList = ref([])
const getTopList = async () => {
  const res = await getTopListData()
  AllList.value = res.data.list
  console.log(AllList.value)
  // const TopList = AllList.value.filter((x) => x.updateFrequency == '每周四更新')
  // console.log(TopList)
}
getTopList()

import { getClassListData } from '@/api/home'
const ClassList = ref([])
const getClassList = async () => {
  const res = await getClassListData()
  ClassList.value = res.data
  console.log(ClassList.value)
  // const TopList = AllList.value.filter((x) => x.updateFrequency == '每周四更新')
  // console.log(TopList)
}
getClassList()
</script>

<style scoped></style>

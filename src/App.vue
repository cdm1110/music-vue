<template>
  <router-view></router-view>
  <FooterMusic v-show="footerShow"></FooterMusic>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import FooterMusic from './components/footer-music/FooterMusic.vue'
import { usePlayStore } from './stores'
const PlayStore = usePlayStore()
const { footerShow } = storeToRefs(PlayStore)
</script>

<style>
.bgw {
  background: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lantinghei SC;
  letter-spacing: 0.01rem;
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

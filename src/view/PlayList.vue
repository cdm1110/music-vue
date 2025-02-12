<template>
  <PlayTopNav></PlayTopNav>
  <PlayTitle :id="id"></PlayTitle>
  <PlayMusic :id="id"></PlayMusic>
</template>

<script setup>
// import { ref } from 'vue'
import PlayTopNav from '@/components/musiclist/PlayTopNav.vue'
import PlayTitle from '@/components/musiclist/PlayTitle.vue'
import PlayMusic from '@/components/musiclist/PlayMusic.vue'
defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

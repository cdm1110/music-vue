<template>
  <PlayTopNav></PlayTopNav>
  <PlayTitle :id="id"></PlayTitle>
</template>

<script setup>
// import { ref } from 'vue'
import PlayTopNav from '@/components/musiclist/PlayTopNav.vue'
import PlayTitle from '@/components/musiclist/PlayTitle.vue'
defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

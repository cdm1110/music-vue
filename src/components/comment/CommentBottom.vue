<template>
  <van-tabbar>
    <div class="CommentBottom">
      <van-cell-group inset class="a">
        <div class="input">
          <van-field
            class="text"
            v-model="message"
            rows="1"
            readonly
            placeholder="随乐而起，有爱评论"
          />
        </div>
      </van-cell-group>
      <div class="button">发送</div>
    </div>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<style lang="less" scoped>
.van-tabbar {
  width: 7.5rem;
}
.CommentBottom {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: left;
  background: white;
  .a {
    width: 5.9rem;
    .input {
      width: 5.9rem;
      padding-top: 0.12rem;
      .text {
        height: 40px;
        align-items: center;
        background: #f1f1f1;
        border-radius: 0.4rem;
      }
    }
  }
  .button {
    width: 0.7rem;
    line-height: 1rem;
  }
}
</style>

<template>
  <div class="CommentText">
    <div class="textTop">
      <div class="left">评论区</div>
      <div class="right">
        <span :class="{ active: orderNum == 1 }" @click="Order(1)">推荐</span
        ><span class="c">|</span>
        <span :class="{ active: orderNum == 2 }" @click="Order(2)">最热</span
        ><span class="c">|</span>
        <span :class="{ active: orderNum == 3 }" @click="Order(3)">最新</span>
      </div>
    </div>
    <div class="text"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const orderNum = ref('1')
//排序方法
const Order = (i) => {
  orderNum.value = i
}
</script>

<style lang="less" scoped>
.active {
  color: rgb(7, 7, 7) !important;
  font-weight: 600;
}
.CommentText {
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  background-color: white;
  .textTop {
    height: 25px;
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      color: #000000;
    }
    .right {
      .c {
        opacity: 0.3; /* 设置透明度 */
        font-weight: 300;
      }
      span {
        padding: 0 0.08rem;
        color: #747474;
      }
    }
  }
}
</style>

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
    <div class="content" v-if="Ob.total">
      <div class="item" v-for="item in Comment.comments" :key="item.commentId">
        <div class="user">
          <div class="u_left">
            <img :src="item.user.avatarUrl" />
          </div>
          <div class="r_left">
            <div class="name">
              <div class="arname">{{ item.user.nickname }}</div>
              <div class="relate">
                <span>{{ item.timeStr }}</span>
                <span>{{ item.ipLocation.location }}</span>
              </div>
            </div>
            <div class="good">
              <span>{{ item.likedCount }}</span>
              <div class="dianzan">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fabulous-copy"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="text">{{ item.content }}</div>
        <div class="reply">
          {{ item.showFloorComment.replyCount }}条回复
          <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fabulous-copy"></use>
        </svg> -->
        </div>
      </div>
    </div>
    <van-empty
      v-else
      class="empty"
      image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
      image-size="80"
      description="还没有评论"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  Ob: Object
})
const Ob = props.Ob
import { ref } from 'vue'

const orderNum = ref('1')

//获取评论
import { getCommentData } from '@/api/comment'

const Comment = ref({})
const getComment = async (n) => {
  const res = await getCommentData(Ob.id, Ob.type, Ob.total, n)
  Comment.value = res.data.data
  console.log(Comment.value)
}
getComment(1)

//排序方法
const Order = (i) => {
  orderNum.value = i
  getComment(orderNum.value)
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
  .content {
    width: 100%;
    height: 30000px;
    .item {
      width: 100%;
      margin-top: 0.2rem;
      border-bottom: 0.02rem solid rgba(116, 116, 116, 0.2);
      .user {
        width: 100%;
        height: 0.72rem;
        display: flex;
        .u_left {
          width: 0.72rem;
          height: 0.72rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.36rem;
          }
        }
        .r_left {
          width: 6.38rem;
          display: flex;
          justify-content: space-between;
          padding-left: 0.1rem;
          .name {
            .arname {
              font-size: 0.28rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .relate {
              font-size: 0.22rem;
              color: #747474;
              span {
                padding-right: 0.04rem;
              }
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .good {
            width: 1.4rem;
            height: 100%;
            display: flex;
            justify-content: right;
            padding-right: 0.06rem;
            span {
              color: #747474;
              font-size: 13px;
              line-height: 0.72rem;
              padding-right: 0.08rem;
            }
            .dianzan {
              padding-top: 6px;
              svg {
                width: 0.4rem;
                height: 0.4rem;
              }
            }
          }
        }
      }
      .text {
        width: 310px;
        margin: 0.14rem 0;
        margin-left: 0.82rem;
      }
      .reply {
        height: 0.33rem;
        width: 100%;
        font-size: 0.24rem;
        font-weight: 200;
        color: rgb(0, 157, 255);
        margin-left: 0.82rem;
        padding-right: 0.04rem;
        margin-bottom: 0.15rem;
        letter-spacing: 0.016rem;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .empty {
    height: 9.74rem;
  }
}
</style>

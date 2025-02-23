import request from '@/utils/request'

//获取各种评论
// id
// type：0:歌曲  1:mv  2:歌单  3:专辑  4:电台  5:视频  6:动态
// pageSize：每页多少数据
// sortType: 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
export const getCommentData = (id, type, pageSize, sortType) =>
  request.get(
    `/comment/new?type=${type}&id=${id}&pageSize=${pageSize}&sortType=${sortType}`
  )

//楼层评论
// parentCommentId:
// id : 资源 id
// type: 0:歌曲  1:mv  2:歌单  3:专辑  4:电台  5:视频  6:动态
// limit: 取出评论数量
export const getFloorCommentData = (parentCommentId, id, type, limit) =>
  request.get(
    `/comment/floor?parentCommentId=${parentCommentId}&id=${id}&type=${type}&limit=${limit}`
  )

//给评论点赞 ( 需要登录 )
// id : 资源 id, 如歌曲 id,mv id
// cid : 评论 id
// t : 是否点赞 , 1 为点赞 ,0 为取消点赞
// type:0: 歌曲   1:mv   2:歌单   3:专辑   4:电台   5:视频   6:动态
// (动态点赞不需要传入 id 参数，需要传入动态的 threadId 参数代替id)
export const getCommentGoodData = (id, cid, t, type) =>
  request.post(`/comment/like?&id=${id}&cid=${cid}&t=${t}&type=${type}`)

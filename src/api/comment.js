import request from '@/utils/request'

//获取歌单评论
export const getPlayCommentData = (data) =>
  request.get(`/comment/playlist?id=${data}`)

//获得歌曲评论
export const getMusicCommentData = (data) =>
  request.get(`/comment/music?id=${data}`)

//获取各种评论
// id
// type：0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
// pageSize：每页多少数据
// sortType: 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
export const getCommentData = (id, type, pageSize, sortType) =>
  request.get(
    `/comment/new?type=${type}&id=${id}&pageSize=${pageSize}&sortType=${sortType}`
  )

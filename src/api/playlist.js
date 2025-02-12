import request from '@/utils/request'

//获取歌单详情
export const getPlaylistData = (data) =>
  request.get(`/playlist/detail?id=${data}`)

//获取歌曲详细
export const getMusicListData = (data) =>
  request.get(
    `/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  )

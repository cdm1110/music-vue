import request from '@/utils/request'

//获取歌单详情 id
export const getPlaylistData = (data) =>
  request.get(`/playlist/detail?id=${data}`)

//获取歌单歌曲列表 id
export const getMusicListData = (data) =>
  request.get(
    `/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  )

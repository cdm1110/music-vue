import request from '@/utils/request'

//获取歌单详情
export const getPlaylistData = (data) =>
  request.get(`/playlist/detail?id=${data}`)

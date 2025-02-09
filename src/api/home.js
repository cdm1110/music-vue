import request from '@/utils/request'

//获取顶部轮播图数据
export const getSwipeTopData = () => request.get('/banner?type=2')

//获取甄选歌单数据
export const getSelectMusicData = (data) =>
  request.get(`/personalized?limit=${data}`)

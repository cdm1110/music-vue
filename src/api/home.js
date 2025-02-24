import request from '@/utils/request'

//获取顶部轮播图数据
export const getSwipeTopData = () => request.get('/banner?type=2')

//获取甄选歌单数据
export const getSelectMusicData = (data) =>
  request.get(`/personalized?limit=${data}`)

//获得精品歌单数据
export const getNiceMusicData = (data) =>
  request.get(`/top/playlist/highquality?limit=${data}`)

//获得每日推荐歌曲数据
export const getDailyMusicData = () => request.get('/recommend/songs')

//获得每日推荐歌单数据
export const getDailyListData = () => request.get('/recommend/resource')

//获取所有榜单
export const getTopListData = () => request.get('/toplist')

//获得歌单分类数据
export const getClassListData = () => request.get('/playlist/catlist')

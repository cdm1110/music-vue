import request from '@/utils/request'

//获取顶部轮播图数据
export const getSwipeTopData = () => request.get('/banner?type=2')

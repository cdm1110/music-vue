import request from '@/utils/request'

//获取歌曲url
export const getMusicShowData = (data) => request.get(`/song/url?id=${data}`)

//获取歌曲详细
export const getMusicContentData = (data) =>
  request.get(`/song/detail?ids=${data}`)

//获取歌曲歌词
export const getMusicLyricData = (data) => request.get(`/lyric?id=${data}`)

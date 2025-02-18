import request from '@/utils/request'

//获取歌曲url id
export const getMusicShowData = (data) => request.get(`/song/url?id=${data}`)

//获取歌曲详细 id
export const getMusicContentData = (data) =>
  request.get(`/song/detail?ids=${data}`)

//获取歌曲歌词 id
export const getMusicLyricData = (data) => request.get(`/lyric?id=${data}`)

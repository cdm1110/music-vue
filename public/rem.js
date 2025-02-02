function remSize() {
  //获取设备宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth > 750) deviceWidth = 750
  if (deviceWidth < 320) deviceWidth = 320

  //750px-->1rem==100px
  //375px-->1rem==50px
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'

  //设置字体大小
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()
//窗口改变时调用函数，进行适配
window.onresize = function () {
  remSize()
}

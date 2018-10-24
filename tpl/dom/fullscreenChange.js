document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenElement) {
    console.log('进入全屏')
  } else {
    console.log('退出全屏')
  }
})

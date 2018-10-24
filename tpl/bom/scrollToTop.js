function scrollToTop() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  } else {
    window.cancelAnimationFrame(scrollToTop)
  }
}

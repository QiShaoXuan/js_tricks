function shuffle(arr) {
  let array = arr
  let index = array.length

  while (index) {
    index -= 1
    let randomInedx = Math.floor(Math.random() * index)
    let middleware = array[index]
    array[index] = array[randomInedx]
    array[randomInedx] = middleware
  }

  return array
}

function everyNth(arr, nth) {
  return arr.filter((v, i) => i % nth === nth - 1)
}

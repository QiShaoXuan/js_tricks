function dropRight(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}

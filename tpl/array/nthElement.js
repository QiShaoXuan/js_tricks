function nthElement(arr, n = 0) {
  return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
}

function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

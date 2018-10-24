function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}

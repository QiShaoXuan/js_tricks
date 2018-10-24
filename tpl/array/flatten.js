function flatten(arr, depth = -1) {
  if (depth === -1) {
    return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
  }
  if (depth === 1) {
    return arr.reduce((a, v) => a.concat(v), []);
  }
  return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
}

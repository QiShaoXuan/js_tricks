function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
  const date = new Date(timestamp * (isMs ? 1 : 1000))
  return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

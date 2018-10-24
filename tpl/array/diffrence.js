function diffrence(arrA, arrB) {
  return arrA.filter(v => !arrB.includes(v))
}

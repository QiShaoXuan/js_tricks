function getStyle(el, ruleName) {
  return getComputedStyle(el, null).getPropertyValue(ruleName)
}

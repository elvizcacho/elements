export function isIE11(userAgent = '') {
  return userAgent.length ? !!userAgent.match(/Trident\//) : false
}

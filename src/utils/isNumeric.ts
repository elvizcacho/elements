const isNumeric = (n: any): n is number | string =>
  !isNaN(parseFloat(n)) && isFinite(n)

export default isNumeric

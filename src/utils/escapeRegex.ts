const escapeRegex = (input: string) =>
  input.replace(/[-|\\{}()[\]^$+*?.]/g, '\\$&')

export default escapeRegex

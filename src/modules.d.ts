declare module 'kewler'
/*
declare module 'kewler' {
  export type lightness = (string) => string
  export type color = (string) => color
}
*/
declare module 'enzyme-adapter-react-16'
declare module 'jest-fetch-mock'
declare module 'jest-glamor-react'
declare module '@allthings/colors'
declare module 'neue'

interface Window {
  Image: typeof Image
}

interface IDropdownItem {
  label: string
  value: string
}

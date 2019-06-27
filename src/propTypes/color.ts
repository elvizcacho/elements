import { ColorPalette } from '@allthings/colors'

export type color = string // @Todo: Replace with real types, soon.
export type textColor = string // @Todo: Replace with real types, soon.

export const colorCode = (color: string) =>
  ColorPalette[color] || ColorPalette.text[color] || color

export const textColorCode = (color: string) =>
  ColorPalette.text[color] || ColorPalette[color] || color

export const backgroundColorCode = (color: string) =>
  ColorPalette.background[color] || ColorPalette[color] || color

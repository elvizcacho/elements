import { css } from 'glamor'
import neue from 'neue'
import React from 'react'
import { useTheme } from '../Theme'
import View, { IViewProps } from '../View'

if (typeof window !== `undefined`) {
  neue.load([
    {
      families: ['Open Sans:n3,n3i,n4,n4i,n6,n6i,n7,n7i'],
      css:
        '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i',
    },
  ])
}

const availableSizes = {
  xs: 10,
  s: 12,
  m: 13,
  l: 14,
  xl: 18,
  xxl: 18,
  giant: 24,
}

export type TextSizeType = number | keyof typeof availableSizes

const textWeightMap = {
  light: 300,
  regular: 400,
  'semi-bold': 600,
  bold: 700,
}

export type TextWeightType = keyof typeof textWeightMap

interface ITextStyles {
  size?: TextSizeType
  block?: boolean
  italic?: boolean
  /**
   * @deprecated
   */
  strong?: boolean
  underline?: boolean
  lineThrough?: boolean
  weight?: TextWeightType
  align?: 'left' | 'center' | 'right'
  autoBreak?: boolean
}

export const createTextStyles = ({
  block = false,
  italic = false,
  strong = false,
  size = 'l',
  weight,
  underline = false,
  lineThrough = false,
  align,
  autoBreak,
}: ITextStyles = {}) =>
  css({
    display: block ? 'block' : 'inline',
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    fontStyle: italic && 'italic',
    fontWeight: weight ? textWeightMap[weight] : strong ? 600 : 400,
    fontSize: typeof size === 'number' ? size : availableSizes[size],
    textDecoration:
      (underline && 'underline') || (lineThrough && 'line-through'),
    textAlign: align,
    whiteSpace: autoBreak && 'pre-wrap',
    wordBreak: autoBreak && 'break-word',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  })

export interface IText {
  readonly color?: string
}

export type ITextProps = IText & ITextStyles & IViewProps

let hasWarnedBefore = false

/**
 * Text will be used for everywhere a text appears.
 * The only exception is in molecules that already provide the
 * text component for you.
 *
 * ```example
 * <Text>
 *   Text will be used for everywhere a text appears. The only exception
 *   is in molecules that already provide the text component for you.
 * </Text>
 * ```
 *
 * ```example
 * <Text autoBreak={true}>
 *   Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.
 *  </Text>
 *  ```
 */
const Text = ({
  color = 'text',
  block = true,
  children,
  italic,
  size = 'l',
  strong,
  align,
  underline,
  autoBreak,
  lineThrough,
  weight,
  ...props
}: ITextProps) => {
  const { colorize } = useTheme()

  if (strong === true && process.env.NODE_ENV !== 'production') {
    !hasWarnedBefore &&
      console.warn(
        "The property `strong` is deprecated. Please use `weight` instead. (`strong` now corresponds to weight: 'semi-bold')",
      )
    hasWarnedBefore = true
  }

  return (
    <View
      {...css(
        createTextStyles({
          block,
          italic,
          strong,
          size,
          underline,
          lineThrough,
          align,
          autoBreak,
          weight,
        }),
        { color: colorize(color) },
      )}
      {...props}
    >
      {children}
    </View>
  )
}

export default Text

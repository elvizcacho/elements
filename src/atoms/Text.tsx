import React from 'react'
import { css } from 'glamor'
import View, { IView } from '../atoms/View'
import Theme, { IThemeChildren } from '../behaviour/Theme'
import neue from 'neue'

if (typeof window !== `undefined`) {
  neue.load([
    {
      families: ['Open Sans:n4,n4i,n6,n6i'],
      css: '//fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i',
    },
  ])
}

type sizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'giant'

const availableSizes = {
  xs: 10,
  s: 12,
  m: 13,
  l: 14,
  xl: 18,
  xxl: 18,
  giant: 24,
}

interface ITextStyles {
  size: sizeType
  block?: boolean
  italic?: boolean
  strong?: boolean
  underline?: boolean
  lineThrough?: boolean
  align?: 'left' | 'center' | 'right'
  autoBreak?: boolean
}

export const createTextStyles = ({
  block = false,
  italic = false,
  strong = false,
  size = 'm',
  underline = false,
  lineThrough = false,
  align,
  autoBreak,
}: ITextStyles) => {
  return css({
    display: block ? 'block' : 'inline',
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    fontStyle: italic && 'italic',
    fontWeight: strong && '600',
    fontSize: availableSizes[size],
    textDecoration:
      (underline && 'underline') || (lineThrough && 'line-through'),
    textAlign: align,
    whiteSpace: autoBreak && 'pre-wrap',
    wordBreak: autoBreak && 'break-word',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  })
}

export interface IText {
  color: string
}

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
  ...props
}: IText & ITextStyles & IView) => (
  <Theme>
    {({ colorize }: IThemeChildren) => (
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
          }),
          { color: colorize(color) }
        )}
        {...props}
      >
        {children}
      </View>
    )}
  </Theme>
)

export default Text

import React, { PropsWithChildren } from 'react'
import View, { IViewProps } from '../View'
import { css } from 'glamor'
import { color as col, lightness } from 'kewler'
import Theme from '../Theme'
import { color } from '../utils/propTypes/color'

const style = (backgroundColor: string) =>
  css({
    backgroundColor,
    border: 'none',
    transition: '250ms ease-in-out',
    ':focus': {
      outline: 'none',
    },
    ':hover': {
      cursor: 'pointer',
      background:
        backgroundColor.indexOf('#') !== -1
          ? col(backgroundColor, lightness(-10))
          : backgroundColor,
    },
  })

interface ICardButtonProps extends IViewProps {
  backgroundColor?: color
  autoFocus?: boolean
}

/**
 * CardButton can to enable users to do actions directly related to content on
 * on cards. It should always go into a [CardFooter](CardFooter.md).
 */
export default function CardButton({
  backgroundColor = '#ffffff',
  ...props
}: PropsWithChildren<ICardButtonProps>) {
  return (
    <Theme>
      {({ colorize }) => (
        <View
          alignH="center"
          flex="flex"
          alignV="center"
          direction="row"
          htmlElement="button"
          {...style(colorize(backgroundColor))}
          {...props}
        />
      )}
    </Theme>
  )
}

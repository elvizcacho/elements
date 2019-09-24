import { css } from 'glamor'
import { color as col, lightness } from 'kewler'
import React, { HTMLAttributes } from 'react'
import Absolute from '../Absolute'
import ListSpinner from '../ListSpinner'
import Theme from '../Theme'
import View from '../View'

const buttonStyle = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: 'transparent',
  border: 0,
  ':active': {
    background: 'rgba(0, 0, 0, 0.15)',
  },
  ':disabled': {
    background: 'rgba(0, 0, 0, 0.15)',
  },
})

interface IFloatingButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: string
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  /* True to use the button that something is in progress */
  inProgress?: boolean
  disabledColor?: string
}

const FloatingButton = ({
  color = 'primary',
  disabled,
  disabledColor = 'lightGrey',
  inProgress = false,
  children,
  ...props
}: IFloatingButtonProps) => {
  const isDisabled = disabled || inProgress

  return (
    <Theme>
      {({ colorize }) => (
        <View>
          <View style={{ height: 50 }} />
          <Absolute
            alignH="center"
            alignV="center"
            bottom={0}
            direction="row"
            flex="flex"
            {...css({
              // we only like to change the color if the button is disabled by using the prop
              backgroundColor: colorize(disabled ? disabledColor : color),
              boxShadow: '0px -2px 10px 0px rgba(0, 0, 0, 0.2)',
              cursor: isDisabled ? 'default' : 'pointer',
              height: 50,
              overflow: 'hidden',
              transition: '250ms ease-in-out',
              width: '100%',
              ':hover': {
                background: colorize(
                  disabled
                    ? disabledColor
                    : color.indexOf('#') !== -1
                    ? col(color, lightness(-10))
                    : color,
                ),
              },
            })}
          >
            <button {...buttonStyle} {...props} disabled={isDisabled}>
              {inProgress ? <ListSpinner radius={30} /> : children}
            </button>
          </Absolute>
        </View>
      )}
    </Theme>
  )
}

export default FloatingButton

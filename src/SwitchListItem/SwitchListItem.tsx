import { css } from 'glamor'
import React, { PropsWithChildren, useContext } from 'react'
import Text from '../Text'
import { ThemeContext } from '../ThemeProvider'
import View from '../View'

interface ISwitchListItem {
  readonly optionKey: string
  readonly value: string
  readonly isActive: boolean
  readonly onClick: (optionKey: string) => void
}

const SwitchListItem = ({
  optionKey,
  value,
  isActive,
  onClick,
  children,
  ...props
}: PropsWithChildren<ISwitchListItem>) => {
  const theme = useContext(ThemeContext)
  const activeStyle = isActive && {
    backgroundColor: theme.primary,
  }
  return (
    <View
      onClick={() => onClick(optionKey)}
      data-e2e={`settings-switch-locale-${optionKey}`}
      {...css(activeStyle, { ':hover': { cursor: 'pointer' } })}
      {...props}
    >
      <Text
        size="m"
        color={isActive ? 'textOnBackground' : 'gray'}
        {...css({
          padding: 10,
          textAlign: 'center',
        })}
      >
        {value}
      </Text>
      {children}
    </View>
  )
}

export default SwitchListItem

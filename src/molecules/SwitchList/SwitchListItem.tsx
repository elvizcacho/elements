import React, { FunctionComponent, useContext } from 'react'
import View from '../../atoms/View'
import { css } from 'glamor'
import Text from '../../atoms/Text'
import { ThemeContext } from '../../behaviour/ThemeProvider'

interface ISwitchListItem {
  optionKey: string
  value: string
  isActive: boolean
  onClick: (optionKey: string) => void
}

const SwitchListItem: FunctionComponent<ISwitchListItem> = ({
  optionKey,
  value,
  isActive,
  onClick,
  children,
  ...props
}) => {
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

import React from 'react'
import PropTypes from 'prop-types'
import View from '../../atoms/View'
import { css } from 'glamor'
import Text from '../../atoms/Text'
import { withTheme } from '../../behaviour/ThemeProvider'

class SwitchListItem extends React.Component {
  static propTypes = {
    optionKey: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    theme: PropTypes.object.isRequired,
  }

  handleClick = () => this.props.onClick(this.props.optionKey)

  render() {
    const {
      optionKey,
      value,
      isActive,
      onClick,
      children,
      theme,
      ...props
    } = this.props
    const activeStyle = isActive && {
      backgroundColor: theme.primary,
    }
    return (
      <View
        onClick={this.handleClick}
        data-e2e={`settings-switch-locale-${this.props.optionKey}`}
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
}

export default withTheme()(SwitchListItem)

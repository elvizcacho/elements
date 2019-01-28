import React from 'react'
import Absolute from '../atoms/Absolute'
import { withTheme } from '../behaviour/ThemeProvider'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { color as col, lightness } from 'kewler'
import View from '../atoms/View'
import ListSpinner from './List/ListSpinner'

const buttonStyle = css({
  width: '100%',
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  height: '100%',
  background: 'transparent',
  border: 0,
  transition: '250ms ease-in-out',
  ':active': {
    background: 'rgba(0, 0, 0, 0.15)',
  },
  ':disabled': {
    background: 'rgba(0, 0, 0, 0.15)',
  },
})

class FloatingButton extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    /* True to use the button that something is in progress */
    inProgress: PropTypes.bool,
    children: PropTypes.node,
    disabledColor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    inProgress: false,
  }

  render() {
    const {
      color,
      disabled,
      disabledColor,
      inProgress,
      children,
      ...props
    } = this.props
    const isDisabled = disabled || inProgress

    return (
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
            backgroundColor: disabled ? disabledColor : color,
            boxShadow: '0px -2px 10px 0px rgba(0, 0, 0, 0.2)',
            cursor: isDisabled ? 'default' : 'pointer',
            height: 50,
            overflow: 'hidden',
            width: '100%',
            ':hover': {
              background: disabled ? disabledColor : col(color, lightness(-10)),
            },
          })}
        >
          <button {...buttonStyle} {...props} disabled={isDisabled}>
            {inProgress ? <ListSpinner size="s" radius="30" /> : children}
          </button>
        </Absolute>
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  color: theme.primary,
  disabledColor: 'lightGray',
})

export default withTheme(mapThemeToProps)(FloatingButton)

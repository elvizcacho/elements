import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { createTextStyles } from '../atoms/Text'
import { withTheme } from '../behaviour/ThemeProvider'
import { color, colorCode } from '../propTypes/color'
import { color as col, lightness } from 'kewler'

const baseStyle = {
  position: 'relative',
  padding: '10px 16px',
  borderRadius: '2px',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
}

const primary = ({
  color,
  disabled,
  disabledColor,
  disabledBackgroundColor,
  backgroundColor,
}) => ({
  color: color,
  background: disabled ? disabledBackgroundColor : backgroundColor,
})

const secondary = ({ disabled, disabledColor, backgroundColor }) => ({
  background: 'transparent',
  color: disabled ? disabledColor : backgroundColor,
  margin: 2,
})

function styles(
  backgroundColor,
  color,
  disabled,
  disabledColor,
  disabledBackgroundColor,
  isSecondary
) {
  const props = {
    color,
    disabled,
    disabledBackgroundColor,
    disabledColor,
    backgroundColor,
  }
  return css({
    ...baseStyle,
    ...(isSecondary ? secondary(props) : primary(props)),
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: '250ms ease-in-out',
    ':focus': {
      outline: 'none',
    },
    ':hover': isSecondary
      ? !disabled && { color: col(backgroundColor, lightness(-20)) }
      : {
          color: color,
          background: disabled
            ? disabledBackgroundColor
            : backgroundColor.indexOf('#') !== -1
            ? col(backgroundColor, lightness(-10))
            : backgroundColor,
        },
  })
}

/**
 * Buttons make common actions immediately visible and easy to perform with one
 * click or tap. They can be used for any type of action, including navigation.
 *
 * You can use two different looks for the button: primary and
 * secondary. Primary is the default type, so there's no need to explicitly
 * define it.
 *
 * ```example
 * <ThemeProvider>
 *   <Button>Hello you</Button>
 * </ThemeProvider>
 * ```
 *
 * To have an icon as button-label, just add the icon-component as children.
 *
 * ```example
 * <Button type="submit">
 *    <View direction="row">
 *      Hello with icon
 *      <View style={{ marginLeft: 10 }}>
 *        <Icon name="send-filled" size="xs" color="white" />
 *      </View>
 *    </View>
 *  </Button>
 * ```
 */
class Button extends React.Component {
  static propTypes = {
    /** Just text most of the time */
    children: PropTypes.node.isRequired,
    /** Called when the button is clicked */
    onClick: PropTypes.func,
    /** If the button is used for a secondary option */
    secondary: PropTypes.bool,
    /** Type of the button (deprecated) */
    type: PropTypes.oneOf(['reset', 'button', 'submit']),
    /** Disable button state to indicate it's not touchable */
    disabled: PropTypes.bool,
    /** Color of the button, theme primary color by default */
    backgroundColor: PropTypes.string,
    /** Textcolor of the button (deprecated) */
    color: color,
    /** Textcolor when button is disabled (deprecated) */
    disabledColor: PropTypes.string,
    /** Color when button is disabled (deprecated) */
    disabledBackgroundColor: PropTypes.string,
    /** Pass your own css (deprecated) */
    css: PropTypes.object,
  }

  handleClick = e => {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e)
    } else {
      e.preventDefault()
    }
  }

  render() {
    const {
      children,
      type,
      disabled,
      backgroundColor,
      color,
      disabledColor,
      secondary,
      disabledBackgroundColor,
      css: cssProp,
      ...restProps
    } = this.props

    const allStyles = css(
      styles(
        colorCode(backgroundColor),
        color,
        disabled,
        disabledColor,
        disabledBackgroundColor,
        secondary
      ),
      cssProp
    )

    return (
      <button
        type={type}
        {...allStyles}
        {...restProps}
        {...createTextStyles({ size: 'l' })}
        name={restProps.name || type || null}
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  secondary: false,
  color: 'white',
  backgroundColor: 'purple',
  disabledColor: 'darkgray',
  disabledBackgroundColor: 'lightGray',
}

const mapThemeToProps = (theme, props) => ({
  backgroundColor: props.backgroundColor || theme.primary,
})

export default withTheme(mapThemeToProps)(Button)

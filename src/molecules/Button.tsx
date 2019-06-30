import React, { Component, SyntheticEvent } from 'react'
import { css } from 'glamor'
import { createTextStyles } from '../atoms/Text'
import { color } from '../propTypes/color'
import { color as col, lightness } from 'kewler'
import Theme from '../behaviour/Theme'
import { HTMLAttributes } from 'enzyme'

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
  disabledBackgroundColor,
  backgroundColor,
}: {
  color: color
  disabled: boolean
  disabledBackgroundColor: color
  backgroundColor: color
}) => ({
  color,
  background: disabled ? disabledBackgroundColor : backgroundColor,
})

const secondary = ({
  disabled,
  disabledColor,
  backgroundColor,
}: {
  disabled: boolean
  disabledColor: color
  backgroundColor: color
}) => ({
  background: 'transparent',
  color: disabled ? disabledColor : backgroundColor,
  margin: 2,
})

function styles(
  backgroundColor: string,
  color: string,
  isDisabled: boolean,
  isSecondary: boolean
) {
  const props = {
    color,
    disabled: isDisabled,
    disabledBackgroundColor: 'lightGrey',
    disabledColor: 'darkgray',
    backgroundColor,
  }
  return css({
    ...baseStyle,
    ...(isSecondary ? secondary(props) : primary(props)),
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: '250ms ease-in-out',
    ':focus': {
      outline: 'none',
    },
    ':hover': isSecondary
      ? !isDisabled && { color: col(backgroundColor, lightness(-20)) }
      : {
          color,
          background: isDisabled
            ? props.disabledBackgroundColor
            : backgroundColor.indexOf('#') !== -1
            ? col(backgroundColor, lightness(-10))
            : backgroundColor,
        },
  })
}

interface IButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    Partial<IComponentProps> {
  /** If the button is used for a secondary option */
  secondary?: boolean
  /** Type of the button (deprecated) */
  type?: 'reset' | 'button' | 'submit'
  color?: color
  disabled?: boolean
  /** Color of the button, theme primary color by default */
  backgroundColor?: string
  /** Name of the */
  name?: string
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
class Button extends Component<IButtonProps> {
  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e)
    } else {
      e.preventDefault()
    }
  }

  render() {
    const {
      children,
      type = 'button',
      disabled = false,
      backgroundColor,
      color = 'white',
      secondary = false,
      name,
      ...restProps
    } = this.props

    return (
      <Theme>
        {({ theme: { primary }, colorize }) => (
          <button
            type={type}
            {...css(
              styles(
                colorize(backgroundColor || primary),
                colorize(color),
                disabled,
                secondary
              )
            )}
            {...restProps}
            {...createTextStyles({ size: 'l' })}
            name={name || type}
            onClick={this.handleClick}
          >
            {children}
          </button>
        )}
      </Theme>
    )
  }
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'
import { ColorPalette } from '@allthings/colors'

export const defaultTheme = {
  primary: ColorPalette.primary.blue,
  text: ColorPalette.text.primary,
  secondaryText: ColorPalette.text.secondary,
  titleColor: ColorPalette.text.primary,
  contrast: ColorPalette.white,
  warn: ColorPalette.red,
  disabled: ColorPalette.grey,
  background: ColorPalette.background.bright,
  textOnBackground: ColorPalette.white,
}

const ThemeContext = React.createContext(defaultTheme)
export const ThemeConsumer = ThemeContext.Consumer

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
 **/
const ThemeProvider = ({ children, theme }) => (
  <ThemeConsumer>
    {contextTheme => (
      <ThemeContext.Provider value={{ ...contextTheme, ...theme }}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeConsumer>
)

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    text: PropTypes.string,
    secondaryText: PropTypes.string,
    titleColor: PropTypes.string,
    contrast: PropTypes.string,
    warn: PropTypes.string,
    disabled: PropTypes.string,
    background: PropTypes.string,
    textOnBackground: PropTypes.string,
  }),
  children: PropTypes.node,
}

export default ThemeProvider

export const withTheme = (mapThemeToProps, displayName) => WrappedComponent =>
  // eslint-disable-next-line react/no-multi-comp
  class extends React.PureComponent {
    static displayName = displayName || WrappedComponent.displayName
    static component = WrappedComponent

    renderComponent = theme => {
      const props = !mapThemeToProps
        ? { theme }
        : mapThemeToProps(theme, this.props)

      return <WrappedComponent {...this.props} {...props} />
    }

    render() {
      return <ThemeConsumer>{this.renderComponent}</ThemeConsumer>
    }
  }

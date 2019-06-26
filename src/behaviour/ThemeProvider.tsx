import React, { FunctionComponent } from 'react'
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

export interface ITheme {
  primary: string
  text: string
  secondaryText: string
  titleColor: string
  contrast: string
  warn: string
  disabled: string
  background: string
  textOnBackground: string
  [key: string]: string
}

const ThemeContext = React.createContext(defaultTheme)
export const ThemeConsumer = ThemeContext.Consumer

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
 **/
const ThemeProvider: FunctionComponent<{ theme: ITheme }> = ({
  children,
  theme,
}) => (
  <ThemeConsumer>
    {(contextTheme: ITheme) => (
      <ThemeContext.Provider value={{ ...contextTheme, ...theme }}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeConsumer>
)

export default ThemeProvider

export function withTheme(
  mapThemeToProps: (theme: ITheme, props: any) => any,
  displayName: string
) {
  return (WrappedComponent: any) =>
    // eslint-disable-next-line react/no-multi-comp
    class extends React.Component {
      static displayName = displayName || WrappedComponent.displayName
      static component = WrappedComponent

      renderComponent = (theme: ITheme) => {
        const props = !mapThemeToProps
          ? { theme }
          : mapThemeToProps(theme, this.props)

        return <WrappedComponent {...this.props} {...props} />
      }

      render() {
        return <ThemeConsumer>{this.renderComponent}</ThemeConsumer>
      }
    }
}

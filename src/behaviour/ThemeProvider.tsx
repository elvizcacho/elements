import React, { FunctionComponent, createContext } from 'react'
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

const ThemeContext = createContext<ITheme>(defaultTheme)
export const ThemeConsumer = ThemeContext.Consumer

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
 **/
const ThemeProvider: FunctionComponent<{ theme?: Partial<ITheme> }> = ({
  children,
  theme = {},
}) => (
  <ThemeConsumer>
    {contextTheme => (
      <ThemeContext.Provider value={{ ...contextTheme, ...(theme as ITheme) }}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeConsumer>
)

export default ThemeProvider

type mapThemeToPropsType = (theme: ITheme, props: any) => any

function createThemeConsumer<T>(
  mapThemeToProps: mapThemeToPropsType,
  WrappedComponent: React.ComponentType<T>,
  props: Omit<T, 'theme'>
) {
  return (theme: ITheme) => {
    const extraProps = !mapThemeToProps
      ? { theme }
      : mapThemeToProps(theme, props)

    return <WrappedComponent {...props} {...extraProps} />
  }
}

export function withTheme(mapThemeToProps: mapThemeToPropsType) {
  return function<T extends { theme: ITheme }>(
    WrappedComponent: React.ComponentType<T>
  ): React.ComponentType<Omit<T, 'theme'>> {
    return function(props: Omit<T, 'theme'>) {
      return (
        <ThemeConsumer>
          {createThemeConsumer<T>(mapThemeToProps, WrappedComponent, props)}
        </ThemeConsumer>
      )
    }
  }
}

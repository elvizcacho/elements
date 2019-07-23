import React, { FunctionComponent, createContext } from 'react'
import { ColorPalette } from '@allthings/colors'

export const defaultTheme: ITheme = {
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
  readonly primary: string
  readonly text: string
  readonly secondaryText: string
  readonly titleColor: string
  readonly contrast: string
  readonly warn: string
  readonly disabled: string
  readonly background: string
  readonly textOnBackground: string
  readonly [key: string]: string
}

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
 **/
const ThemeProvider: FunctionComponent<{ theme?: Partial<ITheme> }> = ({
  children,
  theme = defaultTheme,
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
export const ThemeContext = createContext<ITheme>(defaultTheme)
export const ThemeConsumer = ThemeContext.Consumer

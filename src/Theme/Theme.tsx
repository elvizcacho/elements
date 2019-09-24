import React, { ReactNode, useContext } from 'react'
import {
  defaultTheme,
  ITheme,
  ThemeConsumer,
  ThemeContext,
} from '../ThemeProvider'

type Colorizor = (color: string) => string

export const createColorizor = (theme: ITheme): Colorizor => (color: string) =>
  theme[color] || defaultTheme[color] || color

type ThemeChildrenType = ({
  theme,
  colorize,
}: {
  theme: ITheme
  colorize: (color: string) => string
}) => ReactNode

interface IThemeProps {
  readonly children: ThemeChildrenType
}

export const useTheme = () => {
  const theme = useContext(ThemeContext)

  return {
    theme,
    colorize: createColorizor(theme),
  }
}

const Theme = ({ children }: IThemeProps) => (
  <ThemeConsumer>
    {theme =>
      children({
        theme,
        colorize: createColorizor(theme),
      })
    }
  </ThemeConsumer>
)

export default Theme

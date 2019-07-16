import React, { FunctionComponent } from 'react'
import { ThemeConsumer, ITheme, defaultTheme } from '../ThemeProvider'

type Colorizor = (color: string) => string

const createColorizor = (theme: ITheme): Colorizor => (color: string) => {
  console.log('looking for ', color, theme, defaultTheme)
  return theme[color] || defaultTheme[color] || color
}

type ThemeChildrenType = ({
  theme,
  colorize,
}: {
  theme: ITheme
  colorize: (color: string) => string
}) => React.ReactNode

interface IThemeProps {
  children: ThemeChildrenType
}

const Theme: FunctionComponent<IThemeProps> = ({ children }) => (
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

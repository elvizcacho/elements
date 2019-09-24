import * as React from 'react'
import {
  ThemeConsumer,
  ITheme,
  defaultTheme,
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
}) => React.ReactNode

interface IThemeProps {
  readonly children: ThemeChildrenType
}

export const useTheme = () => {
  const theme = React.useContext(ThemeContext)

  return {
    theme,
    colorize: createColorizor(theme),
  }
}

const Theme: React.FC<IThemeProps> = ({ children }) => (
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

import React from 'react'
import { ThemeConsumer, ITheme } from './ThemeProvider'

type Colorizor = (color: string) => string

const createColorizor = (theme: ITheme): Colorizor => (color: string) =>
  theme[color] || color

export interface IThemeChildren {
  theme: ITheme
  colorize: any
}

type ThemeChildrenType = ({
  theme,
  colorize,
}: IThemeChildren) => React.ReactNode

const Theme: React.FC = ({ children }: { children: ThemeChildrenType }) => (
  <ThemeConsumer>
    {(theme: ITheme) =>
      children({
        theme,
        colorize: createColorizor(theme),
      })
    }
  </ThemeConsumer>
)

export default Theme

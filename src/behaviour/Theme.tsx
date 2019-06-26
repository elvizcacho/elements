import React from 'react'
import { ThemeConsumer, ITheme } from './ThemeProvider'

type Colorizor = (color: string) => string

const createColorizor = (theme: ITheme): Colorizor => (color: string) =>
  theme[color] || color

const Theme: React.FC = ({
  children,
}: {
  children: ({
    theme,
    colorize,
  }: {
    theme: ITheme
    colorize: any
  }) => React.ReactNode
}) => (
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

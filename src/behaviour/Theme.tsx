import React, { FunctionComponent } from 'react'
import { ThemeConsumer, ITheme } from './ThemeProvider'
import { color } from '../propTypes/color'

type Colorizor = (color: string) => string

const createColorizor = (theme: ITheme): Colorizor => (color: string) =>
  theme[color] || color

type ThemeChildrenType = ({
  theme,
  colorize,
}: {
  theme: ITheme
  colorize: (color: string) => color
}) => React.ReactNode

interface IThemeProps {
  children: ThemeChildrenType
}

const Theme: FunctionComponent<IThemeProps> = ({ children }: IThemeProps) => (
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

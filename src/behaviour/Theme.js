import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from './ThemeProvider'

const createColorizor = theme => color => theme[color] || color

const Theme = ({ children }) => (
  <ThemeConsumer>
    {theme =>
      children({
        theme,
        colorize: createColorizor(theme),
      })
    }
  </ThemeConsumer>
)

Theme.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Theme

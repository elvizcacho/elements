import PropTypes from 'prop-types'
import { ColorPalette } from '@allthings/colors'

export const color = PropTypes.oneOfType([
  PropTypes.string, // keep this until we got the colors right
  PropTypes.oneOf(
    Object.keys(ColorPalette).concat(Object.values(ColorPalette))
  ),
])

export const textColor = PropTypes.oneOfType([
  PropTypes.string, // keep this until we got the colors right
  PropTypes.oneOf(
    Object.keys(ColorPalette.text).concat(Object.values(ColorPalette.text))
  ),
])

export const colorCode = color =>
  ColorPalette[color] || ColorPalette.text[color] || color

export const textColorCode = color =>
  ColorPalette.text[color] || ColorPalette[color] || color

export const backgroundColorCode = color =>
  ColorPalette.background[color] || ColorPalette[color] || color

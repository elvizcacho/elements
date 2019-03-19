import React from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import { color, colorCode } from '../propTypes/color'

const line = color =>
  css({
    backgroundColor: color,
    height: '1px',
    width: '100%',
  })

/** Hello, I'm a Line */
const Line = ({ color }) => (
  <View
    {...line(colorCode(color))}
    alignV="center"
    alignH="center"
    direction="column"
  />
)

Line.propTypes = {
  /** Color of the Circle */
  color: color,
}

export default Line

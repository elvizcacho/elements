import React from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import { colorCode } from '../propTypes/color'

const line = (color: string) =>
  css({
    backgroundColor: color,
    height: '1px',
    width: '100%',
  })

/** Hello, I'm a Line */
const Line = ({ color }: { color: string }) => (
  <View
    {...line(colorCode(color))}
    alignV="center"
    alignH="center"
    direction="column"
  />
)

export default Line

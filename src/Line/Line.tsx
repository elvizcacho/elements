import { css } from 'glamor'
import React from 'react'
import { colorCode } from '../utils/propTypes/color'
import View from '../View'

const line = (color: string) =>
  css({
    backgroundColor: color,
    height: '1px',
    width: '100%',
  })

/**
 * Just walking the line.
 *
 * ```example
 * <Line color="primary" />
 * ```
 */
const Line = ({
  color,
}: {
  /** Color of the Line */
  readonly color: string
}) => (
  <View
    {...line(colorCode(color))}
    alignV="center"
    alignH="center"
    direction="column"
  />
)

export default Line

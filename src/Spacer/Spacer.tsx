import { css } from 'glamor'
import React from 'react'
import View from '../View'

/**
 * The vertical spacer is used to visually separate or create space between elements.
 */
const Spacer = ({
  width = '100%',
  height = 10,
  background,
}: {
  /** The width of space it should create **/
  readonly width?: number | string
  /** The height of space it should create **/
  readonly height?: number | string
  /** Background color, default will be transparent **/
  readonly background?: string
}) => <View {...css({ width, height, background })} />

export default Spacer

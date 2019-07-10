import React from 'react'
import View from '../View'
import { css } from 'glamor'

/**
 * The vertical spacer is used to visually separate or create space between elements.
 */
const Spacer = ({
  width = '100%',
  height = 10,
  background,
}: {
  /** The width of space it should create **/
  width?: number | string
  /** The height of space it should create **/
  height?: number | string
  /** Background color, default will be transparent **/
  background?: string
}) => <View {...css({ width, height, background })} />

export default Spacer

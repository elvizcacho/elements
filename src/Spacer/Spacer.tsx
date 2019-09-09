import React from 'react'
import View from '../View'
import { css, StyleAttribute } from 'glamor'
import isNumeric from '../utils/isNumeric'

type SpacingType = number | { horizontal?: number; vertical?: number }

interface ISpacing {
  inner(spacing: SpacingType): StyleAttribute
  outer(spacing: SpacingType): StyleAttribute
}

export const spacing: ISpacing = {
  inner: (spacings = {}) =>
    css({
      paddingTop: isNumeric(spacings) ? spacings : spacings.horizontal,
      paddingBottom: isNumeric(spacings) ? spacings : spacings.horizontal,
      paddingLeft: isNumeric(spacings) ? spacings : spacings.vertical,
      paddingRight: isNumeric(spacings) ? spacings : spacings.vertical,
    }),
  outer: (spacings = {}) =>
    css({
      marginTop: isNumeric(spacings) ? spacings : spacings.horizontal,
      marginBottom: isNumeric(spacings) ? spacings : spacings.horizontal,
      marginLeft: isNumeric(spacings) ? spacings : spacings.vertical,
      marginRight: isNumeric(spacings) ? spacings : spacings.vertical,
    }),
}

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

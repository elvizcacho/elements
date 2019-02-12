import React from 'react'
import PropTypes from 'prop-types'
import View from '../atoms/View'
import { css } from 'glamor'

/**
 * The vertical spacer is used to visually separate or create space between elements.
 */
const Spacer = ({ width = '100%', height = 10, background }) => (
  <View {...css({ width, height, background })} />
)

Spacer.propTypes = {
  /** The width of space it should create **/
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The height of space it should create **/
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Background color, default will be transparent **/
  background: PropTypes.string,
}

export default Spacer

import React from 'react'
import PropTypes from 'prop-types'
import View from '../atoms/View'
import { css } from 'glamor'

const relative = ({ left, right, top, bottom }) =>
  css({
    position: 'relative',
    left,
    right,
    top,
    bottom,
  })

class Relative extends React.Component {
  static propTypes = {
    /** Relative children */
    children: PropTypes.node,
    /** Top offset */
    top: PropTypes.number,
    /** Bottom offset */
    bottom: PropTypes.number,
    /** Left offset */
    left: PropTypes.number,
    /** Right offset */
    right: PropTypes.number,
  }

  render() {
    const { top, left, right, bottom, children, ...props } = this.props
    return (
      <View {...relative({ top, left, right, bottom })} {...props}>
        {children}
      </View>
    )
  }
}

export default Relative

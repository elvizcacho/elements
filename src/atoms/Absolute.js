import React from 'react'
import PropTypes from 'prop-types'
import View from '../atoms/View'
import { css } from 'glamor'

const absolute = ({ left, right, top, bottom }) =>
  css({
    position: 'absolute',
    top,
    right,
    left,
    bottom,
  })

class Absolute extends React.Component {
  static propTypes = {
    /** Absolute children */
    children: PropTypes.node,
    /** Top offset */
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Bottom offset */
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Left offset */
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Right offset */
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  render() {
    const { top, left, right, bottom, children, ...props } = this.props
    return (
      <View {...absolute({ top, left, right, bottom })} {...props}>
        {children}
      </View>
    )
  }
}

export default Absolute

import React from 'react'
import PropTypes from 'prop-types'
import View from '../atoms/View'
import { css } from 'glamor'

export const Column = ({ children, ...props }) => (
  <View flex="flex" {...props} direction="column">
    {children}
  </View>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
}

const layout = columnNumber =>
  css({
    maxWidth: columnNumber === 0 && '380px',
    overflow: columnNumber === 0 && 'hidden',
    position: 'relative', // for box-shadow to work properly
    boxShadow: columnNumber === 1 && '-2px 0px 5px 0px rgba(0,0,0,0.2)',
  })

class ColumnLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <View flex="flex" direction="row">
        {React.Children.map(children, (child, i) => (
          // eslint-disable-next-line
          <Column {...layout(i)} key={i}>
            {child}
          </Column>
        ))}
      </View>
    )
  }
}

export default ColumnLayout

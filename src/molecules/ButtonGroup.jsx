import React from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import PropTypes from 'prop-types'

const style = css({
  '> *': {
    marginRight: 10,
  },
  '> *:last-child': {
    marginRight: 0,
  },
})

/**
 * ButtonGroup groups multiple buttons and keeps the spacing consistent.
 *
 * ```example
 * <ButtonGroup>
 *   <Button secondary>Cancel</Button>
 *   <Button>Accept</Button>
 * </ButtonGroup>
 * ```
 */
class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <View direction="horizontal" {...style}>
        {React.Children.map(children, child => (
          <View>{child}</View>
        ))}
      </View>
    )
  }
}

export default ButtonGroup

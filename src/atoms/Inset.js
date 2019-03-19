import React from 'react'
import PropTypes from 'prop-types'
import View from '../atoms/View'
import { css } from 'glamor'

const styles = ({ horizontal, vertical }) =>
  css({
    paddingLeft: horizontal && 15,
    paddingRight: horizontal && 15,
    paddingTop: vertical && 15,
    paddingBottom: vertical && 15,
  })

const Inset = ({ horizontal, vertical, ...props }) => (
  <View {...styles({ horizontal, vertical })} {...props} />
)

Inset.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
}

Inset.defaultProps = {
  horizontal: true,
}

export default Inset

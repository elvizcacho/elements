import React from 'react'
import PropTypes from 'prop-types'

import View from '../../atoms/View'
import { css } from 'glamor'

const styles = {
  container: css({
    padding: 15,
    position: 'relative',
  }),
}

const CardContent = ({ children, ...props }) => (
  <View {...styles.container} {...props}>
    {children}
  </View>
)

CardContent.propTypes = {
  children: PropTypes.node,
}

export default CardContent

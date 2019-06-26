import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { ColorPalette } from '@allthings/colors'
import View from '../../atoms/View'

const styles = (backgroundColor, withCursor, hideLine, padded) =>
  css({
    padding: padded && '10px 15px',
    minHeight: '50px',
    borderBottom: !hideLine && `1px solid ${ColorPalette.lightGrey}`,
    cursor: withCursor && 'pointer',
    backgroundColor: backgroundColor,
  })

const ListItem = ({
  children,
  backgroundColor,
  hideLine,
  padded,
  ...props
}) => (
  <View
    direction="row"
    alignV="center"
    {...styles(backgroundColor, !!props.onClick, hideLine, padded)}
    {...props}
  >
    {children}
  </View>
)

ListItem.propTypes = {
  children: PropTypes.node,
  hideLine: PropTypes.bool,
  padded: PropTypes.bool,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
}

ListItem.defaultProps = {
  backgroundColor: 'white',
  padded: true,
}

export default ListItem

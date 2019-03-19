import React from 'react'
import PropTypes from 'prop-types'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import { css } from 'glamor'
const styles = {
  spinner: css({
    height: 'auto',
    width: 'auto',
    borderRadius: '50%',
    margin: 'auto',
  }),
}

const SwitchListSpinner = ({ width, fill, ...props }) => (
  <View
    direction="row"
    alignH="center"
    alignV="center"
    {...css(styles.spinner, { background: fill })}
    {...props}
  >
    <Spinner />
  </View>
)

SwitchListSpinner.propTypes = {
  width: PropTypes.number,
  fill: PropTypes.string,
}

export default SwitchListSpinner

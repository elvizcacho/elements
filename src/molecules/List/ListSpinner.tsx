import React from 'react'
import { number } from 'prop-types'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import Circle from '../../atoms/Circle'

/** It's a spinner for a list **/
const ListSpinner = ({ radius = 40, ...props }) => (
  <View direction="row" alignH="center">
    <Circle radius={radius} color="white" {...props}>
      <Spinner size={radius - 10} />
    </Circle>
  </View>
)

ListSpinner.propTypes = {
  radius: number,
}

export default ListSpinner
import React from 'react'
import { number, string } from 'prop-types'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import Circle from '../../atoms/Circle'

/** It's a spinner for a list **/
const ListSpinner = ({ color, radius = 40, ...props }) => (
  <View direction="row" alignH="center">
    <Circle radius={radius} color="white" {...props}>
      <Spinner color={color} size={radius - 10} />
    </Circle>
  </View>
)

ListSpinner.propTypes = {
  color: string,
  radius: number,
}

export default ListSpinner

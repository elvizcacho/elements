import React from 'react'
import Circle, { ICircleProps } from '../Circle'
import Spinner from '../Spinner'
import View from '../View'

/** It's a spinner for a list **/
const ListSpinner = ({ radius = 40, ...props }: IListSpinnerProps) => (
  <View direction="row" alignH="center">
    <Circle radius={radius} color="white" {...props}>
      <Spinner size={radius - 10} />
    </Circle>
  </View>
)

interface IListSpinnerProps extends ICircleProps {
  readonly radius?: number
}

export default ListSpinner

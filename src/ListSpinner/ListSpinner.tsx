import React, { FunctionComponent } from 'react'
import View from '../View'
import Spinner from '../Spinner'
import Circle, { ICircleProps } from '../Circle'

/** It's a spinner for a list **/
const ListSpinner: FunctionComponent<IListSpinnerProps> = ({
  radius = 40,
  ...props
}) => (
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

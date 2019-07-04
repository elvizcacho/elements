import React, { FunctionComponent } from 'react'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import Circle from '../../atoms/Circle'

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

interface IListSpinnerProps {
  radius: number
}

export default ListSpinner

import React from 'react'
import { number, string } from 'prop-types'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import Circle from '../../atoms/Circle'
import Theme from '../../behaviour/Theme'

/** It's a spinner for a list **/
const ListSpinner = ({ color = 'primary', radius = 40, ...props }) => (
  <Theme>
    {({ colorize }) => (
      <View direction="row" alignH="center">
        <Circle radius={radius} color="white" {...props}>
          <Spinner color={colorize(color)} size={radius - 10} />
        </Circle>
      </View>
    )}
  </Theme>
)

ListSpinner.propTypes = {
  color: string,
  radius: number,
}

export default ListSpinner

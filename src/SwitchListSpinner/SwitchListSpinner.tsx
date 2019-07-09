import React from 'react'
import View from '../View'
import Spinner from '../Spinner'
import { css } from 'glamor'

const spinner = css({
  height: 'auto',
  width: 'auto',
  borderRadius: '50%',
  margin: 'auto',
})

const SwitchListSpinner = ({
  width,
  fill,
  ...props
}: {
  width: number
  fill: string
}) => (
  <View
    direction="row"
    alignH="center"
    alignV="center"
    {...css(spinner, { background: fill })}
    {...props}
  >
    <Spinner />
  </View>
)

export default SwitchListSpinner

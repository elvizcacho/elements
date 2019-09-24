import { css } from 'glamor'
import React from 'react'
import Spinner from '../Spinner'
import View from '../View'

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

import { css } from 'glamor'
import React from 'react'
import View, { IViewProps } from '../View'

const styles = css({
  padding: 15,
  position: 'relative',
})

const CardContent = (props: IViewProps) => <View {...styles} {...props} />

export default CardContent

import React, { FunctionComponent } from 'react'

import View, { IViewProps } from '../View'
import { css } from 'glamor'

const styles = css({
  padding: 15,
  position: 'relative',
})

const CardContent: FunctionComponent<IViewProps> = props => (
  <View {...styles} {...props} />
)

export default CardContent

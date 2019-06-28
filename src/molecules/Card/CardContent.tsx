import React, { FunctionComponent, PropsWithChildren } from 'react'

import View from '../../atoms/View'
import { css } from 'glamor'

const styles = css({
  padding: 15,
  position: 'relative',
})

const CardContent: FunctionComponent = (props: PropsWithChildren<{}>) => (
  <View {...styles} {...props} />
)

export default CardContent

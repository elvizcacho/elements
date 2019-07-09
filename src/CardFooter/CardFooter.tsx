import React, { FunctionComponent, PropsWithChildren } from 'react'
import { css } from 'glamor'
import View from '../View'

const style = css({
  borderTop: '1px solid #e7ecee',
  '> *': {
    padding: '10px 13px',
    textAlign: 'center',
  },
  '> :not(:last-child)': {
    borderRight: '1px solid #e7ecee',
  },
})

const CardFooter: FunctionComponent = (props: PropsWithChildren<{}>) => (
  <View
    direction="row"
    alignV="center"
    alignH="space-around"
    {...style}
    {...props}
  />
)

export default CardFooter

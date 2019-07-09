import React, { FunctionComponent } from 'react'
import { css } from 'glamor'
import View, { IViewProps } from '../../atoms/View'

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

const CardFooter: FunctionComponent<IViewProps> = props => (
  <View
    direction="row"
    alignV="center"
    alignH="space-around"
    {...style}
    {...props}
  />
)

export default CardFooter

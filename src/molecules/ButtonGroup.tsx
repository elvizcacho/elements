import React, { FunctionComponent } from 'react'
import View, { IViewProps } from '../atoms/View'
import { css } from 'glamor'
import Button from './Button'

const style = css({
  '> *': {
    marginRight: 10,
  },
  '> *:last-child': {
    marginRight: 0,
  },
})

/**
 * ButtonGroup groups multiple buttons and keeps the spacing consistent.
 *
 * ```example
 * <ButtonGroup>
 *   <Button secondary>Cancel</Button>
 *   <Button>Accept</Button>
 * </ButtonGroup>
 * ```
 */
const ButtonGroup: FunctionComponent<IViewProps> = ({
  children,
  ...props
}: {
  children: [typeof Button][]
}) => (
  <View direction="row" {...style} {...props}>
    {React.Children.map(children, child => (
      <View>{child}</View>
    ))}
  </View>
)

export default ButtonGroup

import { css } from 'glamor'
import React, { Children } from 'react'
import View, { IViewProps } from '../View'

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
const ButtonGroup = ({ children, ...props }: IViewProps) => (
  <View direction="row" {...style} {...props}>
    {Children.map(children, child => (
      <View>{child}</View>
    ))}
  </View>
)

export default ButtonGroup

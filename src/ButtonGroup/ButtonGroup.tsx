import * as React from 'react'
import View, { IViewProps } from '../View'
import { css } from 'glamor'

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
const ButtonGroup: React.FC<IViewProps> = ({ children, ...props }) => (
  <View direction="row" {...style} {...props}>
    {React.Children.map(children, child => (
      <View>{child}</View>
    ))}
  </View>
)

export default ButtonGroup

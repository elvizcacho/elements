import React, { FunctionComponent } from 'react'
import View, { IViewProps } from '../View'
import { css } from 'glamor'

const relative = ({ left, right, top, bottom }: IRelative) =>
  css({
    position: 'relative',
    left,
    right,
    top,
    bottom,
  })

type IRelativeProps = IRelative & IViewProps

interface IRelative {
  /** Top offset */
  top?: number
  /** Bottom offset */
  bottom?: number
  /** Left offset */
  left?: number
  /** Right offset */
  right?: number
}

const Relative: FunctionComponent<IRelativeProps> = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}) => (
  <View {...relative({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Relative

import { css } from 'glamor'
import React from 'react'
import View, { IViewProps } from '../View'

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
  readonly top?: number
  /** Bottom offset */
  readonly bottom?: number
  /** Left offset */
  readonly left?: number
  /** Right offset */
  readonly right?: number
}

const Relative = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}: IRelativeProps) => (
  <View {...relative({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Relative

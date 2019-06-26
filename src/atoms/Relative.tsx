import React from 'react'
import View, { IView } from '../atoms/View'
import { css } from 'glamor'

const relative = ({ left, right, top, bottom }: IRelative) =>
  css({
    position: 'relative',
    left,
    right,
    top,
    bottom,
  })

/** Top offset */
interface IRelative {
  top: number
  /** Bottom offset */
  bottom: number
  /** Left offset */
  left: number
  /** Right offset */
  right: number
}

const Relative = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}: IRelative & IView) => (
  <View {...relative({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Relative

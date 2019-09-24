import { css } from 'glamor'
import React from 'react'
import View, { IViewProps } from '../View'

const absolute = ({ left, right, top, bottom }: IAbsoluteProps) =>
  css({
    position: 'absolute',
    top,
    right,
    left,
    bottom,
  })

export interface IAbsoluteProps {
  /** Top offset */
  readonly top?: string | number
  /** Bottom offset */
  readonly bottom?: string | number
  /** Left offset */
  readonly left?: string | number
  /** Right offset */
  readonly right?: string | number
}

const Absolute = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}: IAbsoluteProps & IViewProps) => (
  <View {...absolute({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Absolute

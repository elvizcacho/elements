import React from 'react'
import View, { IViewProps } from '../atoms/View'
import { css } from 'glamor'

const absolute = ({ left, right, top, bottom }: IProps) =>
  css({
    position: 'absolute',
    top,
    right,
    left,
    bottom,
  })

interface IProps {
  /** Top offset */
  top?: string | number
  /** Bottom offset */
  bottom?: string | number
  /** Left offset */
  left?: string | number
  /** Right offset */
  right?: string | number
}

const Absolute = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}: IProps & IViewProps) => (
  <View {...absolute({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Absolute

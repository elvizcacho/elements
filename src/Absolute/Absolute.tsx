import React, { FunctionComponent } from 'react'
import View, { IViewProps } from '../View'
import { css } from 'glamor'

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
  top?: string | number
  /** Bottom offset */
  bottom?: string | number
  /** Left offset */
  left?: string | number
  /** Right offset */
  right?: string | number
}

const Absolute: FunctionComponent<IAbsoluteProps & IViewProps> = ({
  top,
  left,
  right,
  bottom,
  children,
  ...props
}) => (
  <View {...absolute({ top, left, right, bottom })} {...props}>
    {children}
  </View>
)

export default Absolute

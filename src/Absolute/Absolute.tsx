import * as React from 'react'
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
  readonly top?: string | number
  /** Bottom offset */
  readonly bottom?: string | number
  /** Left offset */
  readonly left?: string | number
  /** Right offset */
  readonly right?: string | number
}

const Absolute: React.FC<IAbsoluteProps & IViewProps> = ({
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

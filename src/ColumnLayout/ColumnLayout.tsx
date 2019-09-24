import { css } from 'glamor'
import React, { Children, PropsWithChildren } from 'react'
import View, { IViewProps } from '../View'

export const Column = ({ children, ...props }: IViewProps) => (
  <View flex="flex" {...props} direction="column">
    {children}
  </View>
)

const layout = (columnNumber: number) =>
  css({
    maxWidth: columnNumber === 0 && '380px',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative', // for box-shadow to work properly
    boxShadow: columnNumber === 1 && '-2px 0px 5px 0px rgba(0,0,0,0.2)',
  })

const ColumnLayout = ({ children }: PropsWithChildren<{}>) => (
  <View flex="flex" direction="row" {...css({ minHeight: 0 })}>
    {Children.map(children, (child, i) => (
      // eslint-disable-next-line
      <Column {...layout(i)} key={i}>
        {child}
      </Column>
    ))}
  </View>
)

export default ColumnLayout

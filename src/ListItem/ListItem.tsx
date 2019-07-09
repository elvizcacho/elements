import React, { PropsWithChildren } from 'react'
import { css } from 'glamor'
import { ColorPalette } from '@allthings/colors'
import View, { IViewProps } from '../View'
import { color } from '../utils/propTypes/color'

const styles = (
  backgroundColor: string,
  withCursor: boolean,
  hideLine: boolean,
  padded: boolean,
) =>
  css({
    padding: padded && '10px 15px',
    minHeight: '50px',
    borderBottom: !hideLine && `1px solid ${ColorPalette.lightGrey}`,
    cursor: withCursor && 'pointer',
    backgroundColor: backgroundColor,
  })

interface IListItemProps extends IViewProps {
  backgroundColor?: color
  hideLine?: boolean
  padded?: boolean
}

const ListItem = ({
  backgroundColor = 'white',
  hideLine = false,
  padded = true,
  ...props
}: PropsWithChildren<IListItemProps>) => (
  <View
    direction="row"
    alignV="center"
    {...styles(backgroundColor, !!props.onClick, hideLine, padded)}
    {...props}
  />
)

export default ListItem

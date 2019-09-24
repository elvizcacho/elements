import { ColorPalette } from '@allthings/colors'
import { css } from 'glamor'
import React from 'react'
import { color } from '../utils/propTypes/color'
import View, { IViewProps } from '../View'

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

export interface IListItemProps extends IViewProps {
  readonly backgroundColor?: color
  readonly hideLine?: boolean
  readonly padded?: boolean
}

const ListItem = ({
  backgroundColor = 'white',
  hideLine = false,
  padded = true,
  ...props
}: IListItemProps) => (
  <View
    direction="row"
    alignV="center"
    {...styles(backgroundColor, !!props.onClick, hideLine, padded)}
    {...props}
  />
)

export default ListItem

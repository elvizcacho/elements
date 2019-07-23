import React, { FunctionComponent } from 'react'
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

export interface IListItemProps extends IViewProps {
  readonly backgroundColor?: color
  readonly hideLine?: boolean
  readonly padded?: boolean
}

const ListItem: FunctionComponent<IListItemProps> = ({
  backgroundColor = 'white',
  hideLine = false,
  padded = true,
  ...props
}) => (
  <View
    direction="row"
    alignV="center"
    {...styles(backgroundColor, !!props.onClick, hideLine, padded)}
    {...props}
  />
)

export default ListItem

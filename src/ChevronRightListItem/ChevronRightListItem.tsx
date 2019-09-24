import { ColorPalette } from '@allthings/colors'
import { css, merge } from 'glamor'
import React from 'react'
import Icon from '../Icon'
import ListItem, { IListItemProps } from '../ListItem'
import View, { flexType } from '../View'

const style = css({
  width: 12,
  height: 12,
})

interface ChevronRightListItem extends IListItemProps {
  readonly flex?: flexType
  readonly innerStyle?: any
}

const ChevronRightListItem = ({
  innerStyle,
  children,
  flex = 'grow',
  ...props
}: ChevronRightListItem) => (
  <ListItem {...props} flex={flex}>
    <View
      direction="column"
      flex={flex}
      {...merge(css(innerStyle), css({ width: '100%' }))}
    >
      {children}
    </View>
    <View flex="nogrow">
      <Icon
        name="arrow-right"
        size="xs"
        color={ColorPalette.greyIntense}
        {...style}
      />
    </View>
  </ListItem>
)

export default ChevronRightListItem

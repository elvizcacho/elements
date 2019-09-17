import * as React from 'react'
import { css, merge } from 'glamor'
import Icon from '../Icon'
import View, { flexType } from '../View'
import { ColorPalette } from '@allthings/colors'
import ListItem, { IListItemProps } from '../ListItem'

const style = css({
  width: 12,
  height: 12,
})

interface ChevronRightListItem extends IListItemProps {
  readonly flex?: flexType
  readonly innerStyle?: any
}

const ChevronRightListItem: React.FC<ChevronRightListItem> = ({
  innerStyle,
  children,
  flex = 'grow',
  ...props
}) => (
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

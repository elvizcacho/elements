import React, { forwardRef } from 'react'
import View, { IViewProps, ViewRef } from '../View'

/**
 * Lists display a series of related content.
 * Make sure to check out ListItem, ListIcon and ListSpinner to
 * get the maximum out of it.
 *
 * ```example
 * <Card>
 *  <List>
 *    <ListItem>
 *      <Text>Item 1</Text>
 *    </ListItem>
 *    <ListItem>
 *      <Text>Item 2</Text>
 *    </ListItem>
 *    <ListItem>
 *      <Text>Item 3</Text>
 *    </ListItem>
 *    <ListItem>
 *      <Text>Item 4</Text>
 *    </ListItem>
 *    <ChevronRightListItem onClick={_ => _}>
 *      <Text>ChevronRightListItem to show indicator</Text>
 *    </ChevronRightListItem>
 *  </List>
 * </Card>
 * ```
 *
 * ```example
 * <View>
 *  <GroupedCardList title="A list with images">
 *    <View direction="row">
 *      <Image src={'https://placeimg.com/80/80/people?t=1'} />
 *      <ChevronRightListItem flex="grow">
 *        <Text>Jules</Text>
 *      </ChevronRightListItem>
 *    </View>
 *    <View direction="row">
 *      <Image src={'https://placeimg.com/80/80/people?t=2'} />
 *      <ListItem flex="grow">
 *        <Text>Luan</Text>
 *      </ListItem>
 *    </View>
 *    <View direction="row">
 *      <Image src={'https://placeimg.com/80/80/people?t=3'} />
 *      <ListItem flex="grow">
 *        <Text>Uli</Text>
 *      </ListItem>
 *    </View>
 *  </GroupedCardList>
 *  <ListSpinner />
 * </View>
 * ```
 */
const List = forwardRef<ViewRef, IViewProps>((props, ref) => (
  <View direction="column" ref={ref} {...props} />
))

export default List

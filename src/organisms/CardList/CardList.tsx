import React, { FunctionComponent, PropsWithChildren } from 'react'
import { List } from '../../molecules/List'
import Card from '../../molecules/Card'

/**
 * The CardList is a molecule that is a card containing a list.
 *
 * ```example
 * <ThemeProvider>
 *   <CardList>
 *     <ChevronRightListItem>
 *       <Text>List item with chevron</Text>
 *     </ChevronRightListItem>
 *     <ListItem>
 *       <Text>Test</Text>
 *     </ListItem>
 *     <ListItem>
 *       <Text>Test</Text>
 *     </ListItem>
 *     <ListItem>
 *       <Text>Test</Text>
 *     </ListItem>
 *   </CardList>
 * </ThemeProvider>
 **/
const CardList: FunctionComponent = (props: PropsWithChildren<{}>) => (
  <Card>
    <List {...props} />
  </Card>
)

export default CardList

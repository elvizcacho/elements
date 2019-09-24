import React from 'react'
import Card from '../Card'
import List from '../List'
import { IViewProps } from '../View'

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
const CardList = (props: IViewProps) => (
  <Card>
    <List {...props} />
  </Card>
)

export default CardList

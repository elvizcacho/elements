import * as React from 'react'
import List from '../List'
import Card from '../Card'
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
const CardList: React.FC<IViewProps> = props => (
  <Card>
    <List {...props} />
  </Card>
)

export default CardList

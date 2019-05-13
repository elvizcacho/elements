import React from 'react'
import {
  ThemeProvider,
  ResourceProvider,
  List,
  Card,
  ListItem,
  Button,
} from '../src/'
import { css } from 'glamor'

const CollapsibleStory = () => (
  <ThemeProvider>
    <ResourceProvider>
      <Card
        {...css({
          width: '300px',
          margin: '10px 10px 10px 10px',
        })}
      >
        <List>
          <ListItem alignH="space-around">
            <Button>Confirm</Button>
            <Button secondary>Cancel</Button>
          </ListItem>
          <ListItem alignH="space-around">
            <Button disabled>Confirm</Button>
            <Button disabled secondary>
              Cancel
            </Button>
          </ListItem>
          <ListItem alignH="space-around">
            <Button backgroundColor="#ecf0f1" color="#333333">
              Confirm
            </Button>
            <Button backgroundColor="#ecf0f1" color="#333333" secondary>
              Cancel
            </Button>
          </ListItem>
        </List>
      </Card>
    </ResourceProvider>
  </ThemeProvider>
)

export default CollapsibleStory

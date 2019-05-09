import React from 'react'
import { css } from 'glamor'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import List from '../src/molecules/List/List'
import ListItem from '../src/molecules/List/ListItem'
import Button from '../src/molecules/Button'
import Card from '../src/molecules/Card/Card'

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

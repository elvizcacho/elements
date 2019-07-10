import React from 'react'
import {
  ThemeProvider,
  TitleBar,
  SquareIconButton,
  Text,
  Button,
  View,
  CardList,
  ListItem,
  ResourceProvider,
} from '../src'
import HorizontalView from '../src/HorizontalView'

export default class HorizontalViewStory extends React.Component<
  {},
  { level: number }
> {
  state = {
    level: 3,
  }

  prevLevel = () =>
    this.setState(state => ({
      level: state.level - 1,
    }))

  nextLevel = () =>
    this.setState(state => ({
      level: state.level + 1,
    }))

  render() {
    return (
      <ResourceProvider>
        <ThemeProvider>
          <View fill direction="column" alignV="stretch">
            <TitleBar alignH="space-between">
              <View direction="row" alignV="center">
                <SquareIconButton icon="armchair-filled" iconColor="white" />
                <Text color="white" strong>
                  Get Relaxed
                </Text>
              </View>
              <SquareIconButton icon="search-filled" iconColor="white" />
            </TitleBar>
            <View direction="row" flex="flex">
              <HorizontalView>
                {Array(this.state.level)
                  .fill({})
                  .map((_, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CardList key={i} direction="column">
                      <ListItem>
                        <Text>{`Test ${i}`}</Text>
                      </ListItem>
                    </CardList>
                  ))}
              </HorizontalView>
            </View>
            <View direction="row" alignH="space-around" style={{ margin: 15 }}>
              <Button onClick={this.prevLevel} disabled={this.state.level <= 1}>
                Back
              </Button>
              <Button onClick={this.nextLevel} disabled={this.state.level >= 6}>
                Next
              </Button>
            </View>
          </View>
        </ThemeProvider>
      </ResourceProvider>
    )
  }
}

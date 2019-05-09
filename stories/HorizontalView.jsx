import React from 'react'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import HorizontalView from '../src/behaviour/HorizontalView'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import View from '../src/atoms/View'
import Text from '../src/atoms/Text'
import ListItem from '../src/molecules/List/ListItem'
import TitleBar from '../src/organisms/TitleBar'
import SquareIconButton from '../src/molecules/SquareIconButton'
import CardList from '../src/organisms/CardList/CardList'
import Button from '../src/molecules/Button'

export default class HorizontalViewStory extends React.Component {
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
            <TitleBar alignH="space-between" color="blueIntense">
              <View direction="row" alignV="center">
                <SquareIconButton icon="ArmchairFilledIcon" iconColor="white" />
                <Text color="white" strong>
                  Get Relaxed
                </Text>
              </View>
              <SquareIconButton icon="SearchFilledIcon" iconColor="white" />
            </TitleBar>
            <View direction="row" flex="flex">
              <HorizontalView>
                {Array(this.state.level)
                  .fill({})
                  .map((_, i) => (
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

import React from 'react'
import { View, ThemeProvider, Dropdown, ResourceProvider } from '../src/'
import { css } from 'glamor'
import Text from '../src/atoms/Text'

const styles = {
  title: css({
    margin: '15px',
  }),
  itemTextStyle: css({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
}

class DropdownStory extends React.Component {
  state = {
    simpleDropdown: 'dog',
    withLabel: 'cat',
    clearable: '',
    items: [
      {
        label:
          'this is a long text to see ellipsis and what is coming after doesnt matter that much',
        value:
          'this is a long text to see ellipsis and what is coming after doesnt matter that much',
      },
      {
        label: 'dog',
        value: 'dog',
      },
      {
        label: 'cat',
        value: 'cat',
      },
      {
        label: 'apple',
        value: 'apple',
      },
    ],
  }

  render() {
    return (
      <ThemeProvider>
        <ResourceProvider>
          <View direction="column" {...css({ padding: '10px 20px' })}>
            <Text strong {...styles.title}>
              Simple dropdown:
            </Text>
            <Dropdown
              initialSelectedItem={this.state.items[1]}
              menuHeight={200}
              onSelect={item => this.setState({ simpleDropdown: item })}
              items={this.state.items}
            />
            <Text strong {...styles.title}>
              Dropdown with icon and label:
            </Text>
            <Dropdown
              initialSelectedItem={this.state.items[1]}
              label="floating label yay"
              onSelect={item => this.setState({ withLabel: item })}
              menuHeight={200}
              icon="list-bullets-filled"
              items={this.state.items}
            />
            <Text strong {...styles.title}>
              Clearable dropdown:
            </Text>
            <Dropdown
              label="clearable"
              initialSelectedItem={this.state.items[1]}
              menuHeight={200}
              onSelect={item => this.setState({ clearable: item })}
              placeholder="select something..."
              clearable
              items={this.state.items}
            />
            <Text strong {...styles.title}>
              Drop up:
            </Text>
            <Dropdown
              initialSelectedItem={this.state.items[1]}
              label="dropUp"
              menuHeight={200}
              onSelect={item => this.setState({ dropUp: item })}
              placeholder="select something..."
              clearable
              placement="top"
              items={this.state.items}
            />
          </View>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}
export default DropdownStory

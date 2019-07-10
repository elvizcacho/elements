import React from 'react'
import {
  View,
  ThemeProvider,
  SearchableDropdown,
  ResourceProvider,
  Text,
} from '../src'
import { css } from 'glamor'

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

class SearchableDropdownStory extends React.Component {
  state = {
    simpleDropdown: {
      label: 'dog',
      value: 'dog',
    },
    controlledDropdown: {
      label: 'dog',
      value: 'dog',
    },
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
            <SearchableDropdown
              name="dropdown-simple"
              initialSelectedItem={this.state.simpleDropdown}
              menuHeight={200}
              onSelect={item => this.setState({ simpleDropdown: item })}
              items={this.state.items}
            />
          </View>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}
export default SearchableDropdownStory

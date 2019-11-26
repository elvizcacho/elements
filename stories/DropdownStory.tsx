import { css } from 'glamor'
import React, { Component } from 'react'
import {
  Button,
  Dropdown,
  Form,
  ResourceProvider,
  Text,
  ThemeProvider,
  View,
} from '../src/'
import { IDropdownItem } from '../src/Dropdown'

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

class DropdownStory extends Component {
  state = {
    simpleDropdown: {
      label: 'Dog',
      value: 'dog-ed31ac',
    },
    controlledDropdown: {
      label: 'Dog',
      value: 'dog-f0cc72',
    },
    withLabel: 'cat',
    clearable: '',
    items: [
      {
        label:
          'this is a long text to see ellipsis and what is coming after doesnt matter that much',
        value: 'very-long-text-af7e7c',
      },
      {
        label: 'Dog',
        value: 'dog-625995',
      },
      {
        label: 'Cat',
        value: 'cat-5f7915',
      },
      {
        label: 'Apple',
        value: 'apple-c8eb3c',
      },
    ],
    form: undefined,
  }

  render() {
    return (
      <ThemeProvider>
        <ResourceProvider>
          <View direction="column" {...css({ padding: '10px 20px' })}>
            <Text weight="semi-bold" {...styles.title}>
              Simple dropdown:
            </Text>
            <Dropdown
              name="dropdown-simple"
              initialSelectedItem={this.state.simpleDropdown}
              menuHeight={200}
              onSelect={item => this.setState({ simpleDropdown: item })}
              items={this.state.items}
            />

            <Text weight="semi-bold" {...styles.title}>
              Dropdown with icon and label:
            </Text>
            <Dropdown
              name="dropdown-label"
              initialSelectedItem={this.state.items[1]}
              label="floating label yay"
              onSelect={item => this.setState({ withLabel: item })}
              menuHeight={200}
              icon="list-bullets-filled"
              items={this.state.items}
            />

            <Text weight="semi-bold" {...styles.title}>
              Clearable dropdown:
            </Text>
            <Dropdown
              name="dropdown-clearable"
              label="clearable"
              initialSelectedItem={this.state.items[1]}
              menuHeight={200}
              onSelect={item => this.setState({ clearable: item })}
              placeholder="select something..."
              clearable
              items={this.state.items}
            />

            <Text weight="semi-bold" {...styles.title}>
              Drop up:
            </Text>
            <Dropdown
              name="dropdown-dropup"
              initialSelectedItem={this.state.items[1]}
              label="dropUp"
              menuHeight={200}
              onSelect={item => this.setState({ dropUp: item })}
              placeholder="select something..."
              clearable
              placement="top"
              items={this.state.items}
            />
            <Text weight="semi-bold" {...styles.title}>
              Disabled dropdown:
            </Text>

            <Dropdown
              name="dropdown-controlled"
              disabled
              initialSelectedItem={this.state.controlledDropdown}
              selectedItem={this.state.controlledDropdown}
              menuHeight={200}
              onSelect={item => this.setState({ controlledDropdown: item })}
              items={this.state.items}
            />
            <Text weight="semi-bold" {...styles.title}>
              Controlled dropdown item:
            </Text>
            <Dropdown
              name="dropdown-controlled"
              initialSelectedItem={this.state.controlledDropdown}
              selectedItem={this.state.controlledDropdown}
              menuHeight={200}
              onSelect={item => this.setState({ controlledDropdown: item })}
              items={this.state.items}
            />
            <Button
              onClick={() =>
                this.setState({ controlledDropdown: this.state.items[2] })
              }
              {...css({ marginTop: 10 })}
            >
              Set item to &quot;Cat&quot;
            </Button>
            <Text weight="semi-bold" {...styles.title}>
              Form required dropdown:
            </Text>
            <Form
              onSubmit={(_, data: { selected: IDropdownItem }) =>
                this.setState({ form: data.selected })
              }
            >
              <Dropdown
                name="selected"
                placeholder="Select your player"
                label="Select your player"
                placement="top"
                required
                menuHeight={200}
                items={[
                  { label: 'Mario', value: 'mario-b3ce6e' },
                  { label: 'Luigi', value: 'luigi-a4f42a' },
                  { label: 'Yoshi', value: 'yoshi-79a5c8' },
                  { label: 'Bowser', value: 'bowser-28f58c' },
                ]}
              />
              <br />
              <View direction="row" alignV="center" alignH="space-between">
                <Button type="submit">{`Let's go`}</Button>
                {this.state.form && <Text>Selected {this.state.form}</Text>}
              </View>
            </Form>
          </View>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}
export default DropdownStory

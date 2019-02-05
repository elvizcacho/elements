import React from 'react'
import {
  Inset,
  Input,
  Spacer,
  DateInput,
  Dropdown,
  Collapsible,
  ThemeProvider,
  ResourceProvider,
} from '../src/'
import { ColorPalette } from '@allthings/colors'

export default class FilterStory extends React.Component {
  state = {
    selectedDate: null,
  }

  render() {
    return (
      <ThemeProvider>
        <ResourceProvider>
          <Inset horizontal vertical>
            <Collapsible
              title="Filter this list"
              hasBottomBorder
              initiallyCollapsed={false}
            >
              <Spacer background={ColorPalette.background.bright} height={2} />
              <Input
                name="asset"
                label="Asset name"
                placeholder="Filter by asset name"
                icon="search-filled"
              />
              <Spacer background={ColorPalette.background.bright} height={2} />
              <Dropdown
                icon="list-bullets-filled"
                menuHeight={200}
                onSelect={item => this.setState({ simpleDropdown: item })}
                items={[
                  {
                    label: 'Rooms',
                    value: 'Rooms',
                  },
                  {
                    label: 'Furnitures',
                    value: 'Furnitures',
                  },
                  {
                    label: 'Lab equipment',
                    value: 'Lab equipment',
                  },
                ]}
                clearable
                placeholder="Select a category"
                label="Category"
              />
              <Spacer background={ColorPalette.background.bright} height={2} />
              <DateInput
                name="select-date"
                locale="de-DE"
                minDate={new Date()}
                minDetail="year"
                onChange={date => this.setState({ selectedDate: date })}
              />
            </Collapsible>
          </Inset>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}

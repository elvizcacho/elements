import React from 'react'

import Collapsible from '../src/molecules/Collapsible'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import Inset from '../src/atoms/Inset'
import Input from '../src/atoms/Input'
import Spacer from '../src/atoms/Spacer'
import { ColorPalette } from '@allthings/colors'
import DateInput from '../src/organisms/DateInput'
import Calendar from '../src/molecules/Calendar'

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
              <Spacer background={ColorPalette.background.bright} height={1} />
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

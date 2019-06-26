import React from 'react'
import Calendar from './Calendar'
import ThemeProvider from '../behaviour/ThemeProvider'
import ResourceProvider from '../behaviour/ResourceProvider'
import renderer from 'react-test-renderer'

describe('Calendar', () => {
  it('should be able to block days', () => {
    const testInstance = renderer.create(
      <ThemeProvider>
        <ResourceProvider>
          <Calendar
            isBlockedDay={date =>
              new Date().toDateString() === date.toDateString()
            }
          />
        </ResourceProvider>
      </ThemeProvider>
    )

    const found = testInstance.root.find(
      el => el.props.className && el.props.className.indexOf('blocked') !== -1
    )

    expect(found.children[0].children[0]).toEqual(String(new Date().getDate()))
  })

  it('should render calendar', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ResourceProvider>
            <Calendar value={new Date(2020, 0, 1)} />
          </ResourceProvider>
        </ThemeProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

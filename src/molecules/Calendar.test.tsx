import React from 'react'
import Calendar from './Calendar'
import ThemeProvider from '../behaviour/ThemeProvider'
import ResourceProvider from '../behaviour/ResourceProvider'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

describe('Calendar', () => {
  it('should be able to block days', () => {
    const { container } = render(
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

    expect(container.querySelector('.blocked')!.textContent).toBe(
      String(new Date().getDate())
    )
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

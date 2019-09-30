import React from 'react'
import { render } from '@testing-library/react'
import ResourceProvider from '../ResourceProvider'
import ThemeProvider from '../ThemeProvider'
import Calendar from './Calendar'

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
      </ThemeProvider>,
    )

    expect(container.querySelector('.blocked')!.textContent).toBe(
      String(new Date().getDate()),
    )
  })

  it('should render calendar', () => {
    const { container } = render(
      <ThemeProvider>
        <ResourceProvider>
          <Calendar value={new Date(2020, 0, 1)} />
        </ResourceProvider>
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})

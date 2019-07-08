import React from 'react'
import ThemeProvider, { ThemeConsumer } from './ThemeProvider'
import { render } from '@testing-library/react'

describe('ThemeProvider', () => {
  it('should merge themes recursively', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeProvider theme={{ primary: 'thistle' }}>
          <ThemeProvider theme={{ text: 'rebeccapurple' }}>
            <ThemeConsumer>
              {({ primary, text, warn }) => (
                <div>
                  primary: {primary}, text: {text}, warn: {warn}
                </div>
              )}
            </ThemeConsumer>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>,
    )
    expect(container.textContent).toMatchInlineSnapshot(
      `"primary: thistle, text: rebeccapurple, warn: #e84c3d"`,
    )
  })
})

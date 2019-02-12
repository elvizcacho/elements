import React from 'react'
import ThemeProvider, { ThemeConsumer, withTheme } from './ThemeProvider'
import { render } from 'react-testing-library'

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
      </ThemeProvider>
    )
    expect(container.textContent).toMatchInlineSnapshot(
      `"primary: thistle, text: rebeccapurple, warn: #e84c3d"`
    )
  })

  it('should work with higher order component', () => {
    const MyComp = withTheme()(props => JSON.stringify(props, null, 2))

    const { container } = render(<MyComp />)

    expect(container.textContent).toMatchInlineSnapshot(`
"{
  \\"theme\\": {
    \\"primary\\": \\"#3598db\\",
    \\"text\\": \\"#333333\\",
    \\"secondaryText\\": \\"#626262\\",
    \\"titleColor\\": \\"#333333\\",
    \\"contrast\\": \\"#ffffff\\",
    \\"warn\\": \\"#e84c3d\\",
    \\"disabled\\": \\"#95a5a5\\",
    \\"background\\": \\"#f3f5f7\\",
    \\"textOnBackground\\": \\"#ffffff\\"
  }
}"
`)
  })
})

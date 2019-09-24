import * as React from 'react'
import Theme, { useTheme } from './Theme'
import ThemeProvider from '../ThemeProvider'
import { render } from '@testing-library/react'

describe('Theme consumer', () => {
  test('Theme component should render correct color', () => {
    const { container } = render(
      <ThemeProvider theme={{ warn: 'thistle' }}>
        <Theme>{({ colorize }) => colorize('warn')}</Theme>
      </ThemeProvider>,
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        thistle
      </div>
    `)
  })

  test('useTheme hook should provide correct theme', () => {
    const HookedThemedComponent = () => {
      const { theme } = useTheme()

      return <>{JSON.stringify(theme, null, 2)}</>
    }

    const { container } = render(
      <ThemeProvider>
        <ThemeProvider theme={{ primary: 'thistle', text: 'black' }}>
          <ThemeProvider theme={{ text: 'rebeccapurple' }}>
            <HookedThemedComponent />
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>,
    )

    expect(container).toMatchInlineSnapshot(`
      <div>
        {
        "primary": "thistle",
        "text": "rebeccapurple",
        "secondaryText": "#626262",
        "titleColor": "#333333",
        "contrast": "#ffffff",
        "warn": "#e84c3d",
        "disabled": "#95a5a5",
        "background": "#f3f5f7",
        "textOnBackground": "#ffffff"
      }
      </div>
    `)
  })

  test('useTheme hook should provide correct value for `colorize`', () => {
    const HookedThemedComponent = () => {
      const { colorize } = useTheme()

      return <>{JSON.stringify(colorize('warn'))}</>
    }
    const { container } = render(
      <ThemeProvider theme={{ warn: 'thistle' }}>
        <HookedThemedComponent />
      </ThemeProvider>,
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        "thistle"
      </div>
    `)
  })
})

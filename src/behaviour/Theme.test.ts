import React from 'react'
import renderer from 'react-test-renderer'
import Theme from './Theme'
import ThemeProvider from './ThemeProvider'

test('Should render correct color', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={{ primary: 'red' }}>
        <Theme>{({ colorize }) => colorize('warn')}</Theme>
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

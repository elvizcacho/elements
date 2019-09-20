import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from './Spinner'
import ThemeProvider from '../behaviour/ThemeProvider'

test('colorize Spinner correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={{ primary: '#000000' }}>
        <Spinner />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

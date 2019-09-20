import React from 'react'
import renderer from 'react-test-renderer'
import ListSpinner from './ListSpinner'
import ThemeProvider from '../../behaviour/ThemeProvider'

test('color passed down to ListSpinner correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={{ primary: '#000000' }}>
        <ListSpinner radius={50} />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

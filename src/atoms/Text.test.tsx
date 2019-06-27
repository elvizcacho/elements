import React from 'react'
import renderer from 'react-test-renderer'
import Text from './Text'
import ThemeProvider from '../behaviour/ThemeProvider'

test('Text renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Text />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

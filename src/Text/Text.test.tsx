import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../ThemeProvider'
import Text from './Text'

test('Text renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Text />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

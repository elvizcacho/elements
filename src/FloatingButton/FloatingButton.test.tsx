import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../ThemeProvider'
import FloatingButton from './FloatingButton'

test('Floating button renders without error', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <FloatingButton>Hello World</FloatingButton>
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

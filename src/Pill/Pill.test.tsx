import React from 'react'
import renderer from 'react-test-renderer'
import ThemeProvider from '../ThemeProvider'
import Pill from './Pill'

test('Pill renders without error', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Pill label="Important message" />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Pill renders with custom color', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Pill label="Important message" color="warn" />
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

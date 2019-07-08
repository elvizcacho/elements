import React from 'react'
import renderer from 'react-test-renderer'
import CardButton from './CardButton'
import { ThemeProvider } from '../..'

test('CardButton renders without error', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <CardButton onClick={_ => _} backgroundColor="primary">
          Click me
        </CardButton>
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('CardButton renders custom color', () => {
  const tree = renderer
    .create(<CardButton backgroundColor="#f0f0f0">Click me</CardButton>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

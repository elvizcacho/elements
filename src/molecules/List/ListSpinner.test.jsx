import React from 'react'
import renderer from 'react-test-renderer'
import ListSpinner from './ListSpinner'

test('color passed down to ListSpinner correctly', () => {
  const tree = renderer
    .create(<ListSpinner color="#000000" radius={50} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

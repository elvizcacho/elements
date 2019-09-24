import React from 'react'
import renderer from 'react-test-renderer'
import Line from './Line'

test('Line renders correctly', () => {
  const tree = renderer.create(<Line color="green" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Line renders in different color', () => {
  const tree = renderer.create(<Line color="red" />).toJSON()
  expect(tree).toMatchSnapshot()
})

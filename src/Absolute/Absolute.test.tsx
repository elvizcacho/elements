import React from 'react'
import renderer from 'react-test-renderer'
import Absolute from './Absolute'

test('Absolute renders without error', () => {
  const tree = renderer.create(<Absolute top={3} left={2} right={1} />).toJSON()
  expect(tree).toMatchSnapshot()
})

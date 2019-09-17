import * as React from 'react'
import renderer from 'react-test-renderer'
import Circle from './Circle'

test('Circle renders without error', () => {
  const tree = renderer
    .create(<Circle color="pink" fill={true} radius={5} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

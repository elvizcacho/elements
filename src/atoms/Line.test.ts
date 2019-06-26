import React from 'react'
import renderer from 'react-test-renderer'
import Line from './Line'

test('Line renders correctly', () => {
  const tree = renderer.create(
    <Line />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

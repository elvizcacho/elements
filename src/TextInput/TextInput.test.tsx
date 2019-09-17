import * as React from 'react'
import renderer from 'react-test-renderer'
import TextInput from './TextInput'

function createNodeMock() {
  return {
    value: '',
    length: 0,
    setCustomValidity: (_: any) => _,
  }
}

test('TextInput renders', () => {
  const tree = renderer
    .create(
      <TextInput
        name="email"
        label="E-Mail"
        type="email"
        placeholder="E-Mail"
        required
      />,
      { createNodeMock },
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

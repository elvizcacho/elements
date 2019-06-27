import React from 'react'
import renderer from 'react-test-renderer'
import Input from './Input'

function createNodeMock() {
  return {
    value: 'Hello',
    length: 5,
    validity: {},
    setCustomValidity: (_: any) => _,
  }
}

describe('Input component', () => {
  test('should render with all props', () => {
    const tree = renderer
      .create(
        <Input
          type="tel"
          label="label"
          required={true}
          name="name"
          minLength={1}
          maxLength={1}
          value="value"
          hasRightIcon
          pattern="pattern"
          icon="alarm"
          defaultValue="defaultValue"
        />,
        {
          createNodeMock,
        }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render with required props only', () => {
    const tree = renderer
      .create(<Input required={false} name="name" />, { createNodeMock })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

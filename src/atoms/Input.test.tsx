import React from 'react'
import renderer from 'react-test-renderer'
import Input from './Input'
import genProps from 'react-generate-props'

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
    const props = genProps(Input, { optional: true })
    const tree = renderer
      .create(<Input {...props} />, { createNodeMock })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render with required props only', () => {
    const props = genProps(Input)
    const tree = renderer
      .create(<Input {...props} />, { createNodeMock })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

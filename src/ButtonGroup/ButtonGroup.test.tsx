import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button'
import ButtonGroup from './ButtonGroup'

describe('ButtonGroup', () => {
  it('should render button group', () => {
    const tree = renderer
      .create(
        <ButtonGroup>
          <Button secondary>Cancel</Button>
          <Button>Accept</Button>
        </ButtonGroup>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

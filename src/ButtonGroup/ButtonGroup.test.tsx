import * as React from 'react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button'
import renderer from 'react-test-renderer'

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

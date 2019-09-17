import * as React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'
import ThemeProvider from '../ThemeProvider'

describe('Button component', () => {
  test('Renders without anything', () => {
    const tree = renderer.create(<Button>Hi</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders a callback anything', () => {
    const tree = renderer.create(<Button onClick={_ => _}>Hi</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('doesnt render the callback if disabled', () => {
    const tree = renderer
      .create(
        <Button disabled onClick={_ => _}>
          Hi
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders in different colors', () => {
    const tree = renderer
      .create(
        <Button
          name="asd"
          color="primary"
          backgroundColor="warn"
          onClick={_ => _}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Change color to green', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={{ warn: 'green' }}>
          <Button name="asd" backgroundColor="warn" onClick={_ => _} />
        </ThemeProvider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

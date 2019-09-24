import React from 'react'
import renderer from 'react-test-renderer'
import CardButton from '../CardButton'
import CardContent from '../CardContent'
import CardFooter from '../CardFooter'
import Text from '../Text'
import ThemeProvider from '../ThemeProvider'
import Card from './Card'

test('Card renders without error', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Card renders as full example', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Card>
          <CardContent>
            <Text size="xl" strong>
              Cards
            </Text>
            <Text>
              Cards are the basic elements to fit content in. They can may
              contain any kind of content.
            </Text>
          </CardContent>
          <CardFooter>
            <CardButton>Hi</CardButton>
          </CardFooter>
        </Card>
      </ThemeProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

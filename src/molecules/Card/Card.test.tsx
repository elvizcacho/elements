import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'
import CardContent from './CardContent'
import Text from '../../atoms/Text'
import CardFooter from './CardFooter'
import CardButton from './CardButton'
import { ThemeProvider } from '../..'

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
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

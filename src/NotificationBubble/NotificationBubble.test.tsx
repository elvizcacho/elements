import React from 'react'
import renderer from 'react-test-renderer'
import ResourceProvider from '../ResourceProvider'
import ThemeProvider from '../ThemeProvider'
import NotificationBubble from './NotificationBubble'

test('NotificationBubble renders without error', () => {
  const tree = renderer
    .create(
      <ResourceProvider>
        <ThemeProvider>
          <NotificationBubble>Hello World</NotificationBubble>
        </ThemeProvider>
      </ResourceProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

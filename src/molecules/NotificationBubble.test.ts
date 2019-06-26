import React from 'react'
import renderer from 'react-test-renderer'
import NotificationBubble from './NotificationBubble'
import ThemeProvider from '../behaviour/ThemeProvider'
import ResourceProvider from '../behaviour/ResourceProvider'

test('NotificationBubble renders without error', () => {
  const tree = renderer
    .create(
      <ResourceProvider>
        <ThemeProvider>
          <NotificationBubble>Hello World</NotificationBubble>
        </ThemeProvider>
      </ResourceProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

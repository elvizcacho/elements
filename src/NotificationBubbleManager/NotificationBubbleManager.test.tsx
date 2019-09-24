import { act, render } from '@testing-library/react'
import React from 'react'
import NotificationBubble from '../NotificationBubble'
import ResourceProvider from '../ResourceProvider'
import NotificationBubbleManager, {
  sendSuccess,
} from './NotificationBubbleManager'

test('NotificationBubbleManager renders the bubble', () => {
  const renderBubble = jest.fn(props => (
    <NotificationBubble data-testid="test" {...props} />
  ))

  const { getByTestId } = render(
    <ResourceProvider>
      <NotificationBubbleManager renderBubble={renderBubble}>
        <div>Test</div>
      </NotificationBubbleManager>
    </ResourceProvider>,
  )

  const successMessage = 'this was a success'
  act(() => {
    sendSuccess(successMessage)
  })

  expect(getByTestId('test').textContent).toEqual(successMessage)
})

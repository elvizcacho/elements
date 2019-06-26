import React from 'react'
import renderer from 'react-test-renderer'
import NotificationBubbleManager, {
  sendSuccess,
} from './NotificationBubbleManager'
import NotificationBubble from '../molecules/NotificationBubble'
import ResourceProvider from '../behaviour/ResourceProvider'

test('NotificationBubbleManager renders the bubble', () => {
  const renderBubble = jest.fn(props => <NotificationBubble {...props} />)

  const nbm = (
    <ResourceProvider>
      <NotificationBubbleManager renderBubble={renderBubble}>
        <div>Test</div>
      </NotificationBubbleManager>
    </ResourceProvider>
  )

  const tree = renderer.create(nbm)
  sendSuccess('success')
  tree.update(nbm)
  expect(renderBubble).toBeCalled()
  expect(tree).toMatchSnapshot()
})

import mitt, { Handler } from 'mitt'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import Message from '../Message'
import NotificationBubble from '../NotificationBubble'
import View, { IViewProps } from '../View'

const emitter = mitt()

const send = (message: string, type: string) => {
  emitter.emit(type, message)
}

export const sendSuccess = (message: string) => send(message, 'success')
export const sendWarning = (message: string) => send(message, 'warning')
export const sendInfo = (message: string) => send(message, 'info')

interface INotificationBubbleManager {
  readonly renderBubble?: ({
    key,
    onTimeout,
    children,
  }: {
    key: number
    onTimeout: () => void
    children: string
  }) => ReactNode
}

const NotificationBubbleManager = ({
  children,
  renderBubble,
  ...props
}: INotificationBubbleManager & IViewProps) => {
  const [messages, setMessages] = useState<Message[]>([])

  const handleEvent = useCallback(
    (type, message) =>
      setMessages(messages => [...messages, new Message(type, message)]),
    [],
  )

  const handleTimeout = useCallback(
    () => setMessages(messages => messages.slice(1)),
    [],
  )

  const doRenderBubble = useCallback(
    (message: Message) =>
      renderBubble ? (
        renderBubble({
          key: message.id,
          onTimeout: handleTimeout,
          children: message.text,
        })
      ) : (
        <NotificationBubble key={message.id} onTimeout={handleTimeout}>
          {message.text}
        </NotificationBubble>
      ),
    [handleTimeout, renderBubble],
  )

  useEffect(() => {
    emitter.on('*', handleEvent as Handler)

    return () => emitter.off('*', handleEvent as Handler)
  }, [handleEvent])

  const message = messages[0]

  return (
    <View {...props}>
      {message && doRenderBubble(message)}
      {children}
    </View>
  )
}

export default NotificationBubbleManager

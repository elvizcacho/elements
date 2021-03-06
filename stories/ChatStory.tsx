import { alpha, ColorPalette } from '@allthings/colors'
import { css } from 'glamor'
import React, { useEffect, useRef, useState } from 'react'
import { ChatBubble, ExpandingTextarea, Icon, View } from '../src'

class Message {
  text: string
  date: Date

  constructor(text: string) {
    this.text = text
    this.date = new Date()
  }
}

const ChatStory = () => {
  const [messages, setMessages] = useState<readonly Message[]>([
    new Message('Hey, how may I help you? 😎'),
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaHeight, setTextareaHeight] = useState(0)

  const addMessage = () => {
    const message = new Message(currentMessage.trim())
    setMessages(messages => [...messages, message])
    setCurrentMessage('')
  }

  const handleClickMessage = (text: string) => {
    setCurrentMessage(`> ${text}\n`)
    textareaRef.current && textareaRef.current.focus()
  }

  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight
  }, [messages, textareaHeight])

  return (
    <View
      {...css({ height: '100%', position: 'relative', overflow: 'hidden' })}
    >
      <View
        {...css({
          overflow: 'auto',
          height: `calc(100% - ${textareaHeight}px)`,
          padding: 10,
        })}
        ref={scrollRef}
      >
        {messages.map((message, index) => (
          <ChatBubble
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            userImage={
              index === 0
                ? 'https://avatars.dicebear.com/v2/bottts/help.svg'
                : 'https://avatars.dicebear.com/v2/bottts/beautiful-user.svg'
            }
            userName={index === 0 ? 'James' : 'me'}
            date={message.date.toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
            text={
              <View
                title="Click to quote this message"
                onClick={() => handleClickMessage(message.text)}
              >
                {message.text}
              </View>
            }
            background={
              index === 0
                ? alpha(ColorPalette.blueIntense, 0.5, true)
                : alpha(ColorPalette.white, 0.5, true)
            }
            direction={index === 0 ? 'right' : 'left'}
          />
        ))}
      </View>
      <View
        {...css({ position: 'absolute', bottom: 0, width: '100%' })}
        direction="row"
        alignV="stretch"
      >
        <ExpandingTextarea
          ref={textareaRef}
          placeholder={`Enter your message`}
          autoFocus
          value={currentMessage}
          onChange={e => setCurrentMessage(e.target.value)}
          onHeightChange={height => setTextareaHeight(height)}
          onKeyDown={e => {
            if (e.metaKey && e.keyCode === 13) {
              addMessage()
            }
          }}
        />
        <View
          alignV="center"
          alignH="center"
          direction="row"
          {...css({ minWidth: 40 })}
          onClick={addMessage}
        >
          <Icon name="arrow-right" size="xs" color="grey" />
        </View>
      </View>
    </View>
  )
}

export default ChatStory

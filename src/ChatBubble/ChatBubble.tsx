import React, { FunctionComponent, ReactNode } from 'react'
import { css } from 'glamor'
import Text from '../Text'
import ProfileImage from '../ProfileImage'
import Theme from '../Theme'

const styles = {
  reply: css({ padding: '0 15px 15px 15px' }),
  title: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  titleReversed: css({
    flexDirection: 'row-reverse',
  }),
  user: css({
    fontWeight: 'bold',
    opacity: 0.5,
  }),
  time: css({
    opacity: 0.5,
  }),
  content: css({
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  contentReversed: css({
    flexDirection: 'row-reverse',
  }),
  image: css({ flexShrink: 0 }),
  outerText: (background: string) =>
    css({
      paddingLeft: 15,
      flex: 1,
      position: 'relative',
      ':before': {
        content: '""',
        background: 'transparent',
        position: 'absolute',
        left: 10,
        top: 15,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '6px 5px 6px 0',
        borderColor: `transparent ${background} transparent transparent`,
      },
    }),
  outerTextReversed: (background: string) =>
    css({
      paddingLeft: 0,
      paddingRight: 15,
      ':before': {
        left: 'initial',
        right: 10,
        borderWidth: '6px 0 6px 5px',
        borderColor: `transparent transparent transparent ${background}`,
      },
    }),
  textContainer: css({
    padding: 10,
    borderRadius: 6,
    boxShadow: '2px 3px 3px 0px rgba(211, 211, 211, .25)',
  }),
  text: css({
    whiteSpace: 'pre-wrap',
    '& a': {
      color: '#fff',
      textDecoration: 'underline',
    },
  }),
}

interface IChatBubbleProps {
  /* Name of the person who wrote the message */
  readonly userName: string
  /* Profile image of person who wrote the message */
  readonly userImage: string
  /* Date when the message was send */
  readonly date: ReactNode
  /* Text of the message */
  readonly text: ReactNode
  /* Background color of chat message */
  readonly background: string
  /* Position of profile image and name */
  readonly direction: 'left' | 'right'
}

/**
 * ChatBubbles are used to show conversations between two or more users.
 *
 * ```example
 * <ThemeProvider>
 *   <View>
 *     <ChatBubble
 *       text="Hello World"
 *       userName="You"
 *       userImage="https://placeimg.com/40/40/people?t=3"
 *       date="a minute ago"
 *     />
 *     <ChatBubble
 *       direction="right"
 *       text="Hello You"
 *       userName="Agent"
 *       userImage="https://placeimg.com/40/40/people?t=1"
 *       date="just now"
 *     />
 *   </View>
 * </ThemeProvider>
 * ```
 */
const ChatBubble: FunctionComponent<IChatBubbleProps> = ({
  userName,
  userImage,
  date,
  background = 'white',
  direction = 'left',
  text,
}) => {
  const isReversed = direction === 'right'

  return (
    <Theme>
      {({ colorize }) => (
        <div {...styles.reply}>
          <div
            className="info"
            {...css(styles.title, isReversed && styles.titleReversed)}
          >
            <Text size="s" {...styles.user}>
              {userName}
            </Text>
            <Text size="s" {...styles.time}>
              {date}
            </Text>
          </div>
          <div
            className="content"
            {...css(styles.content, isReversed && styles.contentReversed)}
          >
            <div className="image" {...styles.image}>
              <ProfileImage size="m" image={userImage} />
            </div>
            <div
              {...css(
                styles.outerText(background),
                isReversed && styles.outerTextReversed(background),
              )}
            >
              <div
                {...css(styles.textContainer, {
                  background: colorize(background),
                })}
              >
                <Text {...css(styles.text)}>{text}</Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </Theme>
  )
}

export default ChatBubble

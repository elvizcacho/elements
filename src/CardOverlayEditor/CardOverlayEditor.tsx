import { css } from 'glamor'
import React, { ChangeEvent, Component, createRef } from 'react'
import { between } from '../Card/utils/math'
import CardButton from '../CardButton'
import CardFooter from '../CardFooter'
import ExpandingTextarea from '../ExpandingTextarea'
import Text from '../Text'
import View from '../View'

const styles = {
  wrapper: css({
    position: 'absolute',
    left: 0,
    boxShadow: '0 0 0 99999px rgba(0,0,0,0.5)',
    width: '100%',
    zIndex: 2,
    background: '#fff',
  }),
}

interface ICardOverlayEditorProps {
  readonly initialText?: string
  readonly confirmText: string
  readonly cancelText: string
  readonly submitText: string
  readonly onSave: (text: string | undefined) => void
  readonly onRequestClose?: () => void
}

interface IState {
  text?: string
}

export default class CardOverlayEditor extends Component<
  ICardOverlayEditorProps,
  IState
> {
  public element = createRef<HTMLDivElement>()

  constructor(props: ICardOverlayEditorProps) {
    super(props)

    this.state = {
      text: props.initialText,
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true)
  }

  isOutsideElement = (
    { x, y }: { x: number; y: number },
    {
      top,
      bottom,
      left,
      right,
    }: { top: number; bottom: number; left: number; right: number },
  ) => {
    return !between(y, top, bottom) || !between(x, left, right)
  }

  handleClick = (e: MouseEvent) => {
    if (this.element.current) {
      const {
        bottom,
        left,
        right,
        top,
      } = this.element.current.getBoundingClientRect()

      if (
        this.isOutsideElement(
          { x: e.clientX, y: e.clientY },
          { bottom, left, right, top },
        )
      ) {
        e.stopPropagation()
        this.triggerClose()
        return false
      }
    }
    return true
  }

  triggerClose = () => {
    if (
      !this.state.text ||
      (this.state.text && window.confirm(this.props.confirmText))
    ) {
      this.props.onRequestClose && this.props.onRequestClose()
    }
  }

  handleSave = () => this.props.onSave(this.state.text)

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    this.setState(() => ({ text }))
  }

  render() {
    return (
      <View ref={this.element} {...css(styles.wrapper)}>
        <View {...css({ padding: 15 })}>
          <ExpandingTextarea
            value={this.state.text}
            onChange={this.handleChange}
            {...css({ padding: 0, color: '#333' })}
            autoFocus
          />
        </View>
        <CardFooter>
          <CardButton onClick={this.triggerClose}>
            <Text size="m" color="#626262">
              {this.props.cancelText}
            </Text>
          </CardButton>
          <CardButton onClick={this.handleSave}>
            <Text size="m" color="#626262">
              {this.props.submitText}
            </Text>
          </CardButton>
        </CardFooter>
      </View>
    )
  }
}

import React, { ChangeEvent, Component, createRef } from 'react'
import { css } from 'glamor'
import View from '../View'

const styles = {
  textarea: css({
    outline: 'none',
    border: 0,
    fontSize: 13,
    resize: 'none',
    flex: 1,
    minHeight: 20,
    maxHeight: '25vh',
    width: '100%',
    paddingLeft: 15,
  }),
}

interface IExpandingTextareaProps {
  autoFocus?: boolean
  placeholder?: string
  name?: string
  onHeightChange?: (height: number) => void
  containerStyle?: any
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  onFocus?: () => void
}

/**
 * The height of the ExpandingTextarea will expand when the user adds a new line.
 * It will take at maximum 25% of the current viewport. (max-height: 25vh)
 *
 * ```example
 * <ExpandingTextarea
 *   placeholder="Write somthing..."
 *   value=""
 * />
 * ```
 */
export default class ExpandingTextarea extends Component<
  IExpandingTextareaProps
> {
  static defaultProps = {
    autoFocus: false,
  }
  private textarea = createRef<HTMLTextAreaElement>()

  componentDidMount() {
    this.adjustTextareaHeight()
  }

  componentDidUpdate(prevProps: IExpandingTextareaProps) {
    if (this.props.value !== prevProps.value) {
      this.adjustTextareaHeight()
    }
    if (
      this.props.autoFocus === true &&
      prevProps.autoFocus === false &&
      this.textarea.current
    ) {
      this.textarea.current.focus()
      this.props.onFocus && this.props.onFocus()
    }
  }

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange && this.props.onChange(e)
    this.adjustTextareaHeight()
  }

  adjustTextareaHeight = () => {
    const { current: textarea } = this.textarea
    if (textarea) {
      const { onHeightChange } = this.props

      textarea.style.height = '0'
      textarea.style.height = `${textarea.scrollHeight}px`

      if (onHeightChange) {
        const actualHeight = Math.min(
          textarea.scrollHeight,
          textarea.offsetHeight,
        )
        onHeightChange(actualHeight)
      }
    }
  }

  render() {
    const { placeholder, containerStyle, ...restProps } = this.props

    return (
      <View
        {...css(containerStyle)}
        alignV="center"
        flex="flex"
        direction="row"
      >
        <textarea
          {...restProps}
          cols={1}
          rows={1}
          placeholder={placeholder}
          onChange={this.handleChange}
          ref={this.textarea}
          {...styles.textarea}
        />
      </View>
    )
  }
}

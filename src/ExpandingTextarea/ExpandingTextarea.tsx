import { css } from 'glamor'
import React, {
  AllHTMLAttributes,
  ChangeEvent,
  Component,
  createRef,
} from 'react'
import { createTextStyles } from '../Text'
import View from '../View'

const styles = {
  textarea: css(
    {
      outline: 'none',
      border: 0,
      fontSize: 13,
      resize: 'none',
      flex: 1,
      minHeight: 20,
      maxHeight: '25vh',
      width: '100%',
      padding: '12px 0 6px 15px',
    },
    createTextStyles(),
  ),
}

interface IExpandingTextareaProps
  extends AllHTMLAttributes<HTMLTextAreaElement> {
  readonly autoFocus?: boolean
  readonly placeholder?: string
  readonly name?: string
  readonly onHeightChange?: (height: number) => void
  readonly containerStyle?: any
  readonly onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  readonly value?: string
  readonly onFocus?: () => void
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
  private textarea = createRef<HTMLTextAreaElement>()

  componentDidMount() {
    this.adjustTextareaHeight()
  }

  componentDidUpdate(prevProps: IExpandingTextareaProps) {
    if (this.props.value !== prevProps.value) {
      this.adjustTextareaHeight()
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

import { css } from 'glamor'
import React, {
  AllHTMLAttributes,
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { createTextStyles } from '../Text'
import View from '../View'
import { useCombinedRefs } from '../utils/hooks/useCombinedRefs'

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
  readonly onHeightChange?: (height: number) => void
  readonly containerStyle?: any
  readonly onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
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

const ExpandingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  IExpandingTextareaProps
>(({ onHeightChange, onChange, containerStyle, ...props }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const combinedRefs = useCombinedRefs(ref, textareaRef)

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current

    if (textarea) {
      // this double assigning value is on purpose as it will cause the layout to reflow
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
  }, [onHeightChange])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(e)
      adjustTextareaHeight()
    },
    [adjustTextareaHeight, onChange],
  )

  useEffect(() => {
    adjustTextareaHeight()
  }, [adjustTextareaHeight, props.value])

  return (
    <View {...css(containerStyle)} alignV="center" flex="flex" direction="row">
      <textarea
        {...props}
        {...styles.textarea}
        ref={combinedRefs}
        cols={1}
        rows={1}
        onChange={handleChange}
      />
    </View>
  )
})

export default ExpandingTextarea

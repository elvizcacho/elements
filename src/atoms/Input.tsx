import React, { useEffect, useState, Fragment } from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import Relative from '../atoms/Relative'
import Text, { createTextStyles } from '../atoms/Text'
import Icon, { IconType } from '../atoms/Icon'
import Absolute from './Absolute'

const styles = {
  input: (showLabel: boolean, translated: boolean, paddingRight: boolean) =>
    css(createTextStyles({ size: 'm' }), {
      boxSizing: 'border-box',
      height: 50,
      width: '100%',
      padding: '0 15px',
      paddingLeft: translated && 40,
      paddingTop: showLabel ? 10 : 0,
      paddingRight: paddingRight ? 50 : 15,
      transition: 'padding-top .225s ease-out',
      border: 0,
      '&:-webkit-autofill ~ .label': {
        opacity: '1 !important',
        top: '8px !important',
      },
      '&:-webkit-autofill ~ .checkmark': {
        opacity: '1 !important',
        top: 8,
      },
      '&:-webkit-autofill': {
        paddingTop: '10px !important',
      },
    }),
  area: (lines: number, showLabel: boolean) =>
    css(createTextStyles({ size: 'm' }), {
      boxSizing: 'border-box',
      transition: 'padding-top .225s ease-out',
      height: `calc(30px*${lines})`,
      width: '100%',
      padding: '10px 15px',
      paddingTop: showLabel ? 20 : 10,
      fontSize: '14px',
      border: 0,
      ':invalid:focus': {
        color: 'red',
      },
    }),
  arrow: css({
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    marginLeft: '-10px',
    display: 'block',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #c1392b',
  }),
  checkmark: (show: boolean) =>
    css({
      position: 'absolute',
      top: 16,
      right: 15,
      pointerEvents: 'none',
      transition: 'opacity .225s',
      opacity: show ? 1 : 0,
    }),
  required: css({
    position: 'absolute',
    right: 10,
  }),
  label: (translated: boolean) =>
    css({
      position: 'absolute',
      left: translated ? 40 : 15,
      fontSize: 10,
      opacity: 0,
      transition: 'all .225s ease-out',
    }),
  placeholder: css({
    position: 'absolute',
    bottom: 2,
    right: 15,
  }),
}

const validityStates = [
  'badInput',
  'customError',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valueMissing',
]

type validityStateType =
  | 'badInput'
  | 'customError'
  | 'patternMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'typeMismatch'
  | 'valueMissing'

interface IProps extends IValidityStates {
  /** The default value to put into the component, without making it controlled */
  defaultValue?: string
  /** Indicates that this field is required */
  required?: boolean
  /** Icon shown on the left of the input field (See `Icon` component for all possible values) **/
  icon?: IconType
  /** The name of this input field */
  name?: string
  /** The label of the input */
  label?: string
  /** Type, can be: 'tel', 'number', 'text', 'url', 'email' */
  type?:
    | 'tel'
    | 'number'
    | 'text'
    | 'url'
    | 'email'
    | 'password'
    | 'date'
    | 'datetime-local'
  /** Called, when the user changes something */
  onChange?: any
  /** The value, makes this component a controlled component */
  value?: string
  /** Can only be used with type=text. Increase to enable multi-line input */
  lines?: number
  /** Used when there is an icon to the right of input field */
  hasRightIcon?: boolean
  /** Regular expression to validate against */
  pattern?: string
  /** Min number of characters that must be provided */
  minLength?: number
  /** Max number of characters that can be provided */
  maxLength?: number
  /** Called with the input field a reference */
  onInputRef?: any
  readOnly?: boolean
  disabled?: boolean
}

interface IValidityStates {
  /** Error message for bad input */
  badInput?: string
  /** Error message for customError */
  customError?: string
  /** Error message for patternMismatch */
  patternMismatch?: string
  /** Error message for rangeOverflow */
  rangeOverflow?: string
  /** Error message for rangeUnderflow */
  rangeUnderflow?: string
  /** Error message for stepMismatch */
  stepMismatch?: string
  /** Error message for tooLong */
  tooLong?: string
  /** Error message for tooShort */
  tooShort?: string
  /** Error message for typeMismatch */
  typeMismatch?: string
  /** Error message for valueMissing */
  valueMissing?: string
}

const setValidity = (
  target: HTMLInputElement | HTMLTextAreaElement,
  customValidityStates: IValidityStates
) => {
  let customValidity = ''
  validityStates.forEach((state: validityStateType) => {
    if (
      customValidity === '' &&
      customValidityStates[state] &&
      target.validity[state]
    ) {
      customValidity = customValidityStates[state] as string
    }
  })

  target && target.setCustomValidity && target.setCustomValidity(customValidity)
}

/**
 * TextInputs are used to allow users to enter information like names, numbers, urls, email addresses or passwords.
 *
 * ```example
 * <TextInput name="email" type="email" placeholder="Your email" required />
 * <TextInput name="inquiry" lines={5} placeholder="Your question" maxLength={255} minLength={50} />
 * ```
 */

const Input = ({
  required = false,
  onInputRef,
  lines = 1,
  label,
  pattern,
  badInput,
  customError,
  hasRightIcon,
  patternMismatch,
  rangeOverflow,
  rangeUnderflow,
  stepMismatch,
  tooLong,
  type = 'text',
  tooShort,
  typeMismatch,
  valueMissing,
  icon,
  ...props
}: IProps & React.HTMLAttributes<HTMLElement>) => {
  const isTextArea = lines !== 1
  const [value, setValue] = useState('')
  const [length, setLength] = useState((props.value && props.value.length) || 0)
  const currentValue = props.value || value
  const labelVisible = currentValue.length > 0
  const showLabel = !!(label && currentValue.length > 0)
  const inputRef = React.createRef<HTMLInputElement>()
  const textareaRef = React.createRef<HTMLTextAreaElement>()
  const isCheckmarkActive =
    (pattern || props.minLength || props.maxLength || required) &&
    inputRef.current &&
    inputRef.current.validity &&
    inputRef.current.validity.valid

  const customValidity = {
    rangeOverflow,
    rangeUnderflow,
    stepMismatch,
    tooLong,
    tooShort,
    typeMismatch,
    valueMissing,
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValidity(e.target, customValidity)
    setLength(e.target.value.length)
    setValue(e.target.value)
    props.onChange && props.onChange(e)
  }

  useEffect(() => {
    const input = isTextArea ? textareaRef.current : inputRef.current
    if (input) {
      setLength(input.value && input.value.length ? input.value.length : 0)
      onInputRef && onInputRef(input)
      setValidity(input, customValidity)
    }
  })

  return (
    <Relative style={{ width: '100%' }}>
      {!isTextArea ? (
        <Fragment>
          {icon && (
            <Absolute
              {...css({ pointerEvents: 'none' })}
              top={0}
              bottom={0}
              left={15}
              alignV="center"
              direction="row"
            >
              <Icon color="secondaryText" name={icon} size={16} />
            </Absolute>
          )}
          <input
            type={type}
            ref={inputRef}
            {...styles.input(
              showLabel,
              !!icon,
              Boolean(isCheckmarkActive || hasRightIcon)
            )}
            required={required}
            aria-required={required}
            {...props}
            onChange={handleChange}
            pattern={pattern}
          />
        </Fragment>
      ) : (
        <textarea
          ref={textareaRef}
          {...styles.area(lines, showLabel)}
          required={required}
          {...props}
          onChange={handleChange}
        />
      )}
      {label && (
        <View
          className="label"
          {...styles.label(!!icon && lines === 1)}
          style={{
            opacity: labelVisible ? 1 : 0,
            top: labelVisible ? 8 : 12,
          }}
        >
          <Text color="secondaryText" size="xs">
            {label} {required && '*'}
          </Text>
        </View>
      )}

      <View className="checkmark" {...styles.checkmark(!!isCheckmarkActive)}>
        <Icon name="check-filled" size="xs" color="lightGrey" />
      </View>

      {props.maxLength && (
        <View {...styles.placeholder}>
          <Text color="secondaryText" size="s">
            {length}/{props.maxLength}
          </Text>
        </View>
      )}
    </Relative>
  )
}

export default Input

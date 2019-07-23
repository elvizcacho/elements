import React, {
  useEffect,
  useState,
  Fragment,
  AllHTMLAttributes,
  FunctionComponent,
  forwardRef,
  useCallback,
  useRef,
} from 'react'
import View from '../View'
import { css } from 'glamor'
import Relative from '../Relative'
import Text, { createTextStyles } from '../Text'
import Icon, { IconType } from '../Icon'
import Absolute from '../Absolute'
import { useCombinedRefs } from '../utils/hooks/useCombinedRefs'

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
] as const

type validityStateType = typeof validityStates[number]

export interface IInputProps
  extends IValidityStates,
    AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /** The default value to put into the component, without making it controlled */
  readonly defaultValue?: string | string[]
  /** Indicates that this field is required */
  readonly required?: boolean
  /** Icon shown on the left of the input field (See `Icon` component for all possible values) **/
  readonly icon?: IconType
  /** The name of this input field */
  readonly name?: string
  /** The label of the input */
  readonly label?: string
  /** Type, can be: 'tel', 'number', 'text', 'url', 'email' */
  readonly type?:
    | 'tel'
    | 'number'
    | 'text'
    | 'url'
    | 'email'
    | 'password'
    | 'date'
    | 'datetime-local'
    | string
  /** Called, when the user changes something */
  readonly onChange?: any
  /** The value, makes this component a controlled component */
  readonly value?: string | string[] | number
  /** Can only be used with type=text. Increase to enable multi-line input */
  readonly lines?: number
  /** Used when there is an icon to the right of input field */
  readonly hasRightIcon?: boolean
  /** Regular expression to validate against */
  readonly pattern?: string
  /** Min number of characters that must be provided */
  readonly minLength?: number
  /** Max number of characters that can be provided */
  readonly maxLength?: number
  /** Called with the input field a reference */
  readonly onInputRef?: any
  readonly readOnly?: boolean
  readonly disabled?: boolean
  readonly forwardedRef?: any
}

interface IValidityStates {
  /** Error message for bad input */
  readonly badInput?: string
  /** Error message for customError */
  readonly customError?: string
  /** Error message for patternMismatch */
  readonly patternMismatch?: string
  /** Error message for rangeOverflow */
  readonly rangeOverflow?: string
  /** Error message for rangeUnderflow */
  readonly rangeUnderflow?: string
  /** Error message for stepMismatch */
  readonly stepMismatch?: string
  /** Error message for tooLong */
  readonly tooLong?: string
  /** Error message for tooShort */
  readonly tooShort?: string
  /** Error message for typeMismatch */
  readonly typeMismatch?: string
  /** Error message for valueMissing */
  readonly valueMissing?: string
}

const setValidity = (
  target: HTMLInputElement | HTMLTextAreaElement,
  customValidityStates: IValidityStates,
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

const Input: FunctionComponent<IInputProps> = ({
  required = false,
  forwardedRef,
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
}) => {
  const internalRef = useRef<any>(null)
  const isTextArea = lines !== 1
  const [value, setValue] = useState('')
  const [length, setLength] = useState(
    (typeof props.value === 'string' && props.value.length) || 0,
  )
  const currentValue = (props.value || value) as string
  const labelVisible = currentValue.length > 0
  const showLabel = !!(label && currentValue.length > 0)

  const isCheckmarkActive = Boolean(
    (pattern || props.minLength || props.maxLength || required) &&
      internalRef &&
      internalRef.current &&
      internalRef.current.validity &&
      internalRef.current.validity.valid,
  )

  const customValidity = {
    rangeOverflow,
    rangeUnderflow,
    stepMismatch,
    tooLong,
    tooShort,
    typeMismatch,
    valueMissing,
  }

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setValidity(e.target, customValidity)
      setLength(e.target.value.length)
      setValue(e.target.value)
      props.onChange && props.onChange(e)
    },
    [customValidity, props],
  )

  useEffect(() => {
    const input = internalRef.current
    if (input) {
      setLength(input.value && input.value.length ? input.value.length : 0)
      setValidity(input, customValidity)
    }
  }, [isTextArea, customValidity])

  const combinedRef = useCombinedRefs(internalRef, forwardedRef)

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
            ref={combinedRef}
            {...styles.input(
              showLabel,
              !!icon,
              Boolean(isCheckmarkActive || hasRightIcon),
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
          ref={combinedRef}
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

      <View className="checkmark" {...styles.checkmark(isCheckmarkActive)}>
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

export default forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <Input {...props} forwardedRef={ref} />
))

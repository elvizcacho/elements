import React, { Fragment } from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Relative from '../atoms/Relative'
import Text, { createTextStyles } from '../atoms/Text'
import Icon, { Icons as AvailableIcons } from '../atoms/Icon'
import Absolute from './Absolute'

const styles = {
  input: (showLabel, translated, paddingRight) =>
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
  area: (lines, showLabel) =>
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
  checkmark: show =>
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
  label: translated =>
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

/**
 * TextInputs are used to allow users to enter information like names, numbers, urls, email addresses or passwords.
 *
 * ```example
 * <TextInput name="email" type="email" placeholder="Your email" required />
 * <TextInput name="inquiry" lines={5} placeholder="Your question" maxLength={255} minLength={50} />
 * ```
 */
class Input extends React.Component {
  static propTypes = {
    /** The default value to put into the component, without making it controlled */
    defaultValue: PropTypes.string,
    /** Indicates that this field is required */
    required: PropTypes.bool,
    /** Icon shown on the left of the input field (See `Icon` component for all possible values) **/
    icon: PropTypes.oneOf(AvailableIcons),
    /** The name of this input field */
    name: PropTypes.string.isRequired,
    /** The label of the input */
    label: PropTypes.string,
    /** Type, can be: 'tel', 'number', 'text', 'url', 'email' */
    type: PropTypes.oneOf([
      'tel',
      'number',
      'text',
      'url',
      'email',
      'password',
      'date',
      'datetime-local',
    ]),
    /** Called, when the user changes something */
    onChange: PropTypes.func,
    /** The value, makes this component a controlled component */
    value: PropTypes.string,
    /** Can only be used with type=text. Increase to enable multi-line input */
    lines: PropTypes.number,
    /** Used when there is an icon to the right of input field */
    paddingRight: PropTypes.bool,
    /** Regular expression to validate against */
    pattern: PropTypes.string,
    /** Min number of characters that must be provided */
    minLength: PropTypes.number,
    /** Max number of characters that can be provided */
    maxLength: PropTypes.number,
    /** Called with the input field a reference */
    onInputRef: PropTypes.func,
    /** Error message for bad input */
    badInput: PropTypes.string,
    /** Error message for customError */
    customError: PropTypes.string,
    /** Error message for patternMismatch */
    patternMismatch: PropTypes.string,
    /** Error message for rangeOverflow */
    rangeOverflow: PropTypes.string,
    /** Error message for rangeUnderflow */
    rangeUnderflow: PropTypes.string,
    /** Error message for stepMismatch */
    stepMismatch: PropTypes.string,
    /** Error message for tooLong */
    tooLong: PropTypes.string,
    /** Error message for tooShort */
    tooShort: PropTypes.string,
    /** Error message for typeMismatch */
    typeMismatch: PropTypes.string,
    /** Error message for valueMissing */
    valueMissing: PropTypes.string,
  }

  state = {
    value: '',
    visible: true,
    length: (this.props.value && this.props.value.length) || 0,
  }

  static defaultProps = {
    required: false,
    lines: 1,
    onInputRef: _ => _,
    type: 'text',
  }

  input = React.createRef()

  setValidity = target => {
    let customValidity = ''
    validityStates.forEach(state => {
      if (
        customValidity === '' &&
        this.props[state] &&
        target.validity[state]
      ) {
        customValidity = this.props[state]
      }
    })

    target &&
      target.setCustomValidity &&
      target.setCustomValidity(customValidity)
  }

  componentDidMount() {
    const input = this.input.current
    if (input) {
      this.setState({ length: input.value && input.value.length })
      this.props.onInputRef(input)
      this.setValidity(input)
    }
  }

  handleChange = e => {
    this.setValidity(e.target)
    this.setState({
      value: e.target.value,
      length: e.target.value.length,
    })
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    const {
      required,
      onInputRef,
      lines,
      label,
      pattern,
      badInput,
      customError,
      paddingRight,
      patternMismatch,
      rangeOverflow,
      rangeUnderflow,
      stepMismatch,
      tooLong,
      tooShort,
      typeMismatch,
      valueMissing,
      icon,
      ...props
    } = this.props
    const currentValue = this.props.value || this.state.value
    const labelVisible = currentValue.length > 0
    const showLabel = label && currentValue.length > 0

    const isCheckmarkActive =
      (pattern || props.minLength || props.maxLength || required) &&
      this.input.current &&
      this.input.current.validity &&
      this.input.current.validity.valid

    return (
      <Relative style={{ width: '100%' }}>
        {lines === 1 ? (
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
              ref={this.input}
              {...styles.input(
                showLabel,
                !!icon,
                isCheckmarkActive || paddingRight
              )}
              required={required}
              aria-required={required}
              {...props}
              onChange={this.handleChange}
              pattern={pattern}
            />
          </Fragment>
        ) : (
          <textarea
            ref={this.input}
            {...styles.area(lines, showLabel)}
            required={required}
            {...props}
            onChange={this.handleChange}
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
              {this.state.length}/{props.maxLength}
            </Text>
          </View>
        )}
      </Relative>
    )
  }
}

export default Input

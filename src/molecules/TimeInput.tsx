import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import Input from '../atoms/Input'
import View from '../atoms/View'
import Absolute from '../atoms/Absolute'
import Relative from '../atoms/Relative'
import Text, { createTextStyles } from '../atoms/Text'
import Icon from '../atoms/Icon'

const selectStyle = (isActive, shouldShow = true, propose = false) =>
  css(createTextStyles(), {
    visibility: !propose && !shouldShow ? 'hidden' : 'auto',
    width: propose && '50px',
    background: propose ? 'lightGreyIntense' : 'none',
    color: !isActive && 'gray',
    WebkitAppearance: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 0,
    marginRight: 2,
    marginLeft: 2,
    transition: 'box-shadow 400ms',
    ':hover,:focus': {
      // acts like border bottom but without changing the size of the box model
      boxShadow: '0 1px 0 #000',
    },
  })

const padZero = value =>
  parseFloat(value) < 10 && parseFloat(value) >= 0 ? '0' + value : value
const formatHour = (hour, minute) => [padZero(hour), padZero(minute)].join(':')
const parseTime = time => (time ? time.split(':').map(parseFloat) : [])

export const getTimeRange = ({
  startTime,
  endTime,
  minuteStep = 1,
  hourStep = 1,
}) => {
  // default params don't work for startTime/endTime because input time might be an empty string
  startTime = startTime || '00:00'
  endTime = endTime || '23:59'

  const [startHour, startMinute] = parseTime(startTime)
  const [endHour, endMinute] = parseTime(endTime)

  const hourRange = Array.from(
    { length: 24 },
    (_, hour) => hour * hourStep
  ).filter(hour => hour >= startHour && hour <= endHour)

  return hourRange.reduce((allHours, currentHour) => {
    // 'clamp' hours at their min/max times
    // otherwise hours have full 60 minutes
    const minutesInHour =
      currentHour === startHour
        ? 60 - startMinute
        : currentHour === endHour
        ? endMinute + 1 // To include zero
        : 60

    const roundingFn = currentHour === startHour ? Math.floor : Math.ceil

    // calculate how many steps fit into a hour
    const steps = roundingFn(minutesInHour / minuteStep)

    // calculate minute offset of the first hour of the min time
    const offset =
      currentHour === startHour
        ? Math.ceil(startMinute / minuteStep) * minuteStep
        : 0

    // generate all minute steps in current hour
    allHours[currentHour] = Array.from(
      { length: steps },
      (_, minute) => minute * minuteStep + offset
    )

    return allHours
  }, {})
}

const timePropTypeValidator = (props, propName, componentName) => {
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
  const value = props[propName]
  if (value && !regex.test(value)) {
    return new TypeError(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected format \`hh:mm\`, received: \`${value}\`.`
    )
  }
}

/**
 * This component offers to select a time in a `hh:mm` (24hrs) format.
 */
class TimeInput extends React.Component {
  static propTypes = {
    /** Name picked up by a form **/
    name: PropTypes.string.isRequired,
    /** Label shown above the time picker **/
    label: PropTypes.string,
    /** Indicates if this field is required **/
    required: PropTypes.bool,
    /** The default value formatted as `hh:mm` **/
    defaultValue: timePropTypeValidator,
    /** The step between the hours **/
    hourStep: PropTypes.number,
    /** The step between the minutes **/
    minuteStep: PropTypes.number,
    /** The minimum time which can be selected. Formatted as `hh:mm` **/
    minTime: timePropTypeValidator,
    /** The maximum time which can be selected. Formatted as `hh:mm` **/
    maxTime: timePropTypeValidator,
    /** Callback when a new time has been selected **/
    onChange: PropTypes.func,
  }

  static defaultProps = {
    hourStep: 1,
    minuteStep: 1,
    onChange: () => {},
  }

  constructor(props, context) {
    super(props, context)

    const [defaultHour, defaultMinute] = parseTime(props.defaultValue)

    this.state = {
      selectedHour: defaultHour,
      selectedMinute: defaultMinute,
      timeRange: getTimeRange({
        startTime: props.minTime,
        endTime: props.maxTime,
        hourStep: props.hourStep,
        minuteStep: props.minuteStep,
      }),
      // normalize by parsing and formatting the value
      value:
        defaultHour && defaultMinute
          ? formatHour(defaultHour, defaultMinute)
          : '',
      active: false,
    }
  }

  hourRef = React.createRef()
  minuteRef = React.createRef()

  setHiddenFormValue = () => {
    const { selectedMinute, selectedHour } = this.state
    if (selectedHour !== undefined && selectedMinute !== undefined) {
      const value = formatHour(selectedHour, selectedMinute)
      this.setState({ value })
      this.props.onChange(value)
    } else {
      const value = ''
      this.setState({ value })
      this.props.onChange(value)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedHour === undefined &&
      this.state.selectedHour !== undefined
    ) {
      this.minuteRef.current.focus()
    }
    if (
      this.props.minTime !== prevProps.minTime ||
      this.props.maxTime !== prevProps.maxTime ||
      this.props.hourStep !== prevProps.hourStep ||
      this.props.minuteStep !== prevProps.minuteStep
    ) {
      this.setState({
        timeRange: getTimeRange({
          startTime: this.props.minTime,
          endTime: this.props.maxTime,
          hourStep: this.props.hourStep,
          minuteStep: this.props.minuteStep,
        }),
      })
    }
  }

  handleSelectHour = e => {
    const value = parseFloat(e.target.value)
    const selectedHour = value >= 0 ? value : undefined

    if (selectedHour === undefined) {
      this.reset()
    } else {
      const [selectedMinute] = this.state.timeRange[selectedHour]
      this.setState({ selectedHour, selectedMinute }, this.setHiddenFormValue)
    }
    this.hourRef.current.blur()
  }

  handleSelectMinute = e => {
    const value = parseFloat(e.target.value)
    const selectedMinute = value >= 0 ? value : undefined
    this.setState({ selectedMinute }, this.setHiddenFormValue)
    this.minuteRef.current.blur()
  }

  reset = () => {
    this.setState({
      value: '',
      selectedHour: undefined,
      selectedMinute: undefined,
    })
    this.props.onChange('')
  }

  render() {
    const {
      name,
      label,
      required,
      hourStep,
      minuteStep,
      minTime,
      maxTime,
      defaultValue,
      ...props
    } = this.props
    const { value, selectedHour, selectedMinute, timeRange } = this.state

    const hasSelectedHour = selectedHour !== undefined
    const hasSelectedMinute = selectedMinute !== undefined

    return (
      <Relative flex={100}>
        <Input
          name={name}
          {...css({ color: 'transparent' })}
          required={required}
          {...props}
          value={value}
        />
        <Absolute
          left={props.icon ? 40 : 15}
          top={0}
          bottom={0}
          right={0}
          direction="row"
          alignV="center"
        >
          <View>
            <Text color="secondaryText" size="xs" {...css({ marginBottom: 2 })}>
              {label} {required && '*'}
            </Text>

            <View direction="row" {...css({ marginLeft: -2 })}>
              <select
                {...selectStyle(hasSelectedHour, true, !hasSelectedHour)}
                onChange={this.handleSelectHour}
                ref={this.hourRef}
                value={hasSelectedHour ? padZero(selectedHour) : ''}
              >
                <option>--</option>
                {Object.keys(timeRange).map(hour => (
                  <option key={hour}>{padZero(hour)}</option>
                ))}
              </select>
              :
              <select
                {...selectStyle(
                  hasSelectedMinute,
                  hasSelectedHour,
                  hasSelectedHour
                )}
                onChange={this.handleSelectMinute}
                ref={this.minuteRef}
                disabled={!hasSelectedHour}
                value={hasSelectedHour ? padZero(selectedMinute) : ''}
              >
                <option>--</option>
                {selectedHour !== undefined &&
                  timeRange[selectedHour].map(minute => (
                    <option key={minute}>{padZero(minute)}</option>
                  ))}
              </select>
            </View>
          </View>
        </Absolute>
        {(hasSelectedHour || hasSelectedMinute) && (
          <Absolute
            right={15}
            top={0}
            bottom={0}
            direction="row"
            alignV="center"
            onClick={this.reset}
          >
            <Icon
              name="remove-light"
              color="gray"
              size={10}
              {...css({ cursor: 'pointer' })}
            />
          </Absolute>
        )}
      </Relative>
    )
  }
}

export default TimeInput

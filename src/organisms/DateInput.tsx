import React, { Component } from 'react'
import { css } from 'glamor'
import Input from '../atoms/Input'
import Calendar from '../molecules/Calendar'
import Relative from '../atoms/Relative'
import Absolute from '../atoms/Absolute'
import Icon from '../atoms/Icon'

interface IState {
  date?: Date
  showCalendar: boolean
}
interface IDateInputProps {
  /** Name of the input for a form **/
  name: string
  /** The label of the input */
  label?: string
  /** The locale decides on how to render date strings. Falls back to user locale if no value is provided **/
  locale?: string
  /** Called when a day is selected **/
  onChange?: (date?: Date) => void
  /** If a date should not be a changeable **/
  readOnly?: boolean
  /** Set the default value which is shown on the first render **/
  defaultValue?: Date
  /** The placeholder for the input field */
  placeholder?: string
}

/**
 * `DateInput` shows a calendar on click and provides to select a single day.
 */
class DateInput extends Component<IDateInputProps, IState> {
  static defaultProps = {
    readOnly: false,
    placeholder: '',
  }

  state = {
    date: this.props.defaultValue,
    showCalendar: false,
  }

  handleChange = (date: Date) => {
    this.setState({ date, showCalendar: false })
    this.props.onChange && this.props.onChange(date)
    this.props.onChange && this.props.onChange(date)
  }

  handleClear = () => {
    this.setState({ date: undefined })
    this.props.onChange && this.props.onChange()
  }

  render() {
    const {
      locale,
      label,
      name,
      onChange,
      readOnly,
      placeholder,
      ...props
    } = this.props
    const { date, showCalendar } = this.state

    const stringValue = date
      ? date.toLocaleDateString(locale, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : ''

    return (
      <Relative direction="column">
        <Input
          name={name}
          placeholder={placeholder}
          value={stringValue}
          label={label}
          icon="calendar-check"
          readOnly
          {...css({ cursor: !readOnly && 'pointer' })}
          onClick={() =>
            !readOnly &&
            this.setState(prevState => ({
              showCalendar: !prevState.showCalendar,
            }))
          }
        />
        {showCalendar && (
          <Calendar
            locale={locale}
            onChange={this.handleChange}
            value={date}
            {...props}
          />
        )}
        {date && !showCalendar && !readOnly && (
          <Absolute
            right={0}
            top={0}
            bottom={0}
            direction="row"
            alignV="center"
            {...css({ padding: 20, cursor: 'pointer' })}
          >
            <Icon
              name="remove-light"
              color="black"
              size={10}
              onClick={this.handleClear}
              {...css({ marginTop: -6 })}
            />
          </Absolute>
        )}
      </Relative>
    )
  }
}

export default DateInput

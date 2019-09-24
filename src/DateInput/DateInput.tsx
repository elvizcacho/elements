import { css } from 'glamor'
import React, { Component } from 'react'
import Absolute from '../Absolute'
import Calendar, { ICalendarProps } from '../Calendar'
import Icon from '../Icon'
import Input from '../Input'
import Relative from '../Relative'

interface IState {
  date?: Date
  showCalendar: boolean
}
interface IDateInputProps extends ICalendarProps {
  /** Name of the input for a form **/
  readonly name: string
  /** The label of the input */
  readonly label?: string
  /** The locale decides on how to render date strings. Falls back to user locale if no value is provided **/
  readonly locale?: string
  /** Called when a day is selected **/
  readonly onChange?: (date?: Date | Date[]) => void
  /** If a date should not be a changeable **/
  readonly readOnly?: boolean
  /** Set the default value which is shown on the first render **/
  readonly defaultValue?: Date
  /** The placeholder for the input field */
  readonly placeholder?: string
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

  handleChange = (date: Date | Date[]) => {
    this.setState({ date: date as Date, showCalendar: false })
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
      readOnly,
      placeholder,
      onChange,
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

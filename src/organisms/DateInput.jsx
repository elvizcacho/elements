import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import Input from '../atoms/Input'
import Calendar from '../molecules/Calendar'
import Relative from '../atoms/Relative'
import Absolute from '../atoms/Absolute'
import Icon from '../atoms/Icon'

/**
 * `DateInput` shows a calendar on click and provides to select a single day.
 */
class DateInput extends React.Component {
  static propTypes = {
    /** Name of the input for a form **/
    name: PropTypes.string.isRequired,
    /** The locale decides on how to render date strings. Falls back to user locale if no value is provided **/
    locale: PropTypes.string,
    /** Called when a day is selected **/
    onChange: PropTypes.func,
    /** If a date should not be a changeable **/
    readOnly: PropTypes.bool,
    /** Set the default value which is shown on the first render **/
    defaultValue: PropTypes.instanceOf(Date),
  }

  static defaultProps = {
    onChange: () => {},
    defaultValue: undefined,
    readOnly: false,
  }

  state = {
    date: this.props.defaultValue,
    showCalendar: false,
  }

  handleChange = date => {
    this.setState({ date, showCalendar: false })
    this.props.onChange(date)
  }

  render() {
    const { locale, name, onChange, ...props } = this.props

    const stringValue = this.state.date
      ? this.state.date.toLocaleDateString(locale, {
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
          placeholder="Select a day"
          value={stringValue}
          icon="calendar-check"
          readOnly
          {...css({ cursor: !this.props.readOnly && 'pointer' })}
          onClick={() =>
            !this.props.readOnly &&
            this.setState(prevState => ({
              showCalendar: !prevState.showCalendar,
            }))
          }
        />
        {this.state.showCalendar && (
          <Calendar
            locale={locale}
            onChange={this.handleChange}
            value={this.state.date}
            {...props}
          />
        )}
        {this.state.date && !this.props.readOnly && (
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
              onClick={() => this.setState({ date: undefined })}
              {...css({ marginTop: -6 })}
            />
          </Absolute>
        )}
      </Relative>
    )
  }
}

export default DateInput

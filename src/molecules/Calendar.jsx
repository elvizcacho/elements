import React from 'react'
import PropTypes from 'prop-types'

import UnstyledCalendar from 'react-calendar/dist/entry.nostyle'
import { ColorPalette } from '@allthings/colors'
import insertCSS from '../utils/insertCSS'

insertCSS(`
.react-calendar {
  max-width: 100%;
  background: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 13px;
}
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
  transition: 250ms;
  font-size: inherit;
}

.react-calendar button.blocked {
  color: ${ColorPalette.red};
}

.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  height: 44px;
}
.react-calendar__navigation button {
  min-width: 44px;
  background: none;
  transition: 250ms;

}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: ${ColorPalette.lightGrey};
}
.react-calendar__navigation button[disabled] {
  color: ${ColorPalette.text.gray};
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}
.react-calendar__month-view__weekdays__weekday {
  padding: .5em;
}

.react-calendar__month-view__weekdays__weekday abbr {
  text-decoration: none;
}

.react-calendar__month-view__weekNumbers {
  font-weight: bold;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .75em;
  padding: calc(1em) calc(0.6666666666666666em);
}
.react-calendar__month-view__days__day--weekend {}
.react-calendar__month-view__days__day--neighboringMonth {
  color: ${ColorPalette.greyIntense};
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em .5em;
}
.react-calendar__tile {
  max-width: 100%;
  text-align: center;
  padding: .75em .5em;
  background: none;
}
.react-calendar__tile:disabled {
  color: ${ColorPalette.text.gray};
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}
.react-calendar__tile--hasActive {
  background: #76baff;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
.react-calendar__tile--active {
  background: #006edc;
  color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`)
/**
 * The `Calendar` component is a thin wrapper around https://github.com/wojtekmaj/react-calendar.
 */
const Calendar = ({ isBlockedDay, tileDisabled, ...props }) => (
  <UnstyledCalendar
    {...props}
    // Add functionality for `isBlockedDay` to disable and color dates differently
    tileDisabled={info => isBlockedDay(info.date) || tileDisabled(info)}
    tileClassName={info => (isBlockedDay(info.date) ? 'blocked' : null)}
  />
)

Calendar.propTypes = {
  ...UnstyledCalendar.propTypes,
  /** Indicates if a day is blocked. Expects a function which is invoked with a `Date` object and should return a boolean **/
  isBlockedDay: PropTypes.func,
  /** Proxied from `react-calendar` prop types **/
  tileDisabled: PropTypes.func,
}

Calendar.defaultProps = {
  isBlockedDay: () => false,
  tileDisabled: () => false,
}

export default Calendar

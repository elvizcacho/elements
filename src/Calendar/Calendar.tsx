import React, { FunctionComponent } from 'react'

import UnstyledCalendar, {
  CalendarProps,
} from 'react-calendar/dist/entry.nostyle'
import { ColorPalette } from '@allthings/colors'
import insertCSS from '../utils/insertCSS'
import { color, lightness } from 'kewler'

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
  color: ${ColorPalette.grey};
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
.react-calendar__tile:disabled,
.react-calendar button.blocked {
  color: ${ColorPalette.grey} !important;
  background: repeating-linear-gradient(
    135deg,
    ${ColorPalette.white},
    ${ColorPalette.white} 5px,
    ${ColorPalette.whiteIntense} 5px,
    ${ColorPalette.whiteIntense} 10px
  );
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  color: white;
  background-color: ${ColorPalette.blue};
}
.react-calendar__tile--hasActive {
  background: ${color(ColorPalette.blue, lightness(20))}
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: ${color(ColorPalette.blue, lightness(25))}
}
.react-calendar__tile--active {
  color: white;
  background: ${ColorPalette.blue};
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: ${color(ColorPalette.blue, lightness(-20))}
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background: ${color(ColorPalette.blue, lightness(35))}
}
`)

const notBlocked = (_: Date) => false
const notDisabled = (_: { activeStartDate: Date }) => false
/**
 * The `Calendar` component is a thin wrapper around https://github.com/wojtekmaj/react-calendar.
 */
const Calendar: FunctionComponent<ICalendarProps> = ({
  isBlockedDay = notBlocked,
  tileDisabled = notDisabled,
  ...props
}) => (
  <UnstyledCalendar
    {...props}
    // Add functionality for `isBlockedDay` to disable and color dates differently
    tileDisabled={info => isBlockedDay(info.date) || tileDisabled(info)}
    tileClassName={info => (isBlockedDay(info.date) ? 'blocked' : null)}
  />
)

export interface ICalendarProps extends CalendarProps {
  /** Indicates if a day is blocked. Expects a function which is invoked with a `Date` object and should return a boolean **/
  isBlockedDay?: (date: Date) => boolean
  /** Proxied from `react-calendar` prop types **/
  tileDisabled?: (date: { activeStartDate: Date }) => boolean
}

export default Calendar

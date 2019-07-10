<!-- 
This is an auto-generated markdown. 
You can change it in "src/Calendar/Calendar.tsx" and run build:docs to update this file.
-->
# Calendar
The `Calendar` component is a thin wrapper around https://github.com/wojtekmaj/react-calendar.
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|isBlockedDay|((date: Date) => boolean)|Indicates if a day is blocked. Expects a function which is invoked with a `Date` object and should return a boolean *
|tileDisabled|((date: { activeStartDate: Date; }) => boolean)|Proxied from `react-calendar` prop types *

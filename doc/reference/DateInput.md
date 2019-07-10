<!-- 
This is an auto-generated markdown. 
You can change it in "src/DateInput/DateInput.tsx" and run build:docs to update this file.
-->
# DateInput
`DateInput` shows a calendar on click and provides to select a single day.
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|name **(required)**||Name of the input for a form *
|label|string|The label of the input
|locale|string|The locale decides on how to render date strings. Falls back to user locale if no value is provided *
|onChange|((date?: Date, Date[], undefined) => void)|Called when a day is selected *
|readOnly|boolean|If a date should not be a changeable *<br>Default: false
|defaultValue|Date|Set the default value which is shown on the first render *
|placeholder|string|The placeholder for the input field<br>Default: 
|isBlockedDay|((date: Date) => boolean)|Indicates if a day is blocked. Expects a function which is invoked with a `Date` object and should return a boolean *
|tileDisabled|((date: { activeStartDate: Date; }) => boolean)|Proxied from `react-calendar` prop types *

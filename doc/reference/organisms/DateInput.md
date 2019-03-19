<!-- 
This is an auto-generated markdown. 
You can change it in "src/organisms/DateInput.js" and run build:docs to update this file.
-->
# DateInput
`DateInput` shows a calendar on click and provides to select a single day.
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|name **(required)**|string|Name of the input for a form *
|label|string|The label of the input
|locale|string|The locale decides on how to render date strings. Falls back to user locale if no value is provided *
|onChange|func|Called when a day is selected *<br>Default: () => {}
|readOnly|bool|If a date should not be a changeable *<br>Default: false
|defaultValue|instanceOf|Set the default value which is shown on the first render *<br>Default: undefined
|placeholder|string|The placeholder for the input field<br>Default: ''

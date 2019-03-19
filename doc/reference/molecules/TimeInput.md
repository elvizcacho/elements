<!-- 
This is an auto-generated markdown. 
You can change it in "src/molecules/TimeInput.js" and run build:docs to update this file.
-->
# TimeInput
This component offers to select a time in a `hh:mm` (24hrs) format.
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|name **(required)**|string|Name picked up by a form *
|label|string|Label shown above the time picker *
|required|bool|Indicates if this field is required *
|defaultValue|custom|The default value formatted as `hh:mm` *
|hourStep|number|The step between the hours *<br>Default: 1
|minuteStep|number|The step between the minutes *<br>Default: 1
|minTime|custom|The minimum time which can be selected. Formatted as `hh:mm` *
|maxTime|custom|The maximum time which can be selected. Formatted as `hh:mm` *
|onChange|func|Callback when a new time has been selected *<br>Default: () => {}

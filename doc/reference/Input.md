<!-- 
This is an auto-generated markdown. 
You can change it in "src/Input/Input.tsx" and run build:docs to update this file.
-->
# Input

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|defaultValue|string, number, string[]|The default value to put into the component, without making it controlled
|required|boolean|Indicates that this field is required<br>Default: false
|icon|"download", "alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 148 more ...|Icon shown on the left of the input field (See `Icon` component for all possible values) *
|name|string|The name of this input field
|label|string|The label of the input
|type|string|Type, can be: 'tel', 'number', 'text', 'url', 'email'<br>Default: text
|onChange|any|Called, when the user changes something
|value|string, number, string[]|The value, makes this component a controlled component
|lines|number|Can only be used with type=text. Increase to enable multi-line input<br>Default: 1
|hasRightIcon|boolean|Used when there is an icon to the right of input field
|pattern|string|Regular expression to validate against
|minLength|number|Min number of characters that must be provided
|maxLength|number|Max number of characters that can be provided
|forceHideCheckmark|boolean|Force hide checkmark even if value is valid *<br>Default: false
|onInputRef|any|Called with the input field a reference
|readOnly|boolean|
|disabled|boolean|
|forwardedRef|any|
|badInput|string|Error message for bad input
|customError|string|Error message for customError
|patternMismatch|string|Error message for patternMismatch
|rangeOverflow|string|Error message for rangeOverflow
|rangeUnderflow|string|Error message for rangeUnderflow
|stepMismatch|string|Error message for stepMismatch
|tooLong|string|Error message for tooLong
|tooShort|string|Error message for tooShort
|typeMismatch|string|Error message for typeMismatch
|valueMissing|string|Error message for valueMissing

<!-- 
This is an auto-generated markdown. 
You can change it in "src/FormCheckbox/FormCheckbox.tsx" and run build:docs to update this file.
-->
# FormCheckbox
FormCheckbox are used to give users a way to select or deselect options.

```example
<View>
   <FormCheckbox checked name="ok" label="Are you ok?" />
   <FormCheckbox name="notok" label="Are you not ok?" />
</View>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|checked|boolean|True to make it checked
|label|ReactNode|Label of Checkbox
|labelSize|"l", "xs", "s", "m", "xl", "xxl", "giant"|Text size of the label<br>Default: l
|name **(required)**||Label of Checkbox
|backgroundColor|string|Background color of the form item
|onChange|((e: ChangeEvent<HTMLInputElement>) => void)|Called, when the user changes something
|defaultValue|string, string[]|The default value to put into the component, without making it controlled
|required|boolean|Indicates that this field is required
|icon|"download", "alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 148 more ...|Icon shown on the left of the input field (See `Icon` component for all possible values) *
|type|string|Type, can be: 'tel', 'number', 'text', 'url', 'email'
|value|string, number, string[]|The value, makes this component a controlled component
|lines|number|Can only be used with type=text. Increase to enable multi-line input
|hasRightIcon|boolean|Used when there is an icon to the right of input field
|pattern|string|Regular expression to validate against
|minLength|number|Min number of characters that must be provided
|maxLength|number|Max number of characters that can be provided
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

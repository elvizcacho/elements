<!-- 
This is an auto-generated markdown. 
You can change it in "src/atoms/Input.js" and run build:docs to update this file.
-->
# Input
TextInputs are used to allow users to enter information like names, numbers, urls, email addresses or passwords.

```example
<TextInput name="email" type="email" placeholder="Your email" required />
<TextInput name="inquiry" lines={5} placeholder="Your question" maxLength={255} minLength={50} />
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|defaultValue|string|The default value to put into the component, without making it controlled
|required|bool|Indicates that this field is required<br>Default: false
|icon|enum|Icon shown on the left of the input field (See `Icon` component for all possible values) *
|name **(required)**|string|The name of this input field
|label|string|The label of the input
|type|enum|Type, can be: 'tel', 'number', 'text', 'url', 'email'<br>Default: 'text'
|onChange|func|Called, when the user changes something
|value|string|The value, makes this component a controlled component
|lines|number|Can only be used with type=text. Increase to enable multi-line input<br>Default: 1
|pattern|string|Regular expression to validate against
|minLength|number|Min number of characters that must be provided
|maxLength|number|Max number of characters that can be provided
|onInputRef|func|Called with the input field a reference<br>Default: _ => _
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

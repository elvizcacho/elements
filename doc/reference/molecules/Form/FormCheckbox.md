<!-- 
This is an auto-generated markdown. 
You can change it in "src/molecules/Form/FormCheckbox.tsx" and run build:docs to update this file.
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
|onChange **(required)**||Called, when the user changes something
|backgroundColor|string|Background color of the form item

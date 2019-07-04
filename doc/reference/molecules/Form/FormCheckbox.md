<!-- 
This is an auto-generated markdown. 
You can change it in "src/molecules/Form/FormCheckbox.jsx" and run build:docs to update this file.
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
|checked|bool|True to make it checked
|label **(required)**|union|Label of Checkbox
|labelSize|custom|Text size of the label<br>Default: 'l'
|name **(required)**|string|
|onChange|func|<br>Default: () => {}
|backgroundColor|string|Background color of the form item

<!-- 
This is an auto-generated markdown. 
You can change it in "src/RadioButton/RadioButton.tsx" and run build:docs to update this file.
-->
# RadioButton
RadioButtonSet can be used to render a set of RadioButtons to allow users to select exactly one item from a set.
Like gender (male / female) or sizes (s,m,l,xl)

```example
<RadioButtonSet name="gender" defaultValue="male" required>
   <RadioButton value="female">Female</RadioButton>
   <RadioButton value="male">Male</RadioButton>
</RadioButtonSet>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|id|string|
|checked|boolean|Set to true to controll radio button
|name|string|The name of this input field
|onChange|((e: ChangeEvent<Element>) => void)|Called when a radio button is clicked
|required|boolean|Mark if the RadioButton is required<br>Default: false
|value **(required)**||The value the checkbox will have

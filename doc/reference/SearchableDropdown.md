<!-- 
This is an auto-generated markdown. 
You can change it in "src/SearchableDropdown/SearchableDropdown.tsx" and run build:docs to update this file.
-->
# SearchableDropdown

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|clearable|boolean|If true, than the field can be cleared
|icon|"alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 147 more ...|Icon on the left of the input field
|items **(required)**||The dropdown items to show
|initialSelectedItem|ItemType|Initially selected item - this value is uncontrolled
|label|string|A floating label
|menuHeight|number|The height of the menu in pixels.
|name|string|For forms
|onSelect|((item: ItemType) => void)|Callback triggered when clearing the selection.
|placeholder|string|The placeholder displayed in the input field.
|placement|EDirection|If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards
|selectedItem|ItemType|Selected item - this item can be controlled

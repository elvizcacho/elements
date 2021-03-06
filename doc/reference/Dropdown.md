<!-- 
This is an auto-generated markdown. 
You can change it in "src/Dropdown/Dropdown.tsx" and run build:docs to update this file.
-->
# Dropdown

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|disabled|boolean|Disable the dropdown
|placement|"top", "bottom"|If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards
|items **(required)**||
|initialSelectedItem|IDropdownItem|Initially selected item - this value is uncontrolled
|selectedItem|IDropdownItem|Selected item - this item can be controlled
|limit|number|The maximum number of items displayed in the menu.
|menuHeight|number|The height of the menu in pixels.
|onSelect|((item: IDropdownItem) => void)|Callback triggered when clearing the selection.
|placeholder|string|The placeholder displayed in the input field.
|label|string|A floating label
|icon|"alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 149 more ...|Icon on the left of the input field
|clearable|boolean|If true, than the field can be cleared
|name|string|For forms
|required|boolean|

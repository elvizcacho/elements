<!-- 
This is an auto-generated markdown. 
You can change it in "src/Typeahead/Typeahead.tsx" and run build:docs to update this file.
-->
# Typeahead

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|limit **(required)**||The maximum number of items displayed in the menu.<br>Default: 20
|menuHeight **(required)**||The height of the menu in pixels.<br>Default: 300
|placement **(required)**||If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards<br>Default: Placement.bottom
|autoOpen|boolean|Forces the menu to be opened when clicking in the input.
|clearOnSelect|boolean|Automatically clears the selection. Must not be used with controlled
and uncontrolled components.
|defaultValue|string|The defaultbooleancomponent, without making it controlled.
|isLoading|boolean|The loading state of the component, e.g when externally fetching some
data.
|items **(required)**||The itebooleanomponent as an array of objects. (icon is optional)
|onClearSelection|(() => void)|Callback triggered when clearing the selection.
|onClose|(() => void)|Callback triggered when the menu is closed.
|onInputValueChange|((inputValue: string) => void)|Callback triggered when the input value is modified.
|onOpen|(() => void)|Callback triggered when the menu is opened.
|onSelect|((item: ITypeaheadItem) => void)|Callback triggered when selecting an item.
|placeholder|string|The placeholder displayed in the input field.
|value|string|The value of the component, makes this a controlled component.

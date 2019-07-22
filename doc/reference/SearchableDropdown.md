<!-- 
This is an auto-generated markdown. 
You can change it in "src/SearchableDropdown/SearchableDropdown.tsx" and run build:docs to update this file.
-->
# SearchableDropdown

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|clearable|boolean|If true, than the field can be cleared
|disabled|boolean|Set dropdown into disabled state
|icon|"alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 147 more ...|Icon on the left of the input field
|items **(required)**||The dropdown items to show
|initialSelectedItem|any|Initially selected item - this value is uncontrolled
|isLoading|boolean|The loading state of the component, e.g fetching data.
|label|string|A floating label
|loadMoreText|string|The "Load more" text
|menuHeight|number|The height of the menu in pixels. By default: Search input and 3 items
|name|string|For forms
|noResultsText|string|The text is shown if no result was found
|onLoadMore|(() => void)|Callback triggered when clicking on "Load more" in items list
|onSelect **(required)**||Callback triggered when clearing the selection.
|onSearch|((event: SyntheticEvent<Element, Event>) => void)|Callback triggered when search value changes
|placeholder|string|The placeholder displayed in the input field.
|placement|"top", "bottom"|If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards
|searchTerm|string|The search term
|selectedItem|any|Selected item - this item can be controlled

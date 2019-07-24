<!-- 
This is an auto-generated markdown. 
You can change it in "src/SearchableDropdown/SearchableDropdown.tsx" and run build:docs to update this file.
-->
# SearchableDropdown

## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|clearable|boolean|If true, than the field can be cleared
|clearSearchValueOnClose|boolean|Clear the search input value on dropdown close
|disabled|boolean|Set dropdown into disabled state
|icon|"alarm", "alarm-filled", "armchair", "armchair-filled", "arrow-down", "arrow-down-filled", "arrow-left", "arrow-left-filled", "arrow-right", "arrow-right-filled", ... 147 more ...|Icon on the left of the input field
|items **(required)**||The dropdown items to show
|initialSearchTerm|string|The initial search term when dropdown opens first time
|initialSelectedItem|any|Initially selected item - this value is uncontrolled
|isLoading|boolean|The loading state of the component, e.g fetching data.
|label|string|A floating label
|loadMoreText|string|The "Load more" text
|menuHeight|number|The height of the menu in pixels. By default: Search input and 3 items
|name|string|The name for forms
|noResultsText|string|The text is shown if no result was found
|onClose|(() => void)|Callback triggered when dropdown was closed
|onLoadMore|(() => void)|Callback triggered when clicking on "Load more" in items list
|onOpen|(() => void)|Callback triggered when dropdown was opened
|onSelect **(required)**||Callback triggered when value was selected or cleared
|onSearch|((value: string) => void)|Callback triggered when search value changes
|placeholder|string|The placeholder displayed in the input field.
|placement|"top", "bottom"|If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards
|selectedItem|any|Selected item - this item can be controlled

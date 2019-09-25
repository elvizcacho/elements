<!-- 
This is an auto-generated markdown. 
You can change it in "src/SquareIconButton/SquareIconButton.tsx" and run build:docs to update this file.
-->
# SquareIconButton
Button with only an icon. Can be used in toolbars. May also be used
for back-buttons in the titlebar.

```example
<SquareIconButton icon="armchair-filled" color="red" iconColor="white" />
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|icon **(required)**||
|color|string|<br>Default: transparent
|iconSize|number, "s", "xs", "m", "l"|Size of the icon child component (check <Icon />) *<br>Default: s
|iconColor|string|<br>Default: lightBlack
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

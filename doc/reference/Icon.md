<!-- 
This is an auto-generated markdown. 
You can change it in "src/Icon/Icon.tsx" and run build:docs to update this file.
-->
# Icon
Icons are used to visually communicate core parts of the product and
available actions. They can act as wayfinding tools to help users more
easily understand where they are in the product, and common interaction
patterns that are available.

*Note:* To use Icons, you need to wrap everything in a **ResourceProvider**
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|name **(required)**||The name of the icon
|color|string|The color of the icon<br>Default: primary
|size|number, "xs", "s", "m", "l"|Can be xs, s, m, l<br>Default: m
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

<!-- 
This is an auto-generated markdown. 
You can change it in "src/ButtonGroup/ButtonGroup.tsx" and run build:docs to update this file.
-->
# ButtonGroup
ButtonGroup groups multiple buttons and keeps the spacing consistent.

```example
<ButtonGroup>
   <Button secondary>Cancel</Button>
   <Button>Accept</Button>
</ButtonGroup>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

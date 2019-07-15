<!-- 
This is an auto-generated markdown. 
You can change it in "src/Pill/Pill.tsx" and run build:docs to update this file.
-->
# Pill
Pills 💊 are used to show status or to highlight a piece of information.
It could be used on cards to indicate that this card contains important information.

```example
<ThemeProvider>
   <View>
     <Pill label="Important message" color="primary" />
     <Pill label="A warning" color="warn" />
   </View>
</ThemeProvider>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|label **(required)**||Text that shows on the pill *
|color|string|Themed color of the pill *
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

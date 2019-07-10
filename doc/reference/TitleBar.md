<!-- 
This is an auto-generated markdown. 
You can change it in "/Users/daniel/Dev/allthings/elements/src/TitleBar/TitleBar.tsx" and run build:docs to update this file.
-->
# TitleBar
Title bar is used to give user control and information about navigation.

```example
<ThemeProvider>
   <TitleBar alignH="space-between" color="blueIntense">
     <View direction="row" alignV="center">
       <SquareIconButton icon="armchair-filled" iconColor="white" />
       <Text color="white" strong>
         Get Relaxed
       </Text>
     </View>
     <SquareIconButton icon="search-filled" iconColor="white" />
   </TitleBar>
</ThemeProvider>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|onClick|(() => void)|Callback when title bar is clicked
|color|string|Color of the title bar<br>Default: grey
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

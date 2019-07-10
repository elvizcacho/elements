<!-- 
This is an auto-generated markdown. 
You can change it in "src/Circle/Circle.tsx" and run build:docs to update this file.
-->
# Circle
Simple circle element that is used to build other things...

Check out ProfileImage to see it in action.

```example
<ThemeProvider>
   <ResourceProvider>
     <View direction="row" alignV="center">
       <Circle outline fill={false} outlineColor="lightGrey">
         <Icon size="s" name="remove-filled" color="lightGrey" />
       </Circle>
       <Circle color="primary" />
       <Circle color="#bada55" radius={20} />
       <Circle color="gray" radius={10} />
     </View>
   </ResourceProvider>
</ThemeProvider>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|children|ReactNode|Content of the Circle will be always centered
|color|string|Color of the Circle. Allows theme names (like 'primary') or hex colors
|radius|number|Radius of Circle, defaults to 40
|outline|boolean|If true it will only render the outline
|outlineColor|string|If passed outline will use as outline color instead of color
|fill|boolean|If true it will fill the circle
Passing true, will make the view fill out available space
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

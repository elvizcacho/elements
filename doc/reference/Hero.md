<!-- 
This is an auto-generated markdown. 
You can change it in "/Users/daniel/Dev/allthings/elements/src/Hero/Hero.tsx" and run build:docs to update this file.
-->
# Hero
Heros are used to give users an introduction and quickly explain features.

```example
<ThemeProvider>
     <Hero text="You are my Hero!" img="https://placeimg.com/500/500/people">
       <View fill direction="row" alignH="space-between" alignV="stretch">
         <Button backgroundColor="rgba(0,0,0,0.2)" color="white">Thank you</Button>
       </View>
     </Hero>
</ThemeProvider>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|color **(required)**||Color of the hero, will be primary color by default
|text **(required)**||Text that will be announced with the Hero
|img **(required)**||URL to image that will be rendered
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66

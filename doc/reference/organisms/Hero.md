<!-- 
This is an auto-generated markdown. 
You can change it in "src/organisms/Hero.tsx" and run build:docs to update this file.
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
|color **(required)**||Color of the hero, will be primary color by default<br>Default: grey
|text **(required)**||Text that will be announced with the Hero
|img **(required)**||URL to image that will be rendered

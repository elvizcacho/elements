<!-- 
This is an auto-generated markdown. 
You can change it in "src/ThemeProvider/ThemeProvider.tsx" and run build:docs to update this file.
-->
# ThemeProvider
All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
The ThemeProvider allows you to define the default colors for most elements.

**Example**: If you want all you buttons to be red, instead of writing <Button color="red" /> all the time, you might want to set the "primary" color of your theme to red.
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|theme|Partial<ITheme>|

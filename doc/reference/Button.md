<!-- 
This is an auto-generated markdown. 
You can change it in "src/Button/Button.tsx" and run build:docs to update this file.
-->
# Button
Buttons make common actions immediately visible and easy to perform with one
click or tap. They can be used for any type of action, including navigation.

You can use two different looks for the button: primary and
secondary. Primary is the default type, so there's no need to explicitly
define it.

```example
<ThemeProvider>
   <Button>Hello you</Button>
</ThemeProvider>
```

To have an icon as button-label, just add the icon-component as children.

```example
<Button type="submit">
    <View direction="row">
      Hello with icon
      <View style={{ marginLeft: 10 }}>
        <Icon name="send-filled" size="xs" color="white" />
      </View>
    </View>
  </Button>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|secondary|boolean|If the button is used for a secondary option
|onClick|((event: MouseEvent<Element, MouseEvent>) => void)|
|type|"reset", "button", "submit"|Type of the button (deprecated)
|color|string|
|disabled|boolean|
|backgroundColor|string|Color of the button, theme primary color by default
|name|string|Name of the

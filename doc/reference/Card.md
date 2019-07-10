<!-- 
This is an auto-generated markdown. 
You can change it in "/Users/daniel/Dev/allthings/elements/src/Card/Card.tsx" and run build:docs to update this file.
-->
# Card
Cards can be used to group related content

```example
<Card>
  <CardContent>
    <Text size="xl" strong>
      Cards
    </Text>
    <Text>
      Cards are the basic elements to fit content in. They can may
      contain any kind of content.
    </Text>
  </CardContent>
</Card>
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

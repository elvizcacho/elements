<!--
This is an auto-generated markdown.
You can change it in "src/ExpandingTextarea/ExpandingTextarea.tsx" and run build:docs to update this file.
-->

# ExpandingTextarea

The height of the ExpandingTextarea will expand when the user adds a new line.
It will take at maximum 25% of the current viewport. (max-height: 25vh)

```example
<ExpandingTextarea
   placeholder="Write somthing..."
   value=""
/>
```

## Usage

| Name           |                      Type                       | Description |
| -------------- | :---------------------------------------------: | ----------: |
| autoFocus      |                     boolean                     |
| placeholder    |                     string                      |
| name           |                     string                      |
| onHeightChange |           ((height: number) => void)            |
| containerStyle |                       any                       |
| onChange       | ((e: ChangeEvent<HTMLTextAreaElement>) => void) |
| value          |                     string                      |
| onFocus        |                  (() => void)                   |

<!-- 
This is an auto-generated markdown. 
You can change it in "src/atoms/Image.tsx" and run build:docs to update this file.
-->
# Image
Images make thing more interesting. They can be used
to display user image content and UI graphics.
If something goes wrong when loading the image, a placeholder will
be shown instead.

```example
<Image
   style={{width: 225, height: 225}}
   size="cover"
   src="https://placeimg.com/225/225/people"
/>
```

```example
<Image
   style={{width: 225, height: 225}}
   src="https://placeimg.com/nothing"
/>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|alt|string|Alternative image to use
|src **(required)**||The URL of the image
|srcFallback|string|The URL of the fallback image
|size|"contain", "cover"|The behaviour behavior of image within the container
|position|"center", "left", "right", "top", "bottom"|The position of image

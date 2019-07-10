<!-- 
This is an auto-generated markdown. 
You can change it in "/Users/daniel/Dev/allthings/elements/src/ReadMore/ReadMore.tsx" and run build:docs to update this file.
-->
# ReadMore
A ReadMore is a simple container, to show / (hide) content. It will automatically decide whether to show the `read more` link or not.
```example
<Card>
<ListItem>
<ReadMore>
  <Text>Testing a short text...</Text>
</ReadMore>
</ListItem>
<ListItem>
<ReadMore>
  <Text>
    Testing a longer text with a cropAtHeight 80vw! Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Maecenas
    dignissim sem in elit mollis consequat. Suspendisse potenti.
    Maecenas a velit vel dolor mollis viverra. Praesent ex diam,
    ultricies ac ultricies ut, efficitur sit amet leo. Vivamus ex
    ante, dapibus a elementum vel, ultrices in erat. Vestibulum
    eget ante turpis. Donec dapibus, purus vel euismod egestas,
    arcu ipsum.
  </Text>
</ReadMore>
</ListItem>
</Card>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|initiallyCollapsed **(required)**||<br>Default: true
|readMoreLabel **(required)**||<br>Default: Read more...
|cropAtHeight **(required)**||<br>Default: 17vh
|threshold **(required)**||<br>Default: 40
|onToggle **(required)**||

<!--
This is an auto-generated markdown.
You can change it in "src/ChatBubble/ChatBubble.tsx" and run build:docs to update this file.
-->

# ChatBubble

ChatBubbles are used to show conversations between two or more users.

```example
<ThemeProvider>
   <View>
     <ChatBubble
       text="Hello World"
       userName="You"
       userImage="https://placeimg.com/40/40/people?t=3"
       date="a minute ago"
     />
     <ChatBubble
       direction="right"
       text="Hello You"
       userName="Agent"
       userImage="https://placeimg.com/40/40/people?t=1"
       date="just now"
     />
   </View>
</ThemeProvider>
```

## Usage

| Name                      | Type | Description |
| ------------------------- | :--: | ----------: |
| userName **(required)**   |      |
| userImage **(required)**  |      |
| date **(required)**       |      |
| text **(required)**       |      |
| background **(required)** |      |
| direction **(required)**  |      |

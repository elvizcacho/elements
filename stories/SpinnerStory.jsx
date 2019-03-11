import React from 'react'
import { ResourceProvider, Spinner, ThemeProvider } from '../src/'
import Text from '../src/atoms/Text'

const SpinnerStory = () => (
  <ThemeProvider theme={{ primary: 'pink' }}>
    <ResourceProvider>
      <Text>This Spinner takes its color from the theme.</Text>
      <Spinner />
      <Spinner color="#800080" />
    </ResourceProvider>
  </ThemeProvider>
)

export default SpinnerStory

import React from 'react'
import { ResourceProvider, Spinner, ThemeProvider } from '../src/'

const SpinnerStory = () => (
  <ThemeProvider>
    <ResourceProvider>
      <Spinner />
    </ResourceProvider>
  </ThemeProvider>
)

export default SpinnerStory

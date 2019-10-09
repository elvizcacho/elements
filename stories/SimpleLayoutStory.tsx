import React, { Component } from 'react'
import {
  Inset,
  ResourceProvider,
  SimpleLayout,
  Spinner,
  Text,
  ThemeProvider,
  View,
} from '../src/'

class SimpleLayoutStory extends Component<
  {},
  { loading: boolean; text: string }
> {
  state = {
    loading: true,
    text: '',
  }

  async componentDidMount() {
    this.fetchText()
  }

  fetchText = async () => {
    this.setState({ loading: true })
    const response = await fetch(
      'https://baconipsum.com/api/?type=meat-and-filler',
    )
    const text = await response.json()
    setTimeout(() => {
      this.setState({
        text: text.reduce((prev: string, curr: string) => prev + curr),
        loading: false,
      })
    }, 1000)
  }

  render() {
    const { loading, text } = this.state
    return (
      <ThemeProvider>
        <ResourceProvider>
          <SimpleLayout onPullDown={this.fetchText} padded>
            {loading && (
              <View direction="row" alignH="center">
                <Inset>
                  <Spinner />
                </Inset>
              </View>
            )}
            {text && (
              <Text weight="semi-bold">Pull down to load a new Text. </Text>
            )}
            {text && <Text>{text}</Text>}
          </SimpleLayout>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}

export default SimpleLayoutStory

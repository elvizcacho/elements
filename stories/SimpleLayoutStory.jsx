import React from 'react'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import View from '../src/atoms/View'
import Text from '../src/atoms/Text'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import SimpleLayout from '../src/layouts/SimpleLayout'
import Inset from '../src/atoms/Inset'
import Spinner from '../src/atoms/Spinner'

class SimpleLayoutStory extends React.Component {
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
      'https://baconipsum.com/api/?type=meat-and-filler'
    )
    const text = await response.json()
    setTimeout(() => {
      this.setState({
        text: text.reduce((prev, curr) => prev + curr),
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
              <Text strong block>
                Pull down to load a new Text.{' '}
              </Text>
            )}
            {text && <Text>{text}</Text>}
          </SimpleLayout>
        </ResourceProvider>
      </ThemeProvider>
    )
  }
}

export default SimpleLayoutStory

import PropTypes from 'prop-types'
import React from 'react'
import { IntlProvider } from 'react-intl'

class CDNIntlProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    messages: PropTypes.object,
    locale: PropTypes.string.isRequired,
    onDone: PropTypes.func,
    project: PropTypes.string.isRequired,
    variation: PropTypes.string,
  }

  static defaultProps = {
    variation: 'default',
    onDone: _ => _,
  }

  static contextTypes = {
    resourcePath: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      loaded: typeof props.messages !== 'undefined',
      messages: props.messages,
    }
  }

  componentWillMount() {
    !this.props.messages && this.loadLanguages(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const { project, locale, variation } = this.props
    if (
      nextProps.project !== project ||
      nextProps.locale !== locale ||
      nextProps.variation !== variation
    ) {
      this.loadLanguages(nextProps)
    }
  }

  loadLanguages = async props => {
    const { project, variation, locale } = props
    const countryCode = locale.split('_')[0]
    const resourcePath = this.context.resourcePath
    const translations = await fetch(
      `${resourcePath}/${project}/staging/i18n/${countryCode}/${variation}.json`
    )
    const messages = await translations.json()
    this.setState({
      loaded: true,
      messages,
    })
    props.onDone()
  }

  render() {
    const countryCode = this.props.locale.split('_')[0]

    return (
      this.state.loaded && (
        <IntlProvider locale={countryCode} messages={this.state.messages}>
          {this.props.children}
        </IntlProvider>
      )
    )
  }
}

export default CDNIntlProvider

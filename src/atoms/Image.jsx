import PropTypes from 'prop-types'
import React from 'react'
import View from '@allthings/react-view'
import { css } from 'glamor'

/**
 * Images make thing more interesting. They can be used
 * to display user image content and UI graphics.
 * If something goes wrong when loading the image, a placeholder will
 * be shown instead.
 */
export default class Image extends React.Component {
  static propTypes = {
    /** Alternative image to use */
    alt: PropTypes.string,
    /** Will be called when the image is clicked **/
    onClick: PropTypes.func,
    /** The URL of the image **/
    src: PropTypes.string.isRequired,
    /** The URL of the fallback image **/
    srcFallback: PropTypes.string,
    /** The Position behavior of image. If passed, image will be rendered as background image. **/
    size: PropTypes.oneOf(['contain', 'cover']),
  }

  state = {
    useFallback: false,
  }

  componentDidMount() {
    const url =
      this.context.url || 'static.allthings.me/app/prod/icons/1.0.0/alarm.svg'
    this.loadImage(this.props.src)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ useFallback: false })
    if (nextProps.src !== this.props.src) {
      this.loadImage(nextProps.src)
    }
  }

  loadImage = src => {
    const image = new Image()
    image.onerror = this.onError
    image.src = src
  }

  onError = () => this.props.srcFallback && this.setState({ useFallback: true })

  render() {
    const { srcFallback, src, size, ...props } = this.props

    const imageUrl = this.state.useFallback ? srcFallback : src

    return (
      <View
        {...css({
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: size,
        })}
        {...props}
      />
    )
  }
}

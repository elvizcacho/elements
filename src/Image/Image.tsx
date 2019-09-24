import { css } from 'glamor'
import React, { Component, ImgHTMLAttributes } from 'react'
import { ResourceProviderContext } from '../ResourceProvider'
import View, { IViewProps } from '../View'

interface IImage {
  /** Alternative image to use */
  alt?: string
  /** The URL of the image */
  src: string
  /** The URL of the fallback image */
  srcFallback?: string
  /** The behaviour behavior of image within the container */
  size?: 'contain' | 'cover'
  /** The position of image */
  position?: 'center' | 'left' | 'right' | 'top' | 'bottom'
}

type IImageProps = IImage & IViewProps & ImgHTMLAttributes<HTMLElement>

/**
 * Images make thing more interesting. They can be used
 * to display user image content and UI graphics.
 * If something goes wrong when loading the image, a placeholder will
 * be shown instead.
 *
 * ```example
 * <Image
 *   style={{width: 225, height: 225}}
 *   size="cover"
 *   src="https://placeimg.com/225/225/people"
 * />
 * ```
 *
 * ```example
 * <Image
 *   style={{width: 225, height: 225}}
 *   src="https://placeimg.com/nothing"
 * />
 * ```
 */
export default class ImageElement extends Component<IImageProps, {}> {
  state = {
    useFallback: false,
  }

  componentDidMount() {
    this.loadImage(this.props.src)
  }

  componentDidUpdate(prevProps: IImageProps) {
    if (this.props.src !== prevProps.src) {
      this.setState({ useFallback: false })
      this.loadImage(this.props.src)
    }
  }

  loadImage = (src: string) => {
    const image = new window.Image()
    image.onerror = this.onError
    image.src = src
  }

  getFallbackUrl = (resourcePath?: string) => {
    const baseUrl =
      typeof resourcePath === 'undefined'
        ? 'https://static.allthings.me/app/prod/'
        : resourcePath

    return `${baseUrl}/static/img/default/image.svg`
  }

  onError = () => this.props.srcFallback && this.setState({ useFallback: true })

  render() {
    const { srcFallback, src, position, size, ...props } = this.props

    return (
      <ResourceProviderContext.Consumer>
        {({ resourcePath }) => (
          <View
            {...css({
              backgroundImage: `url(${
                this.state.useFallback
                  ? srcFallback || this.getFallbackUrl(resourcePath)
                  : src
              })`,
              backgroundSize: size,
              backgroundPosition: position,
            })}
            {...props}
          />
        )}
      </ResourceProviderContext.Consumer>
    )
  }
}

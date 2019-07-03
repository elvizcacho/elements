import React, { Component, PropsWithChildren } from 'react'
import { css } from 'glamor'
import View from '../atoms/View'
import { createMQ } from '../behaviour/Responsive'
import { colorCode } from '../propTypes/color'
import Inset from '../atoms/Inset'
import Text from '../atoms/Text'
import Theme from '../behaviour/Theme'

const heroStyle = (background: string) =>
  css({
    overflowY: 'hidden',
    overflowX: 'hidden',
    height: 232,
    backgroundColor: colorCode(background),
    position: 'relative',
    boxShadow: '0px -1px 5px rgba(0,0,0,0.3)',
  })

const styles = {
  heroImage: css({
    position: 'absolute',
    right: '-150px',
    top: '-70px',
    width: '360px',
    height: '360px',
  }),
  // necessary because the image itself is negatively placed and
  // the flex properties are messed up without a container
  heroImageContainer: css({
    width: '150px',
  }),
  textContainer: css({
    width: '142px',
    [createMQ('tablet', 'desktop')]: {
      width: '50%',
    },
  }),
}

interface IHeroProps {
  /** Color of the hero, will be primary color by default */
  color: string
  /** Text that will be announced with the Hero */
  text: string
  /** URL to image that will be rendered */
  img: string
}

/**
 * Heros are used to give users an introduction and quickly explain features.
 *
 * ```example
 * <ThemeProvider>
 *     <Hero text="You are my Hero!" img="https://placeimg.com/500/500/people">
 *       <View fill direction="row" alignH="space-between" alignV="stretch">
 *         <Button backgroundColor="rgba(0,0,0,0.2)" color="white">Thank you</Button>
 *       </View>
 *     </Hero>
 * </ThemeProvider>
 * ```
 */
class Hero extends Component<PropsWithChildren<IHeroProps>> {
  static defaultProps = {
    color: 'grey',
  }

  render() {
    const { img, text, children, color = 'primary', ...props } = this.props
    return (
      <Theme>
        {({ colorize }) => (
          <View
            direction="row"
            alignV="center"
            alignH="space-around"
            {...heroStyle(colorize(color))}
            {...props}
          >
            <Inset direction="column" alignH="start" {...styles.textContainer}>
              <Text color="white" size="l" strong>
                {text}
              </Text>
              {children}
            </Inset>
            <View {...styles.heroImageContainer}>
              <img {...styles.heroImage} src={img} />
            </View>
          </View>
        )}
      </Theme>
    )
  }
}

export default Hero

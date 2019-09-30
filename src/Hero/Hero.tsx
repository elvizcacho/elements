import { css } from 'glamor'
import React from 'react'
import Inset from '../Inset'
import { createMQ } from '../Responsive'
import Text from '../Text'
import { useTheme } from '../Theme'
import { colorCode } from '../utils/propTypes/color'
import View, { IViewProps } from '../View'

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

interface IHeroProps extends IViewProps {
  /** Color of the hero, will be primary color by default */
  color?: string
  /** Text that will be announced with the Hero */
  text: string
  /** URL to image that will be rendered */
  img?: string
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
const Hero = ({
  img,
  text,
  children,
  color = 'primary',
  ...props
}: IHeroProps) => {
  const { colorize } = useTheme()

  return (
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
        {img && <img {...styles.heroImage} src={img} />}
      </View>
    </View>
  )
}

export default Hero

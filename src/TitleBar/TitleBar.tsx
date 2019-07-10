import React, { Component } from 'react'
import { css } from 'glamor'
import View, { IViewProps } from '../View'
import { colorCode } from '../utils/propTypes/color'
import Theme from '../Theme'

const box = (background: string) =>
  css({
    height: 50,
    backgroundColor: colorCode(background),
    position: 'relative',
    zIndex: 2,
  })

interface ITitleBarProps extends IViewProps {
  /** Callback when title bar is clicked */
  onClick?: () => void
  /** Color of the title bar */
  color?: string
}

/**
 * Title bar is used to give user control and information about navigation.
 *
 * ```example
 * <ThemeProvider>
 *   <TitleBar alignH="space-between" color="blueIntense">
 *     <View direction="row" alignV="center">
 *       <SquareIconButton icon="armchair-filled" iconColor="white" />
 *       <Text color="white" strong>
 *         Get Relaxed
 *       </Text>
 *     </View>
 *     <SquareIconButton icon="search-filled" iconColor="white" />
 *   </TitleBar>
 * </ThemeProvider>
 * ```
 */
class TitleBar extends Component<ITitleBarProps> {
  static defaultProps = {
    color: 'grey',
  }

  render() {
    const { children, color = 'primary', ...props } = this.props
    return (
      <Theme>
        {({ colorize }) => (
          <View
            direction="row"
            alignV="center"
            {...props}
            {...box(colorize(color))}
          >
            {children}
          </View>
        )}
      </Theme>
    )
  }
}

export default TitleBar

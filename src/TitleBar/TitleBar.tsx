import { css } from 'glamor'
import React, { Component } from 'react'
import Theme from '../Theme'
import View, { IViewProps } from '../View'

const box = (background: string) =>
  css({
    height: 50,
    backgroundColor: background,
    position: 'relative',
    zIndex: 2,
  })

export interface ITitleBarProps extends IViewProps {
  /** Callback when title bar is clicked */
  readonly onClick?: () => void
  /** Color of the title bar */
  readonly color?: string
}

/**
 * Title bar is used to give user control and information about navigation.
 *
 * ```example
 * <ThemeProvider>
 *   <TitleBar alignH="space-between" color="primary">
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

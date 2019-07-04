import React, { TouchEvent } from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import { color } from '../propTypes/color'
import { createMQ } from '../behaviour/Responsive'
import { Motion, spring } from 'react-motion'
import Theme from '../behaviour/Theme'

const simple = (backgroundColor: string) =>
  css({
    WebkitOverflowScrolling: 'touch',
    overflow: 'auto',
    overflowX: 'hidden',
    backgroundColor,
    height: '100%',
  })

const paddedCss = (paddedVertical: boolean, paddedHorizontal: boolean) =>
  css({
    [createMQ('tablet', 'desktop')]: {
      paddingLeft: paddedHorizontal && '25px',
      paddingRight: paddedHorizontal && '25px',
      paddingTop: paddedVertical && '25px',
      paddingBottom: paddedVertical && '25px',
    },
  })

interface ISimpleLayout {
  backgroundColor: color
  follow: boolean
  padded: boolean | 'horizontal' | 'vertical'
  onScrollEnd: () => void
  onPullDown: () => void
}

interface IState {
  pullDownOffset: number
}

class SimpleLayout extends React.PureComponent<ISimpleLayout, IState> {
  static defaultProps = {
    backgroundColor: 'background',
  }

  state = {
    pullDownOffset: 0,
  }

  trigger: boolean = true
  scrollTop: number = 0
  pullDown?: number

  handleScroll = (e: MouseEvent) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement
    this.scrollTop = target.scrollTop
    if (this.props.onScrollEnd) {
      const thresholdReached =
        target.scrollTop + target.clientHeight + 75 > target.scrollHeight

      // Trigger the callback with a tolerance of 75 px.
      if (thresholdReached) {
        if (this.trigger) {
          this.props.onScrollEnd()
          this.trigger = false
        }
      } else {
        this.trigger = true
      }
    }
  }

  handleTouchStart = () => {
    if (this.props.onPullDown && this.scrollTop === 0) {
      this.pullDown = undefined
      this.setState({ pullDownOffset: 0 })
    }
  }

  handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (this.props.onPullDown && this.scrollTop === 0) {
      let y = 0
      const touches = e.touches && e.touches.length ? e.touches : [e]
      const event = (e.changedTouches && e.changedTouches[0]) || touches[0]
      if (event) {
        y = event.clientY || event.pageY || 0
      }
      if (this.pullDown !== undefined && y > this.pullDown) {
        this.setState({
          pullDownOffset: Math.min(Math.abs(this.pullDown - y), 60),
        })
      } else {
        this.pullDown = y
      }
    }
  }

  handleTouchEnd = () => {
    if (this.state.pullDownOffset === 60) {
      this.props.onPullDown()
    }
    if (this.props.onPullDown && this.scrollTop === 0) {
      this.pullDown = undefined
      this.setState({ pullDownOffset: 0 })
    }
  }

  render() {
    const { children, backgroundColor, padded, ...props } = this.props

    delete props.onScrollEnd
    delete props.onPullDown

    return (
      <Theme>
        {({ colorize }) => (
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.pullDownOffset) }}
          >
            {value => (
              <View
                direction="column"
                flex="flex"
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                {...simple(colorize(backgroundColor))}
                {...paddedCss(
                  padded === true || padded === 'vertical',
                  padded === true || padded === 'horizontal'
                )}
                style={
                  value && value.x
                    ? { transform: `translateY(${value.x}px)` }
                    : {}
                }
                // workaround for
                // TS2322: Type '(e: MouseEvent) => void' is not assignable to type '(event: UIEvent<HTMLElement>) => void'.
                onScroll={this.handleScroll as any}
                // for e2e-tests, to scroll down on pages (id is taken for cross browser selector compat)
                id="scroll-container"
                {...props}
              >
                {children}
              </View>
            )}
          </Motion>
        )}
      </Theme>
    )
  }
}

export default SimpleLayout

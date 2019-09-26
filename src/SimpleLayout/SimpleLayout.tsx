import { css } from 'glamor'
import React, { TouchEvent, useCallback, useRef, useState } from 'react'
import { Motion, spring } from 'react-motion'
import { createMQ } from '../Responsive'
import { useTheme } from '../Theme'
import { color } from '../utils/propTypes/color'
import View, { IViewProps } from '../View'

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

export interface ISimpleLayoutProps extends IViewProps {
  readonly backgroundColor?: color
  readonly padded?: boolean | 'horizontal' | 'vertical'
  readonly onScrollEnd?: () => void
  readonly onPullDown?: () => void
  readonly tolerance?: number
}

const SimpleLayout = React.forwardRef<HTMLDivElement, ISimpleLayoutProps>(
  (
    {
      children,
      padded,
      onScrollEnd,
      onPullDown,
      backgroundColor = 'background',
      tolerance = 75,
      ...props
    },
    ref,
  ) => {
    const trigger = useRef(true)
    const scrollTop = useRef(0)
    const pullDown = useRef<number | undefined>()
    const [pullDownOffset, setPullDownOffset] = useState(0)

    const { colorize } = useTheme()

    const handleScroll = useCallback(
      (e: React.UIEvent<HTMLDivElement>) => {
        e.preventDefault()
        const target = e.target as HTMLDivElement
        scrollTop.current = target.scrollTop
        if (onScrollEnd) {
          const thresholdReached =
            target.scrollTop + target.clientHeight + tolerance >
            target.scrollHeight

          // Trigger the callback with a tolerance
          if (thresholdReached) {
            if (trigger.current) {
              onScrollEnd()
              trigger.current = false
            }
          } else {
            trigger.current = true
          }
        }
      },
      [onScrollEnd, tolerance],
    )

    const handleTouchStart = useCallback(() => {
      if (onPullDown && scrollTop.current === 0) {
        pullDown.current = undefined
        setPullDownOffset(0)
      }
    }, [onPullDown])

    const handleTouchMove = useCallback(
      (e: TouchEvent<HTMLDivElement>) => {
        if (onPullDown && scrollTop.current === 0) {
          let y = 0
          const touches = e.touches && e.touches.length ? e.touches : [e]
          const event = (e.changedTouches && e.changedTouches[0]) || touches[0]
          if (event) {
            y = event.clientY || event.pageY || 0
          }
          if (pullDown.current !== undefined && y > pullDown.current) {
            setPullDownOffset(Math.min(Math.abs(pullDown.current - y), 60))
          } else {
            pullDown.current = y
          }
        }
      },
      [onPullDown],
    )

    const handleTouchEnd = useCallback(() => {
      if (pullDownOffset === 60) {
        onPullDown && onPullDown()
      }
      if (onPullDown && scrollTop.current === 0) {
        pullDown.current = undefined
        setPullDownOffset(0)
      }
    }, [onPullDown, pullDownOffset])

    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(pullDownOffset) }}>
        {value => (
          <View
            direction="column"
            flex="flex"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={ref}
            {...simple(colorize(backgroundColor))}
            {...paddedCss(
              padded === true || padded === 'vertical',
              padded === true || padded === 'horizontal',
            )}
            style={
              value && value.x ? { transform: `translateY(${value.x}px)` } : {}
            }
            onScroll={handleScroll}
            {...props}
          >
            {children}
          </View>
        )}
      </Motion>
    )
  },
)

export default React.memo(SimpleLayout)

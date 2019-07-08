import React, { createElement, forwardRef, FunctionComponent, Ref } from 'react'
import { css } from 'glamor'

function getCssAlignValue(alignment: 'start' | 'end' | string) {
  if (alignment === 'start' || alignment === 'end') {
    return `flex-${alignment}`
  }
  return alignment
}

export type flexType =
  | number
  | 'none'
  | 'flex'
  | 'nogrow'
  | 'grow'
  | 'initial'
  | 'auto'
  | 'noshrink'

type alignH =
  | 'none'
  | 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'

type alignV = 'none' | 'start' | 'center' | 'end' | 'stretch'

type direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type wrapType = 'inherit' | 'initial' | 'wrap' | 'nowrap' | 'wrap-reverse'

function getCssFlexValue(flex: flexType) {
  if (typeof flex === 'number') {
    if (flex === 33) flex = 100 / 3
    if (flex === 66) flex = 200 / 3
    return `1 1 ${flex}%`
  }

  /**
   * CSS value of flex: flex-grow flex-shrink flex-basis
   */
  switch (flex) {
    case 'none':
      return '0 0 auto'
    case 'flex':
      return '1'
    case 'nogrow':
      return '0 1 auto'
    case 'grow':
      return '1 1 100%'
    case 'initial':
      return '0 1 auto'
    case 'auto':
      return '1 1 auto'
    case 'noshrink':
      return '1 0 auto'
  }
}

export type IViewProps = IView & React.HTMLAttributes<HTMLElement>
export interface IView {
  htmlElement?: string
  /** horizontal alignment */
  alignH?: alignH
  /** vertical alignment */
  alignV?: alignV
  /** direction */
  direction?: direction
  /** Passing true, will make the view fill out available space */
  fill?: boolean
  /** Defining how children will wrap */
  wrap?: wrapType
  /** Flex values, can be 5, 10, 15 ... 100 or 33, 66 */
  flex?: flexType

  forwardedRef?: Ref<HTMLDivElement>
}

function createStyles({
  direction,
  flex,
  alignV,
  alignH,
  wrap,
  fill,
  hasClick,
}: {
  direction?: direction
  flex: flexType
  alignH: alignH
  wrap?: wrapType
  alignV: alignV
  fill: boolean
  hasClick: boolean
}) {
  return css({
    ...((direction || flex) && { boxSizing: 'border-box' }),
    ...(direction && {
      alignContent: getCssAlignValue(alignV),
      alignItems: getCssAlignValue(alignV),
      display: 'flex',
      flexDirection: direction,
      justifyContent: getCssAlignValue(alignH),
      ...(wrap && { flexWrap: wrap }),
      ...(fill && {
        height: '100%',
        margin: 0,
        minHeight: '100%',
        width: '100%',
      }),
      ...(hasClick && {
        cursor: 'pointer',
      }),
    }),
    flex,
    ...(flex && { flex: getCssFlexValue(flex) }),
  })
}
/**
 * Everything in elemnts is view! It's the component to align and layout things
 *
 * ```example
 * <ThemeProvider>
 *   <View fill direction="row" alignH="end">
 *     <Text>Say Hello!</Text>
 *   </View>
 * </ThemeProvider>
 * ```
 */
const View: FunctionComponent<IViewProps> = ({
  alignH = 'start',
  alignV = 'stretch',
  children,
  htmlElement = 'div',
  direction,
  fill = false,
  flex = 'none',
  forwardedRef,
  wrap,
  ...props
}) => {
  return createElement(
    htmlElement,
    {
      ref: forwardedRef,
      ...createStyles({
        alignH,
        alignV,
        fill,
        wrap,
        flex,
        direction,
        hasClick: !!props.onClick,
      }),
      ...props,
    },
    children
  )
}

export type ViewRef = HTMLDivElement

export default forwardRef<ViewRef, IViewProps>((props, ref) => (
  <View {...props} forwardedRef={ref} />
))

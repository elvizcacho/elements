import React, { Component, ReactNode } from 'react'
import View, { IViewProps } from '../atoms/View'
import { css } from 'glamor'

interface IHorizontalViewProps {
  children: ReactNode[]
}
interface IState {
  children?: ReactNode[]
  currentChild: number
  nextChildren?: ReactNode[]
  waitForTransitionEnd: boolean
}

/**
 * HorizontalView is used to Views in a horizontal row, and will do smooth transitions between them.
 * The HorizontalView will always show the latest item that get's passed in as a children.
 *
 * So for this, it will only show the SecondItem.
 * ```
 * <HorizontalView>
 *  <FirstItem />
 *  <SecondItem />
 * </HorizontalView>
 * ```
 *
 * To do transitions between the items, you just *pass* in or *remove children*. So if we update the previous example
 * to be like this, it will transition from the SecondItem to the FirstItem:
 *
 * ```
 * <HorizontalView>
 *  <FirstItem />
 * </HorizontalView>
 * ```
 *
 * ## Using with React Router
 * The HorizontalView can work perfectly together with React Router. It will allow you
 * to have smooth transition from one Route to another.
 *
 * ### Example
 * We are building a taco app, because everyone likes tacos. It consists of 3 screens:
 * An overview of all available tacos (/tacos), a taco detail page (/tacos/:id) and a list of dips for that are
 * a good fit with that taco (/tacos/:id/dips).
 *
 * If you go to `/tacos` only the first route will be matched, the `TacoList` will render.
 * Now you click a link in the `TacosList` it will bring you to `/tacos/8343`. React Router will
 * render `TacosList` and `TacosDetail` and HorizontalView do a smooth transition from `TacosList` to
 * `TacosDetail`.
 *
 * ```
 * <HorizontalView>
 *  <Route path="/tacos" component={TacosList}/>
 *  <Route path="/tacos/:id" component={TacosDetail}/>
 *  <Route path="/tacos/:id/dips" component={TacosDipsView}/>
 * </HorizontalView>
 * ```
 **/
class HorizontalView extends Component<
  IViewProps & IHorizontalViewProps,
  IState
> {
  constructor(props: IHorizontalViewProps) {
    super(props)

    const children = props.children
    const currentChild = React.Children.count(children)

    this.state = {
      children,
      currentChild,
      nextChildren: undefined,
      waitForTransitionEnd: false,
    }
  }

  static getDerivedStateFromProps(
    { children: nextProps }: IHorizontalViewProps,
    { children: previousState }: IState
  ) {
    const [oldChildren, nextChildren] = [previousState, nextProps].map(
      (children = []) => children.filter(child => React.isValidElement(child))
    )

    return nextChildren.length < oldChildren.length
      ? {
          nextChildren,
          waitForTransitionEnd: true,
          currentChild: nextChildren.length,
        }
      : {
          children: nextChildren,
          currentChild: nextChildren.length,
        }
  }

  handleTransitionEnd = () => {
    if (this.state.waitForTransitionEnd) {
      this.setState({
        children: this.state.nextChildren,
        nextChildren: undefined,
        waitForTransitionEnd: false,
      })
    }
  }

  render() {
    const { currentChild, children } = this.state
    const { children: propsChildren, ...props } = this.props
    const translateX = (currentChild - 1) * -100

    return (
      <View flex="flex" {...css({ overflow: 'hidden' })}>
        <View
          direction="row"
          flex="flex"
          {...css({
            transform: `translate3d(${translateX}%, 0, 0)`,
            transition: '.5s',
          })}
          onTransitionEnd={this.handleTransitionEnd}
          {...props}
        >
          {React.Children.map(children, (child: ReactNode, i: number) => (
            <View
              // eslint-disable-next-line
              key={i}
              {...css({ width: '100%' })}
              flex="none"
              direction="column"
            >
              {child}
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default HorizontalView

import React, { Component, KeyboardEvent } from 'react'
import { css } from 'glamor'
import Icon from '../Icon'
import Text from '../Text'
import View from '../View'
import { ColorPalette, alpha } from '@allthings/colors'

const tick = () => new Promise(resolve => setTimeout(resolve, 0))

interface ICollapsibleProps {
  readonly title?: string
  readonly initiallyCollapsed?: boolean
  readonly hasBottomBorder?: boolean
  readonly tabIndex?: number
  readonly onToggle?: (on: boolean) => void
}
interface IState {}

/**
 * A Collapsible is a simple container, that makes it possible to change between collapsed and extended states, and this way hiding and showing the children passed in.
 * ```js
 * <ThemeProvider>
 *  <Card>
 *    <Collapsible
 *      title="Address"
 *      hasBottomBorder
 *      initiallyCollapsed={false}
 *      tabIndex={1}
 *    >
 *      <CardContent>
 *        <Text>Kaiser Joseph Str. 260</Text>
 *      </CardContent>
 *    </Collapsible>
 *    <Collapsible
 *        title="Contact"
 *        initiallyCollapsed={true}
 *        tabIndex={2}
 *    >
 *      <CardContent>
 *        <Text>1(23) 456-7890</Text>
 *      </CardContent>
 *    </Collapsible>
 *  </Card>
 * </ThemeProvider>
 * ```
 **/
class Collapsible extends Component<ICollapsibleProps, IState> {
  static defaultProps = {
    initiallyCollapsed: true,
    hasBottomBorder: false,
  }

  state = {
    collapsed: this.props.initiallyCollapsed,
    overflow: this.props.initiallyCollapsed ? 'hidden' : null,
  }

  async componentDidMount() {
    const { current } = this.childRef

    if (current && current.style) {
      if (!this.props.initiallyCollapsed) {
        current.style.height = `${current.scrollHeight}px`
        await tick()
        current.style.height = 'auto'
      } else {
        current.style.height = `0px`
      }
    }
  }

  childRef = React.createRef<HTMLDivElement>()

  toggleCollapse = async () => {
    const { current } = this.childRef
    if (current && current.style) {
      if (current.style.height !== '0px') {
        current.style.height = `${current.scrollHeight}px`
        await tick()
        current.style.height = '0px'
        this.setState({ collapsed: true, overflow: 'hidden' })
        // signal new state for the parent
        this.props.onToggle && this.props.onToggle(true)
      } else {
        current.style.height = `${current.scrollHeight}px`
        this.setState({ collapsed: false })
        // signal new state for the parent
        this.props.onToggle && this.props.onToggle(false)
      }
    }
  }

  handleTransitionEnd = () => {
    if (
      !this.state.collapsed &&
      this.childRef.current &&
      this.childRef.current.style
    ) {
      this.childRef.current.style.height = 'auto'
      this.setState({ overflow: null })
    }
  }

  onKeyPress = (e: KeyboardEvent) => e.key === 'Enter' && this.toggleCollapse()

  render() {
    const { title, children, hasBottomBorder, tabIndex } = this.props

    const { collapsed, overflow } = this.state
    return (
      <View
        direction="column"
        {...css({
          borderBottom:
            hasBottomBorder && `1px solid ${ColorPalette.lightGrey}`,
          width: '100%',
        })}
      >
        <View
          direction="row"
          alignH="space-between"
          onClick={this.toggleCollapse}
          {...css({
            backgroundColor: 'white',
            cursor: 'pointer',
          })}
        >
          <View
            direction="row"
            alignV="center"
            {...css({
              height: 50,
              padding: '0 20px',
              width: 'calc(100% - 50px)',
            })}
          >
            <Text
              strong
              style={{
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Text>
          </View>
          {/* arrow */}
          <View
            direction="row"
            alignV="center"
            alignH="center"
            {...css({
              width: '50px',
              height: '50px',
            })}
          >
            <View
              {...css({
                padding: '3px 5px 8px 5px',
                borderRadius: '2px',
                ':focus': { border: `2px solid ${alpha('#59baf7', 0.5)}` },
                outline: 'none',
              })}
              onKeyPress={this.onKeyPress}
              tabIndex={tabIndex}
            >
              <Icon
                name={collapsed ? 'arrow-down-filled' : 'arrow-up-filled'}
                size={10}
                color="lightGreyIntense"
              />
            </View>
          </View>
        </View>
        <View
          ref={this.childRef}
          onTransitionEnd={this.handleTransitionEnd}
          {...css({
            transitionProperty: 'height',
            transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            overflow,
            transformOrigin: 'top',
          })}
        >
          {children}
        </View>
      </View>
    )
  }
}

export default Collapsible

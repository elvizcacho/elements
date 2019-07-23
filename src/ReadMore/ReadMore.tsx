import React, { Component } from 'react'
import { css } from 'glamor'
import View from '../View'
import Text from '../Text'

interface IReadMoreProps {
  initiallyCollapsed: boolean
  readMoreLabel: string
  cropAtHeight: string | number
  threshold: number
  onToggle: (on: boolean) => void
}

/**
 *   A ReadMore is a simple container, to show / (hide) content. It will automatically decide whether to show the `read more` link or not.
 * ```example
<Card>
  <ListItem>
    <ReadMore>
      <Text>Testing a short text...</Text>
    </ReadMore>
  </ListItem>
  <ListItem>
    <ReadMore>
      <Text>
        Testing a longer text with a cropAtHeight 80vw! Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Maecenas
        dignissim sem in elit mollis consequat. Suspendisse potenti.
        Maecenas a velit vel dolor mollis viverra. Praesent ex diam,
        ultricies ac ultricies ut, efficitur sit amet leo. Vivamus ex
        ante, dapibus a elementum vel, ultrices in erat. Vestibulum
        eget ante turpis. Donec dapibus, purus vel euismod egestas,
        arcu ipsum.
      </Text>
    </ReadMore>
  </ListItem>
</Card>
 *  ```
 **/
class ReadMore extends Component<IReadMoreProps> {
  static defaultProps = {
    initiallyCollapsed: true,
    readMoreLabel: 'Read more...',
    cropAtHeight: '17vh', // we already use 60vh for imgs
    threshold: 40, // We fancy a treshold value of 80 very often...
    onToggle: () => {},
  }

  state = { collapsed: this.props.initiallyCollapsed }

  componentDidMount() {
    this.toggleCollapseLink()
    window.addEventListener('resize', this.toggleCollapseLink)
    // @todo: We should watch here for Dom changes and trigger the collapse ALSO
    // on DOM changes - see -> https://github.com/jcgertig/react-mutation-observer
    // -
    // Especially stuff like dangerouslySetInnerHTML is of course NOT triggering
    // collapse correctly (it's simply not handled by the react lifecycle)
    // -> https://stackoverflow.com/questions/44550462/reactjs-callback-for-dangerouslysetinnerhtml-complete
    // -
    // I'm not sure about the right place for this functionality tho since it's
    // maybe better to be implemented into the mother component? Or maybe provide
    // a withObserver method?
    const { current } = this.childRef
    if (current && (window as any).MutationObserver) {
      this.observer = new MutationObserver(this.toggleCollapseLink)
      this.observer.observe(current, {
        attributes: false,
        characterData: false,
        childList: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleCollapseLink)
    this.observer && this.observer.disconnect()
  }

  protected childRef = React.createRef<HTMLDivElement>()
  private observer: MutationObserver

  toggleCollapse = () => {
    const { current } = this.childRef
    if (current && current.style) {
      if (!this.state.collapsed) {
        current.style.height = `${this.props.cropAtHeight}px`
        this.setState({ collapsed: true })
        // signal new state for the parent
        this.props.onToggle(true)
      } else {
        current.style.height = `${current.scrollHeight}px`
        this.setState({ collapsed: false })
        // signal new state for the parent
        this.props.onToggle(false)
      }
    }
  }

  toggleCollapseLink = () => {
    const { current } = this.childRef
    if (current && current.style) {
      let defaultWrapperHeight = 0
      const elHeight = current.scrollHeight

      // Let's check for viewport dimensions in here and convert them to px...
      const regex = /(vw|vh)$/
      const { cropAtHeight, threshold } = this.props
      if (typeof cropAtHeight === 'string' && regex.test(cropAtHeight)) {
        if (cropAtHeight.match(/(vh)/)) {
          defaultWrapperHeight =
            (window.innerHeight / 100) *
            parseInt(cropAtHeight.replace(regex, ''))
        }
        if (cropAtHeight.match(/(vw)/)) {
          defaultWrapperHeight =
            (window.innerWidth / 100) *
            parseInt(cropAtHeight.replace(regex, ''))
        }
      } else if (typeof cropAtHeight === 'number') {
        defaultWrapperHeight = cropAtHeight
      }
      defaultWrapperHeight = defaultWrapperHeight + threshold

      // Let's check whether we should show the Read More link or not
      if (elHeight < defaultWrapperHeight) {
        current.style.height = `${elHeight}px`
        this.props.onToggle(false)
        this.setState({ collapsed: false })
      } else {
        current.style.height = `${defaultWrapperHeight}px`
        this.props.onToggle(true)
        this.setState({ collapsed: true })
      }
    }
  }

  render() {
    const { children, readMoreLabel } = this.props
    return (
      <View
        direction="column"
        {...css({
          width: '100%',
        })}
      >
        {/* Child */}
        <View
          ref={this.childRef}
          {...css({
            transitionProperty: 'height',
            transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            overflow: 'hidden',
            transformOrigin: 'top',
          })}
        >
          {children}
        </View>
        {this.state.collapsed && (
          <View
            onClick={this.toggleCollapse}
            {...css({
              cursor: 'pointer',
              paddingTop: this.state.collapsed ? 35 : 10,
              marginTop: this.state.collapsed ? -30 : 0,
              background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 57%,rgba(255,255,255,1) 100%)`,
            })}
          >
            <Text size="s" {...css({ opacity: 0.7 })}>
              {readMoreLabel}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

export default ReadMore

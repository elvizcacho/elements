import React from 'react'
import PropTypes from 'prop-types'
import json2mq from 'json2mq'
import { css } from 'glamor'
import Media from 'react-media'
import View from '../atoms/View'

const MQ = {
  mobile: { maxWidth: 640 },
  tablet: { minWidth: 641, maxWidth: 1024 },
  desktop: { minWidth: 1025 },
}

type DeviceType = 'mobile' | 'tablet' | 'desktop'

export const createMQ = (...devices: DeviceType[] | [DeviceType[]]) => {
  const _devices: DeviceType[] = Array.isArray(devices[0])
    ? devices[0]
    : (devices as DeviceType[])

  return `@media ${json2mq(_devices.map(device => MQ[device]))}`
}

const displayStyle = (mq: string) =>
  css({
    [`@media ${mq}`]: {
      display: 'none !important',
    },
  })

interface IResponsiveProps {
  mobile?: boolean
  tablet?: boolean
  desktop?: boolean
  onlyRenderOnMatch?: boolean
}

export default class Responsive extends React.Component<IResponsiveProps> {
  static propTypes = {
    /** Children to be displayed when component matches screen size(s) */
    children: PropTypes.node.isRequired,
    /** Whether the component should be displayed on mobile or not */
    mobile: PropTypes.bool,
    /** Whether the component should be displayed on tablet or not */
    tablet: PropTypes.bool,
    /** Whether the component should be displayed on desktop or not */
    desktop: PropTypes.bool,
    /** Ensures that the children will only be rendered on a match, if false it will be hidden by CSS (but still be rendered) */
    onlyRenderOnMatch: PropTypes.bool,
  }

  renderChildrenFn = () => this.props.children

  render() {
    const { mobile, tablet, desktop, onlyRenderOnMatch, children } = this.props
    const bp = []

    if (onlyRenderOnMatch) {
      mobile && bp.push(MQ.mobile)
      tablet && bp.push(MQ.tablet)
      desktop && bp.push(MQ.desktop)

      return <Media query={json2mq(bp)} render={this.renderChildrenFn} />
    } else {
      // negate media queries because the logic inverts when using `display: none`
      !mobile && bp.push(MQ.mobile)
      !tablet && bp.push(MQ.tablet)
      !desktop && bp.push(MQ.desktop)
      const style = displayStyle(json2mq(bp))

      return <View {...style}>{children}</View>
    }
  }
}

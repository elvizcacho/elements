import React from 'react'
import PropTypes from 'prop-types'

import { css, keyframes } from 'glamor'
import { isIE11 } from '../utils/viewport'

const spin = keyframes('load', {
  '0%': {
    WebkitTransform: 'rotate(360deg)',
    transform: 'rotate(360deg)',
  },
  '100%': {
    WebkitTransform: 'rotate(0deg)',
    transform: `rotate(0deg)`,
  },
})

const styles = size => ({
  spinner: css({
    textIndent: '-9999em',
    width: size - 6,
    height: size - 6,
    borderRadius: '50%',
    borderRight: '2px solid rgba(255,255,255,0.6)',
    borderTop: '2px solid #369980',
    borderLeft: '2px solid #369980',
    borderBottom: '2px solid #369980',
    // background: '#369980',
    position: 'relative',
    animation: `${spin} 1.1s infinite linear`,
    WebkitTransform: 'translateZ(0)',
    msTransform: 'translateZ(0)',
    transform: 'translateZ(0)',
    // '&:before': {
    //   width: '50%',
    //   height: '50%',
    //   background: '#369980',
    //   borderRadius: '100% 0 0 0',
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   content: ' ',
    // },
    // '&:after': {
    //   backgroundColor: 'white',
    //   width: '80%',
    //   height: '80%',
    //   borderRadius: '50%',
    //   content: ' ',
    //   margin: 'auto',
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    // },
  }),
})

/**
 * The spinner is usefull to indicate a loading state
 *
 * ```example
 * <Spinner />
 * ```
 */

const Spinner = ({ size = 30 }) =>
  isIE11(window.navigator.userAgent) ? (
    <div {...css(styles(size).spinner)} />
  ) : (
    <div>
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="0" y="0" width="100" height="100" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#ffffff"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#369980"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            from="0"
            to="502"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            repeatCount="indefinite"
            values="125.5 125.5;1 250;125.5 125.5"
          />
        </circle>
      </svg>{' '}
      {'<-- Chrome'}
      <div>
        <div {...css(styles(size).spinner)} /> {'↑ Internet Explorer'}
      </div>
    </div>
  )

Spinner.propTypes = {
  size: PropTypes.number,
}

export default Spinner

import React, { PureComponent, PropsWithChildren, createRef } from 'react'
import { css } from 'glamor'
import { between } from '../Card/utils/math'

const menuStyle = css({
  position: 'absolute',
  right: 0,
  top: 0,
  background: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, .38)',
  minWidth: 160,
  '> *': {
    borderTop: '1px solid #ecf0f1',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  '> :hover': {
    background: '#f9f9f9',
  },
  '> :first-child': {
    borderTop: 0,
  },
})

interface IOverlayMenuProps {
  onRequestClose: (e: MouseEvent) => void
}

export default class OverlayMenu extends PureComponent<
  PropsWithChildren<IOverlayMenuProps>
> {
  private menu = createRef<HTMLDivElement>()
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true)
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (this.menu.current) {
      const {
        bottom,
        left,
        right,
        top,
      } = this.menu.current.getBoundingClientRect()

      if (
        !between(e.clientY, top, bottom) ||
        !between(e.clientX, left, right)
      ) {
        this.props.onRequestClose(e)
      }
    }
  }

  render() {
    return (
      <div ref={this.menu} {...menuStyle}>
        {this.props.children}
      </div>
    )
  }
}

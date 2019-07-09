import React, { FunctionComponent, useEffect, useRef } from 'react'
import { css } from 'glamor'
import { between } from './utils/math'

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

const OverlayMenu: FunctionComponent<IOverlayMenuProps> = ({
  onRequestClose,
  children,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (menuRef.current) {
        const {
          bottom,
          left,
          right,
          top,
        } = menuRef.current.getBoundingClientRect()

        if (
          !between(e.clientY, top, bottom) ||
          !between(e.clientX, left, right)
        ) {
          onRequestClose(e)
        }
      }
    }
    document.addEventListener('click', handleDocumentClick, true)

    return () => {
      document.removeEventListener('click', handleDocumentClick, true)
    }
  }, [onRequestClose])

  return (
    <div ref={menuRef} {...menuStyle}>
      {children}
    </div>
  )
}

export default OverlayMenu

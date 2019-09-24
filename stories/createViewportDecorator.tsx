import { css } from 'glamor'
import React, { KeyboardEvent, PropsWithChildren, useState } from 'react'

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    minHeight: '100vh',
    left: 0,
    top: 0,
    background: '#efefef',
    fontSmooth: 'auto',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'auto',
  }),

  mobileView: css({
    width: 320,
    height: 568,
    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
    background: '#f0f2f5',
    marginTop: 40,
    overflow: 'auto',
    position: 'relative',
  }),
}

export const Viewport = ({ children }: PropsWithChildren<{}>) => {
  const [width, setWidth] = useState(320)
  const [height, setHeight] = useState(568)
  const [showPadding, setShowPadding] = useState(false)
  const [shiftPressed, setShiftPressed] = useState(false)

  const toggleShiftPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    const { shiftKey } = e
    if ((!shiftPressed && shiftKey) || (shiftPressed && !shiftKey)) {
      setShiftPressed(shiftKey)
    }
  }

  return (
    <div {...styles.wrapper}>
      <div {...css({ flexDirection: 'row' })}>
        <input
          type="number"
          style={{ width: 40 }}
          value={width}
          step={shiftPressed ? 10 : 1}
          onChange={e => setWidth(Number(e.target.value))}
          onKeyDown={toggleShiftPressed}
          onKeyUp={toggleShiftPressed}
        />
        <span>⨉</span>
        <input
          type="number"
          style={{ width: 40 }}
          value={height}
          step={shiftPressed ? 10 : 1}
          onChange={e => setHeight(Number(e.target.value))}
          onKeyDown={toggleShiftPressed}
          onKeyUp={toggleShiftPressed}
        />
        <label>
          <input
            type="checkbox"
            onClick={() => setShowPadding(padding => !padding)}
          />{' '}
          With padding?
        </label>
      </div>
      <div
        {...css(styles.mobileView, { padding: showPadding && 20 })}
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  )
}

export default function createViewportDecorator() {
  return (story: any) => <Viewport>{story()}</Viewport>
}

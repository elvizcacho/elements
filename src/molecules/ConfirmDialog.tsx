import React, { Component } from 'react'
import { css } from 'glamor'
import CardButton from './Card/CardButton'
import CardFooter from './Card/CardFooter'
import Text from '../atoms/Text'
import View from '../atoms/View'
import { ColorPalette } from '@allthings/colors'

const styles = {
  insideView: css({
    backgroundColor: '#fff',
    borderRadius: '3px',
    maxWidth: '500px',
    margin: '20px',
  }),
  text: css({
    textAlign: 'center',
    padding: '25px',
  }),
  wrapper: css({
    position: 'fixed',
    top: -100,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 500,
  }),
}

export interface IConfirmDialogProps {
  acceptButtonLabel: string
  cancelButtonLabel: string
  message: string
  onCancel: () => void
  onSuccess: () => void
}

class ConfirmDialog extends Component<IConfirmDialogProps> {
  wrapperRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
    document.addEventListener('touchstart', this.handleClickOutside)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
    document.removeEventListener('touchstart', this.handleClickOutside)
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault()
    if (event.key === 'Escape') {
      this.props.onCancel()
    }
  }

  handleClickOutside = (event: MouseEvent) => {
    if (
      event.target &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as HTMLElement)
    ) {
      this.props.onCancel()
    }
  }

  render() {
    const {
      acceptButtonLabel,
      cancelButtonLabel,
      message,
      onCancel,
      onSuccess,
      ...props
    } = this.props

    return (
      <View
        direction="row"
        alignV="center"
        alignH="center"
        {...styles.wrapper}
        {...props}
      >
        <div {...styles.insideView} ref={this.wrapperRef}>
          <Text color={ColorPalette.lightBlack} {...styles.text}>
            {message}
          </Text>
          <CardFooter>
            <CardButton backgroundColor={ColorPalette.white} onClick={onCancel}>
              <Text>{cancelButtonLabel}</Text>
            </CardButton>
            <CardButton
              backgroundColor={ColorPalette.white}
              onClick={onSuccess}
              autoFocus
            >
              <Text>{acceptButtonLabel}</Text>
            </CardButton>
          </CardFooter>
        </div>
      </View>
    )
  }
}

export default ConfirmDialog

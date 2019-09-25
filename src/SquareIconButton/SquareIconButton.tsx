import { css } from 'glamor'
import React, { Component } from 'react'
import Icon, { IconSizeType, IconType } from '../Icon'
import { createMQ } from '../Responsive'
import { color, colorCode } from '../utils/propTypes/color'
import View, { IViewProps } from '../View'

const box = (background: string, onClick: boolean) =>
  css({
    height: 50,
    width: 50,
    borderRadius: 2,
    backgroundColor: background,
    [createMQ('mobile')]: {
      height: 40,
      width: 40,
    },
    ':hover': {
      cursor: onClick && 'pointer',
    },
  })

interface ISquareIconButtonProps extends IViewProps {
  readonly icon: IconType
  readonly color?: color
  /** Size of the icon child component (check <Icon />) **/
  readonly iconSize?: IconSizeType
  readonly iconColor?: string
}

/**
 * Button with only an icon. Can be used in toolbars. May also be used
 * for back-buttons in the titlebar.
 *
 * ```example
 * <SquareIconButton icon="armchair-filled" color="red" iconColor="white" />
 * ```
 */
class SquareIconButton extends Component<ISquareIconButtonProps> {
  static defaultProps = {
    color: 'transparent',
    iconColor: 'lightBlack',
    iconSize: 's',
  }

  render() {
    const {
      icon,
      color = 'primary',
      iconColor,
      iconSize,
      onClick,
      ...props
    } = this.props
    return (
      <View
        {...box(colorCode(color), !!onClick)}
        direction="row"
        alignH="center"
        alignV="center"
        onClick={onClick}
        {...props}
      >
        <Icon color={iconColor} size={iconSize} name={icon} />
      </View>
    )
  }
}

export default SquareIconButton

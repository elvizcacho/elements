import React, { Component } from 'react'
import Icon, { IconType } from '../Icon'
import Circle from '../Circle'
import { color } from '../utils/propTypes/color'
import Theme from '../Theme'

interface IListIconProps {
  readonly name: IconType
  readonly iconColor?: color
  readonly backgroundColor?: color
}

/**
 * ListIcons are used to display icons in a list.
 *
 * ```example
 * <ResourceProvider>
 *   <ListIcon
 *     color="white"
 *     backgroundColor="blue"
 *     name="serving-filled"
 *   />
 * </ResourceProvider>
 * ```
 */
class ListIcon extends Component<IListIconProps> {
  render() {
    const {
      name,
      backgroundColor = 'primary',
      iconColor = 'textOnBackground',
    } = this.props
    return (
      <Theme>
        {({ colorize }) => (
          <Circle color={colorize(backgroundColor)} fill radius={40}>
            <Icon color={iconColor} size="s" name={name} />
          </Circle>
        )}
      </Theme>
    )
  }
}

export default ListIcon

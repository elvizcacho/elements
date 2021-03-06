import React from 'react'
import Circle from '../Circle'
import Icon, { IconType } from '../Icon'
import { useTheme } from '../Theme'
import { color } from '../utils/propTypes/color'

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
const ListIcon = ({
  name,
  backgroundColor = 'primary',
  iconColor = 'textOnBackground',
}: IListIconProps) => {
  const { colorize } = useTheme()

  return (
    <Circle color={colorize(backgroundColor)} fill radius={40}>
      <Icon color={iconColor} size="s" name={name} />
    </Circle>
  )
}

export default ListIcon

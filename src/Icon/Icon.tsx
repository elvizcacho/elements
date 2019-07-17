import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from 'react'
import View, { IViewProps } from '../View'
import { ResourceProviderContext } from '../ResourceProvider'
import Theme from '../Theme'
import { css } from 'glamor'

export const Icons = [
  'alarm',
  'alarm-filled',
  'armchair',
  'armchair-filled',
  'arrow-down',
  'arrow-down-filled',
  'arrow-left',
  'arrow-left-filled',
  'arrow-right',
  'arrow-right-filled',
  'arrow-up',
  'arrow-up-filled',
  'baby-stroller',
  'baby-stroller-filled',
  'badge',
  'badge-filled',
  'ball-soccer',
  'ball-soccer-filled',
  'bank-notes',
  'bank-notes-filled',
  'book',
  'book-filled',
  'book-open',
  'book-open-filled',
  'calendar-check',
  'calendar-check-filled',
  'camera',
  'camera-filled',
  'car',
  'car-filled',
  'chat',
  'chat-filled',
  'check',
  'check-circle',
  'check-circle-filled',
  'check-filled',
  'check-light',
  'check-light-filled',
  'cloud',
  'cloud-filled',
  'cloud-star',
  'cloud-star-filled',
  'cog',
  'cog-filled',
  'comment',
  'comment-filled',
  'computer',
  'computer-filled',
  'download',
  'download-filled',
  'dress',
  'dress-filled',
  'edit',
  'edit-filled',
  'email',
  'email-filled',
  'file',
  'file-document',
  'file-document-filled',
  'file-filled',
  'folder',
  'folder-filled',
  'graduate',
  'graduate-filled',
  'hand-bag',
  'hand-bag-filled',
  'heart',
  'heart-beat',
  'heart-beat-filled',
  'heart-crap',
  'heart-crap-filled',
  'heart-filled',
  'house',
  'house-add-filled',
  'house-chart-filled',
  'house-filled',
  'lightbulb',
  'lightbulb-filled',
  'list-bullets',
  'list-bullets-filled',
  'location-pin',
  'location-pin-filled',
  'location-pin-food',
  'location-ping-food-filled',
  'login-key',
  'login-key-filled',
  'logout',
  'logout-filled',
  'man-megaphone',
  'man-megaphone-filled',
  'newspaper',
  'newspaper-filled',
  'paperclip',
  'paperclip-filled',
  'pet-paw',
  'pet-paw-filled',
  'phone',
  'phone-filled',
  'picture-add-filled',
  'picture-filled',
  'plus',
  'plus-filled',
  'plus-light',
  'plus-light-filled',
  'power',
  'power-filled',
  'present-box',
  'present-box-filled',
  'remove',
  'remove-filled',
  'remove-light',
  'remove-light-filled',
  'sand-glass',
  'sand-glass-filled',
  'search',
  'search-filled',
  'send',
  'send-filled',
  'serving',
  'serving-filled',
  'settings',
  'settings-filled',
  'sharetime',
  'sharetime-filled',
  'shopping-cart',
  'shopping-cart-filled',
  'smartphone',
  'smartphone-filled',
  'sort',
  'sort-asc',
  'sort-desc',
  'sync',
  'sync-filled',
  'temperature-filled',
  'ticket',
  'ticket-filled',
  'tile-filled',
  'trash',
  'trash-filled',
  'trending-down',
  'trending-down-filled',
  'trending-up',
  'trending-up-filled',
  'upload',
  'upload-filled',
  'user',
  'user-chat',
  'user-chat-filled',
  'user-filled',
  'user-group',
  'user-group-chat',
  'user-group-chat-filled',
  'user-group-filled',
  'view',
  'view-filled',
  'wrench-screwdriver',
  'wrench-screwdriver-filled',
] as const

export type IconType = typeof Icons[number]
export type IconSizeType = 'xs' | 's' | 'm' | 'l' | number

let hasWarnedBefore = false

const getSize = (size: IconSizeType) => {
  switch (size) {
    case 'xs':
      return 16
    case 's':
      return 21.5
    case 'm':
      return 27.5
    case 'l':
      return 43
    default:
      return size
  }
}

const IconCache = new Map()

const loadIcon = async (name: string, resourcePath: string) => {
  const iconName = getIconName(name)
  if (!resourcePath) {
    !hasWarnedBefore &&
      console.warn(
        'In order to use icons, you need to wrap everything into a ResourceProvider',
      )
    hasWarnedBefore = true
  }

  if (!IconCache.has(name)) {
    const path = `${resourcePath}/react-icons/production/${iconName}.svg`
    const icon = await fetch(path)
    const html = await icon.text()
    IconCache.set(name, html)
  }
  return IconCache.get(name)
}

const getIconName = (name: string) => {
  // Transforms from my-icon-name to myIconName
  const iconName = name.replace(/-([a-z])/g, g => g[1].toUpperCase())

  // Transforms from MyIconNameIcon to myIconName
  return (iconName.charAt(0).toLowerCase() + iconName.substr(1)).replace(
    'Icon',
    '',
  )
}

interface IIconProps extends IViewProps {
  /** The name of the icon */
  name: IconType
  /** The color of the icon */
  color?: string
  /** Can be xs, s, m, l */
  size?: IconSizeType
}

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product, and common interaction
 * patterns that are available.
 *
 * *Note:* To use Icons, you need to wrap everything in a **ResourceProvider**
 */
const Icon: FunctionComponent<IIconProps> = ({
  color = 'primary',
  name,
  size = 'm',
  ...props
}) => {
  const iconName = getIconName(name)
  const isFilled = iconName.indexOf('Filled') !== -1
  const { width, height } = {
    width: getSize(size),
    height: getSize(size),
  }

  const [html, setHtml] = useState('')

  const { resourcePath } = useContext(ResourceProviderContext)

  useEffect(() => {
    loadIcon(iconName, resourcePath).then(setHtml)
  }, [iconName, resourcePath])

  return (
    <Theme>
      {({ colorize }) => (
        <View
          {...props}
          {...css({
            width: width,
            height: height,
            fill: isFilled && colorize(color),
            stroke: !isFilled && colorize(color),
          })}
          alignH="center"
          alignV="center"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </Theme>
  )
}

export default Icon

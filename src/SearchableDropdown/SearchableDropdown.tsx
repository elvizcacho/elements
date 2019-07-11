import React, {
  ReactNode,
  createRef,
  MouseEvent,
  useEffect,
  useState,
  SyntheticEvent,
} from 'react'
import Downshift from 'downshift'
import { css, keyframes } from 'glamor'
import Relative from '../Relative/index'
import Absolute from '../Absolute/index'
import View from '../View/index'
import Text from '../Text/index'
import List from '../List/index'
import ListItem from '../ListItem/index'
import Input from '../Input/index'
import { alpha, ColorPalette } from '@allthings/colors'
import Icon, { IconType } from '../Icon/index'
import { noop } from '@babel/types'
import { TextInput } from '../index'

const bounceDownwardsAnim = keyframes('bounce', {
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-10px)' },
  '60%': { transform: 'translateY(-10px)' },
})

const bounceUpwardsAnim = keyframes('bounce', {
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(+10px)' },
  '60%': { transform: 'translateY(+10px)' },
})

const Placement = {
  top: 'top',
  bottom: 'bottom',
}

const INPUT_FIELD_HEIGHT = 50

const styles = {
  area: css({
    width: '100%',
    height: INPUT_FIELD_HEIGHT,
    position: 'relative',
    backgroundColor: ColorPalette.white,
  }),
  disabledInput: css({
    width: 'calc(100% - 5px)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    paddingRight: '30px',
    color: 'black',
    backgroundColor: 'white',
    pointerEvents: 'none',
  }),
  iconWrapper: css({
    cursor: 'pointer',
    height: '100%',
    width: INPUT_FIELD_HEIGHT,
    padding: '16px 16px 16px 20px',
  }),
  label: css({
    width: '100%',
    // position: 'absolute',
    // left: 15,
    // fontSize: 10,
    // opacity: 0,
    // transition: 'all .225s ease-out',
  }),
  list: (isOpen: boolean, menuHeight: number, placement: EDirection) =>
    css({
      boxShadow: isOpen && '1px 1px 3px rgba(29, 29, 29, 0.125)',
      maxHeight: menuHeight,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'absolute',
      bottom: placement === Placement.top && INPUT_FIELD_HEIGHT,
      width: '100%',
      zIndex: 9999,
    }),
  wrapper: (isOpen: boolean) =>
    css({
      alignItems: 'stretch',
      border: 'none',
      boxShadow: isOpen ? '1px 1px 3px rgba(29, 29, 29, 0.125)' : '',
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      width: '100%',
      backgroundColor: ColorPalette.white,
    }),
}

type ItemType = {
  label: ReactNode
  value: string
}

enum EDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface ISearchableDropdownProps {
  /** If true, than the field can be cleared */
  clearable?: boolean
  /** Icon on the left of the input field */
  icon?: IconType
  /** The dropdown items to show */
  items: ItemType[]
  /** Initially selected item - this value is uncontrolled */
  initialSelectedItem?: ItemType
  /** A floating label */
  label?: string
  /** The height of the menu in pixels. */
  menuHeight?: number
  /** For forms */
  name?: string
  /** Callback triggered when clearing the selection. */
  onSelect?: (item: ItemType) => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: EDirection
  /** Selected item - this item can be controlled */
  selectedItem?: ItemType
}

const SearchableDropdown = ({
  clearable = false,
  icon,
  items,
  initialSelectedItem,
  label = '',
  menuHeight = INPUT_FIELD_HEIGHT,
  name = '',
  onSelect = noop,
  placeholder = '',
  placement = EDirection.BOTTOM,
  selectedItem,
}: ISearchableDropdownProps) => {
  const [showScrollArrow, setShowScrollArrow] = useState(false)

  const listRef = createRef<HTMLDivElement>()
  const searchRef = createRef<HTMLDivElement>()

  const handleListScroll = (e: SyntheticEvent) => {
    if (showScrollArrow && (e.target as any).scrollTop > 0) {
      setShowScrollArrow(false)
    }
  }

  const showArrowIfNecessary = () =>
    listRef.current &&
    menuHeight &&
    setShowScrollArrow(listRef.current.scrollHeight > menuHeight)

  const handleIconClick = (
    event: MouseEvent<HTMLElement>,
    showClearIcon: boolean,
    clearSelection: () => void,
  ) => {
    console.log('TODO: handle icon click', event, showClearIcon, clearSelection)
    // showClearIcon
    //   ? (e: MouseEvent<HTMLElement>) => {
    //       e.stopPropagation()
    //       clearSelection()
    //     }
    //   : undefined
  }

  const renderScrollArrow = () => {
    if (!showScrollArrow) {
      return
    }

    return (
      <Absolute
        bottom={placement === Placement.bottom ? 15 : undefined}
        top={placement === Placement.top ? 15 : undefined}
        right={15}
      >
        {placement === Placement.top ? (
          <Icon
            color="black"
            name="arrow-up"
            size="xs"
            {...css({
              animation: `${bounceUpwardsAnim} 2500ms 2`,
            })}
          />
        ) : (
          <Icon
            color="black"
            name="arrow-down"
            size="xs"
            {...css({
              animation: `${bounceDownwardsAnim} 2500ms 2`,
            })}
          />
        )}
      </Absolute>
    )
  }

  useEffect(() => {
    showArrowIfNecessary()
  })

  return (
    <Downshift
      itemToString={item => (item ? item.label : '')}
      onChange={onSelect}
      initialSelectedItem={initialSelectedItem}
      selectedItem={selectedItem}
    >
      {({
        isOpen,
        toggleMenu,
        getItemProps,
        highlightedIndex,
        clearSelection,
        selectedItem,
      }) => {
        const showClearIcon = clearable && selectedItem && selectedItem.value

        return (
          <div {...styles.wrapper(isOpen)}>
            <Relative>
              <View onClick={() => toggleMenu()} {...styles.area}>
                <Input
                  disabled
                  icon={icon}
                  label={label}
                  placeholder={placeholder}
                  value={(selectedItem && selectedItem.label) || ''}
                  readOnly
                  name={name}
                  hasRightIcon
                  {...styles.disabledInput}
                />

                <Absolute
                  top={0}
                  right={0}
                  {...styles.iconWrapper}
                  onClick={event =>
                    handleIconClick(event, showClearIcon, clearSelection)
                  }
                >
                  {showClearIcon && (
                    <Icon color="black" name="remove-light" size={10} />
                  )}

                  <Icon
                    color="black"
                    name={
                      placement === Placement.top ? 'arrow-up' : 'arrow-down'
                    }
                    size={10}
                  />
                </Absolute>
              </View>
            </Relative>

            {isOpen && (
              <Relative>
                <TextInput
                  name={`search-${Date.now()}`}
                  type="text"
                  placeholder="Search"
                  hasRightIcon={false}
                  forwardedRef={searchRef}
                />
                <List
                  direction={
                    placement === Placement.top ? 'column-reverse' : 'column'
                  }
                  onScroll={handleListScroll}
                  ref={listRef}
                  {...styles.list(isOpen, menuHeight, placement)}
                >
                  {items.map((item, index) => (
                    <ListItem
                      key={item.value}
                      {...getItemProps({
                        index,
                        item,
                        key: item.value,
                        style: {
                          backgroundColor:
                            highlightedIndex === index
                              ? alpha(ColorPalette.background.bright, 0.5, true)
                              : ColorPalette.background.white,
                        },
                      })}
                    >
                      <Text size="l" {...styles.label}>
                        {item.label}
                      </Text>
                    </ListItem>
                  ))}
                  {renderScrollArrow()}
                </List>
              </Relative>
            )}
          </div>
        )
      }}
    </Downshift>
  )
}

export default SearchableDropdown

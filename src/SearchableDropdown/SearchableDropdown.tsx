import React, { createRef, useState, SyntheticEvent } from 'react'
import Downshift, { StateChangeOptions, DownshiftState } from 'downshift'
import { css } from 'glamor'
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
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    overflow: 'hidden',
    paddingRight: '30px',
    pointerEvents: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 5px)',
  }),
  iconWrapper: css({
    cursor: 'pointer',
    height: '100%',
    padding: '16px 16px 16px 20px',
  }),
  label: css({
    width: '100%',
  }),
  list: (menuHeight: number, placement: EDirection) =>
    css({
      bottom: placement === Placement.top && INPUT_FIELD_HEIGHT,
      boxShadow: '1px 1px 3px rgba(29, 29, 29, 0.125)',
      maxHeight: menuHeight,
      overflowX: 'hidden',
      overflowY: 'auto',
      width: '100%',
      zIndex: 9999,
    }),
  listItem: css({
    ':hover': {
      backgroundColor: alpha(ColorPalette.background.bright, 0.5, true),
    },
  }),
  searchInput: css({
    borderTop: `1px solid ${ColorPalette.lightGrey}`,
  }),
  wrapper: (isOpen: boolean) =>
    css({
      alignItems: 'stretch',
      backgroundColor: ColorPalette.white,
      border: 'none',
      boxShadow: isOpen ? '1px 1px 3px rgba(29, 29, 29, 0.125)' : '',
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      width: '100%',
    }),
}

export interface IDropdownItem {
  label: string
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
  items: IDropdownItem[]
  /** Initially selected item - this value is uncontrolled */
  initialSelectedItem?: IDropdownItem
  /** A floating label */
  label?: string
  /** The "Load more" text */
  loadMoreText?: string
  /** The height of the menu in pixels. */
  menuHeight?: number
  /** For forms */
  name?: string
  /** The text is shown if no result was found */
  noResultsText?: string
  /** Callback triggered when clicking on "Load more" in items list */
  onLoadMore?: () => void
  /** Callback triggered when clearing the selection. */
  onSelect?: (item: IDropdownItem) => void
  /** Callback triggered when search value changes */
  onSearch?: (event: SyntheticEvent) => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: EDirection
  /** The search term */
  searchTerm?: string
  /** Selected item - this item can be controlled */
  selectedItem?: IDropdownItem
}

const SearchableDropdown = ({
  clearable = false,
  icon,
  items,
  initialSelectedItem,
  label = '',
  loadMoreText = '',
  menuHeight = INPUT_FIELD_HEIGHT,
  name = '',
  noResultsText = '',
  onLoadMore = noop,
  onSearch = noop,
  onSelect = noop,
  placeholder = '',
  placement = EDirection.BOTTOM,
  searchTerm = '',
  selectedItem,
}: ISearchableDropdownProps) => {
  const [showScrollArrow, setShowScrollArrow] = useState(false)

  const searchRef: any = createRef()

  const handleListScroll = (e: SyntheticEvent) => {
    if (showScrollArrow && (e.target as any).scrollTop > 0) {
      setShowScrollArrow(false)
    }
  }

  const handleClearIconClick = (
    event: SyntheticEvent,
    clearSelection: () => void,
  ) => {
    event.stopPropagation()
    clearSelection()
  }

  const stateReducer = (
    _: DownshiftState<any>,
    changes: StateChangeOptions<any>,
  ) => {
    if (changes && changes.isOpen) {
      setTimeout(
        () =>
          searchRef.current && (searchRef.current as HTMLInputElement).focus(),
        0,
      )
    }

    return changes
  }

  const renderListItems = (getItemProps: (options: object) => void) => (
    <Relative {...styles.searchInput}>
      <List>
        <ListItem padded={false}>
          <Input
            ref={searchRef}
            hasRightIcon={false}
            name={`search-${Date.now()}`}
            onChange={onSearch}
            placeholder="Search"
            value={searchTerm}
            type="text"
          />
        </ListItem>
      </List>
      <List
        direction={placement === Placement.top ? 'column-reverse' : 'column'}
        onScroll={handleListScroll}
        {...styles.list(menuHeight, placement)}
      >
        {items.map((item, index) => (
          <ListItem
            {...getItemProps({
              index,
              item,
              key: item.value,
            })}
            {...styles.listItem}
          >
            <Text size="l" {...styles.label}>
              {item.label}
            </Text>
          </ListItem>
        ))}
        {noResultsText && items.length === 0 && (
          <ListItem>
            <Text size="l" {...styles.label}>
              {noResultsText}
            </Text>
          </ListItem>
        )}
        {loadMoreText && items.length && (
          <ListItem onClick={onLoadMore} {...styles.listItem}>
            <Text size="l" {...styles.label}>
              {loadMoreText}
            </Text>
          </ListItem>
        )}
      </List>
    </Relative>
  )

  return (
    <Downshift
      itemToString={item => (item ? item.label : '')}
      initialSelectedItem={initialSelectedItem}
      onChange={onSelect}
      selectedItem={selectedItem}
      stateReducer={stateReducer}
    >
      {({ isOpen, toggleMenu, getItemProps, clearSelection, selectedItem }) => {
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

                <Absolute top={0} right={0} {...styles.iconWrapper}>
                  <View direction="row">
                    {showClearIcon && (
                      <Icon
                        color="black"
                        name="remove-light"
                        size={10}
                        onClick={event =>
                          handleClearIconClick(event, clearSelection)
                        }
                        {...css({ marginRight: 10, display: 'inline-block' })}
                      />
                    )}

                    <Icon
                      color="black"
                      name={
                        placement === Placement.top ? 'arrow-up' : 'arrow-down'
                      }
                      size={10}
                    />
                  </View>
                </Absolute>
              </View>
            </Relative>

            {isOpen && renderListItems(getItemProps)}
          </div>
        )
      }}
    </Downshift>
  )
}

export default SearchableDropdown

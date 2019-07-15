import React, { createRef, SyntheticEvent } from 'react'
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
import { EDropdownDirection } from '../enums'
import { Spinner } from '../index'

const INPUT_FIELD_HEIGHT = 50

const styles = {
  area: (isLoading: boolean) =>
    css({
      backgroundColor: ColorPalette.white,
      cursor: !isLoading && 'pointer',
      height: INPUT_FIELD_HEIGHT,
      position: 'relative',
      width: '100%',
    }),
  clearIcon: css({
    marginRight: 10,
    display: 'inline-block',
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
  iconWrapper: (isLoading: boolean) =>
    css({
      cursor: !isLoading && 'pointer',
      height: '100%',
      padding: '16px 16px 16px 20px',
    }),
  label: css({
    width: '100%',
  }),
  listItem: css({
    ':hover': {
      backgroundColor: alpha(ColorPalette.background.bright, 0.5, true),
    },
  }),
  listItems: (menuHeight: number) =>
    css({
      borderTop: `1px solid ${ColorPalette.lightGrey}`,
      maxHeight: menuHeight - INPUT_FIELD_HEIGHT,
      overflowY: 'auto',
    }),
  listWrapper: (menuHeight: number) =>
    css({
      boxShadow: '1px 1px 3px rgba(29, 29, 29, 0.125)',
      maxHeight: menuHeight,
      overflow: 'hidden',
      width: '100%',
      zIndex: 9999,
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

interface ISearchableDropdownProps {
  /** If true, than the field can be cleared */
  clearable?: boolean
  /** Icon on the left of the input field */
  icon?: IconType
  /** The dropdown items to show */
  items: IDropdownItem[]
  /** Initially selected item - this value is uncontrolled */
  initialSelectedItem?: IDropdownItem
  /** The loading state of the component, e.g fetching data. */
  isLoading?: boolean
  /** A floating label */
  label?: string
  /** The "Load more" text */
  loadMoreText?: string
  /** The height of the menu in pixels. By default: Search input and 3 items */
  menuHeight?: number
  /** For forms */
  name?: string
  /** The text is shown if no result was found */
  noResultsText?: string
  /** Callback triggered when clicking on "Load more" in items list */
  onLoadMore?: () => void
  /** Callback triggered when clearing the selection. */
  onSelect: (item: IDropdownItem) => void
  /** Callback triggered when search value changes */
  onSearch?: (event: SyntheticEvent) => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: EDropdownDirection
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
  isLoading = false,
  label = '',
  loadMoreText = '',
  menuHeight = INPUT_FIELD_HEIGHT * 4,
  name = '',
  noResultsText = '',
  onLoadMore = noop,
  onSearch,
  onSelect,
  placeholder = '',
  placement = EDropdownDirection.BOTTOM,
  searchTerm = '',
  selectedItem,
}: ISearchableDropdownProps) => {
  const searchRef: any = createRef()

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

  const renderIcons = (
    isLoading: boolean,
    showClearIcon: boolean,
    clearSelection: () => void,
  ) => {
    if (isLoading) {
      return <Spinner size={16} />
    }

    return (
      <React.Fragment>
        {showClearIcon && (
          <Icon
            color="black"
            name="remove-light"
            size={10}
            onClick={event => handleClearIconClick(event, clearSelection)}
            {...styles.clearIcon}
          />
        )}

        <Icon
          color="black"
          name={
            placement === EDropdownDirection.TOP ? 'arrow-up' : 'arrow-down'
          }
          size={10}
        />
      </React.Fragment>
    )
  }

  const renderSearchInput = () => (
    <Input
      ref={searchRef}
      hasRightIcon={false}
      name={`search-${Date.now()}`}
      onChange={onSearch}
      placeholder="Search"
      value={searchTerm}
      type="text"
    />
  )

  const renderList = (getItemProps: (options: object) => void) => (
    <Relative>
      <Absolute
        bottom={
          placement === EDropdownDirection.TOP ? INPUT_FIELD_HEIGHT : undefined
        }
        {...styles.listWrapper(menuHeight)}
      >
        <View
          direction={
            placement === EDropdownDirection.TOP ? 'column-reverse' : 'column'
          }
        >
          <View>{renderSearchInput()}</View>
          <View {...styles.listItems(menuHeight)}>
            <List>
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
                  <Text strong={true} size="l" {...styles.label}>
                    {loadMoreText}
                  </Text>
                </ListItem>
              )}
            </List>
          </View>
        </View>
      </Absolute>
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
              <View
                onClick={() => !isLoading && toggleMenu()}
                {...styles.area(isLoading)}
              >
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

                <Absolute top={0} right={0} {...styles.iconWrapper(isLoading)}>
                  <View direction="row">
                    {renderIcons(isLoading, showClearIcon, clearSelection)}
                  </View>
                </Absolute>
              </View>
            </Relative>

            {isOpen && renderList(getItemProps)}
          </div>
        )
      }}
    </Downshift>
  )
}

export default SearchableDropdown

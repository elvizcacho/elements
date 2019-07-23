import React, { SyntheticEvent, useRef, FunctionComponent } from 'react'
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
import { Spinner } from '../index'

/**
 * TODO
 * - manage search state internal
 * - onSearch return string value only
 * - fix disabled state
 * - search icon in input?
 */

const INPUT_FIELD_HEIGHT = 50

const styles = {
  area: css({
    backgroundColor: ColorPalette.white,
    height: INPUT_FIELD_HEIGHT,
    position: 'relative',
    width: '100%',
  }),
  clearIcon: css({
    marginRight: 10,
    display: 'inline-block',
  }),
  disabledInput: css({
    backgroundColor: ColorPalette.white,
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
  searchWrapper: css({
    borderTop: `1px solid ${ColorPalette.lightGrey}`,
    marginBottom: -1,
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
      maxHeight: menuHeight - INPUT_FIELD_HEIGHT + 1,
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
  wrapper: (isOpen: boolean, disabled: boolean, isLoading: boolean) =>
    css({
      alignItems: 'stretch',
      backgroundColor: ColorPalette.white,
      border: 'none',
      boxShadow: isOpen && '1px 1px 3px rgba(29, 29, 29, 0.125)',
      cursor: disabled ? 'not-allowed' : !isLoading && 'pointer',
      display: 'flex',
      flexDirection: 'column',
      opacity: disabled && 0.85,
      padding: 0,
      width: '100%',
    }),
}

type Placement = 'top' | 'bottom'

interface ISearchableDropdownProps {
  /** If true, than the field can be cleared */
  clearable?: boolean
  /** Clear the search input value on dropdown close */
  clearSearchValueOnClose?: boolean
  /** Set dropdown into disabled state */
  disabled?: boolean
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
  /** Callback triggered when dropdown was closed */
  onClose?: () => void
  /** Callback triggered when clicking on "Load more" in items list */
  onLoadMore?: () => void
  /** Callback triggered when dropdown was opened */
  onOpen?: () => void
  /** Callback triggered when clearing the selection. */
  onSelect: (item: IDropdownItem) => void
  /** Callback triggered when search value changes */
  onSearch?: (event: SyntheticEvent) => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: Placement
  /** The search term */
  searchTerm?: string
  /** Selected item - this item can be controlled */
  selectedItem?: IDropdownItem
}

const SearchableDropdown: FunctionComponent<ISearchableDropdownProps> = ({
  clearable = false,
  clearSearchValueOnClose = true,
  disabled = false,
  icon,
  items,
  initialSelectedItem,
  isLoading = false,
  label = '',
  loadMoreText = '',
  menuHeight = INPUT_FIELD_HEIGHT * 4,
  name = '',
  noResultsText,
  onClose = noop,
  onLoadMore = noop,
  onOpen = noop,
  onSearch,
  onSelect,
  placeholder = '',
  placement = 'bottom',
  searchTerm = '',
  selectedItem,
}) => {
  const searchRef = useRef<HTMLInputElement>(null)

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
    if (changes.isOpen) {
      onOpen()
      setTimeout(
        () =>
          searchRef.current && (searchRef.current as HTMLInputElement).focus(),
        0,
      )
    } else {
      if (clearSearchValueOnClose && searchTerm !== '') {
        searchTerm = ''
        onClose()
      }
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

    const arrowDirection = placement === 'top' ? 'arrow-up' : 'arrow-down'

    return (
      <React.Fragment>
        {showClearIcon && (
          <Icon
            color="black"
            data-testid="searchable-dropdown-clear-icon"
            name="remove-light"
            size={10}
            onClick={event => handleClearIconClick(event, clearSelection)}
            {...styles.clearIcon}
          />
        )}

        <Icon
          color="black"
          data-testid={`searchable-dropdown-${arrowDirection}`}
          name={arrowDirection}
          size={10}
        />
      </React.Fragment>
    )
  }

  const renderSearchInput = () => (
    <Input
      ref={searchRef}
      hasRightIcon={false}
      onChange={onSearch}
      placeholder="Search"
      value={searchTerm}
      type="text"
    />
  )

  const renderList = (getItemProps: (options: object) => void) => (
    <Relative>
      <Absolute
        bottom={placement === 'top' ? INPUT_FIELD_HEIGHT : undefined}
        {...styles.listWrapper(menuHeight)}
      >
        <View direction={placement === 'top' ? 'column-reverse' : 'column'}>
          <View {...styles.searchWrapper}>{renderSearchInput()}</View>
          <View {...styles.listItems(menuHeight)}>
            <List>
              {items.map((item, index) => (
                <ListItem
                  {...getItemProps({
                    index,
                    item,
                  })}
                  key={item.value}
                  {...styles.listItem}
                >
                  <Text size="l" {...styles.label}>
                    {item.label}
                  </Text>
                </ListItem>
              ))}

              {noResultsText && items.length === 0 && (
                <ListItem>
                  <Text
                    size="l"
                    data-testid="searchable-dropdown-no-results"
                    {...styles.label}
                  >
                    {noResultsText}
                  </Text>
                </ListItem>
              )}

              {loadMoreText && items.length && (
                <ListItem onClick={onLoadMore} {...styles.listItem}>
                  <Text
                    strong={true}
                    size="l"
                    data-testid="searchable-dropdown-load-more"
                    {...styles.label}
                  >
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
          <div {...styles.wrapper(isOpen, disabled, isLoading)}>
            <Relative>
              <View
                onClick={() => !isLoading && toggleMenu()}
                {...styles.area}
                data-testid="searchable-dropdown"
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

import React, {
  SyntheticEvent,
  useRef,
  FunctionComponent,
  useState,
  RefObject,
} from 'react'
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

const INPUT_FIELD_HEIGHT_PX = 50
const DISBALED_BACKGROUND_COLOR = ColorPalette.whiteIntense

const styles = {
  area: (disabled: boolean) =>
    css({
      backgroundColor: disabled
        ? DISBALED_BACKGROUND_COLOR
        : ColorPalette.white,
      cursor: disabled && 'not-allowed',
      height: INPUT_FIELD_HEIGHT_PX,
      position: 'relative',
      width: '100%',
    }),
  clearIcon: css({
    marginRight: 10,
    display: 'inline-block',
  }),
  disabledInput: (disabled: boolean) =>
    css({
      backgroundColor: disabled
        ? DISBALED_BACKGROUND_COLOR
        : ColorPalette.white,
      color: 'black',
      overflow: 'hidden',
      paddingRight: '30px',
      pointerEvents: 'none',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 'calc(100% - 5px)',
    }),
  iconWrapper: (isLoading: boolean, disabled: boolean) =>
    css({
      cursor: disabled ? 'not-allowed' : !isLoading && 'pointer',
      height: '100%',
      padding: '16px 16px 16px 20px',
    }),
  searchWrapper: css({
    borderTop: `1px solid ${ColorPalette.lightGrey}`,
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
      maxHeight: menuHeight - INPUT_FIELD_HEIGHT_PX + 1,
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
      border: 'none',
      boxShadow: isOpen && '1px 1px 3px rgba(29, 29, 29, 0.125)',
      cursor: disabled ? 'not-allowed' : !isLoading && 'pointer',
      display: 'flex',
      flexDirection: 'column',
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
  /** The initial search term when dropdown opens first time */
  initialSearchTerm?: string
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
  /** The name for forms */
  name?: string
  /** The text is shown if no result was found */
  noResultsText?: string
  /** Callback triggered when dropdown was closed */
  onClose?: () => void
  /** Callback triggered when clicking on "Load more" in items list */
  onLoadMore?: () => void
  /** Callback triggered when dropdown was opened */
  onOpen?: () => void
  /** Callback triggered when value was selected or cleared */
  onSelect: (item?: IDropdownItem) => void
  /** Callback triggered when search value changes */
  onSearch?: (value: string) => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: Placement
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
  menuHeight = INPUT_FIELD_HEIGHT_PX * 4,
  name = '',
  noResultsText,
  onClose = noop,
  onLoadMore = noop,
  onOpen = noop,
  onSearch,
  onSelect,
  placeholder = '',
  placement = 'bottom',
  initialSearchTerm = '',
  selectedItem,
}) => {
  const searchRef: RefObject<HTMLInputElement> = useRef(null)
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

  const handleClearIconClick = (
    event: SyntheticEvent,
    clearSelection: () => void,
  ) => {
    event.stopPropagation()
    clearSelection()
    onSelect()
  }

  const stateReducer = (
    _: DownshiftState<any>,
    changes: StateChangeOptions<any>,
  ) => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      if (changes.isOpen) {
        setTimeout(() => {
          searchRef.current && searchRef.current.focus(), 0
          onOpen()
        })
      } else {
        if (clearSearchValueOnClose && searchTerm !== '') {
          setSearchTerm('')
        }

        onClose()
      }
    }

    return changes
  }

  const handleSearchChange = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value

    if (value !== searchTerm) {
      setSearchTerm(value)
      onSearch && onSearch(value)
    }
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
      hasRightIcon={false}
      icon="search"
      onChange={handleSearchChange}
      placeholder="Search"
      ref={searchRef}
      type="text"
      value={searchTerm}
    />
  )

  const renderList = (getItemProps: (options: object) => void) => (
    <Relative>
      <Absolute
        bottom={placement === 'top' ? INPUT_FIELD_HEIGHT_PX : undefined}
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
                onClick={() => !isLoading && !disabled && toggleMenu()}
                data-testid="searchable-dropdown"
                {...styles.area(disabled)}
              >
                <Input
                  disabled={true}
                  icon={icon}
                  label={label}
                  placeholder={placeholder}
                  value={(selectedItem && selectedItem.label) || ''}
                  readOnly
                  name={name}
                  hasRightIcon
                  {...styles.disabledInput(disabled)}
                />

                <Absolute
                  top={0}
                  right={0}
                  {...styles.iconWrapper(isLoading, disabled)}
                >
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

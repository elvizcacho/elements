import React, { PureComponent, ReactNode, createRef, MouseEvent } from 'react'
import Downshift from 'downshift'
import { css, keyframes } from 'glamor'
import Relative from '../Relative'
import Absolute from '../Absolute'
import View from '../View'
import Text from '../Text'
import List from '../List'
import ListItem from '../ListItem'
import Input from '../Input'
import { alpha, ColorPalette } from '@allthings/colors'
import Icon, { IconType } from '../Icon'
import { webkitScrollbar } from '../utils/webkitScrollbar'

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
  area: (disabled: boolean) =>
    css({
      width: '100%',
      cursor: disabled && 'not-allowed',
      height: INPUT_FIELD_HEIGHT,
      position: 'relative',
      backgroundColor: ColorPalette.white,
    }),
  label: css({
    position: 'absolute',
    left: 15,
    fontSize: 10,
    opacity: 0,
    transition: 'all .225s ease-out',
  }),
}

export interface IDropdownItem {
  label: ReactNode
  value: any
  key?: string
}

export interface IDropdownProps {
  /** Disable the dropdown */
  readonly disabled?: boolean
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  readonly placement?: 'top' | 'bottom'
  readonly items: ReadonlyArray<IDropdownItem>
  /** Initially selected item - this value is uncontrolled */
  readonly initialSelectedItem?: IDropdownItem
  /** Selected item - this item can be controlled */
  readonly selectedItem?: IDropdownItem
  /** The maximum number of items displayed in the menu. */
  readonly limit?: number
  /** The height of the menu in pixels. */
  readonly menuHeight?: number
  /** Callback triggered when clearing the selection. */
  readonly onSelect?: (item: IDropdownItem) => void
  /** The placeholder displayed in the input field. */
  readonly placeholder?: string
  /** A floating label */
  readonly label?: string
  /** Icon on the left of the input field */
  readonly icon?: IconType
  /** If true, than the field can be cleared */
  readonly clearable?: boolean
  /** For forms */
  readonly name?: string
}

export default class Dropdown extends PureComponent<IDropdownProps> {
  state = {
    showScrollArrow: false,
  }

  listRef = createRef<HTMLDivElement>()

  handleListScroll = (e: any) => {
    if (this.state.showScrollArrow && e.target.scrollTop > 0) {
      this.setState({ showScrollArrow: false })
    }
  }

  showArrowIfNecessary = () =>
    this.listRef.current &&
    this.props.menuHeight &&
    this.setState({
      showScrollArrow:
        this.listRef.current.scrollHeight > this.props.menuHeight,
    })

  componentDidMount() {
    this.showArrowIfNecessary()
  }

  render() {
    const {
      placement,
      disabled = false,
      menuHeight,
      label,
      icon,
      clearable,
      items,
      initialSelectedItem,
      selectedItem,
      placeholder,
      onSelect,
      name,
      ...props
    } = this.props
    const { showScrollArrow } = this.state

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
            <div
              {...css({
                alignItems: 'stretch',
                border: 'none',
                boxShadow: isOpen ? '1px 1px 3px rgba(29, 29, 29, 0.125)' : '',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                width: '100%',
                backgroundColor: ColorPalette.white,
              })}
            >
              <Relative>
                <View
                  onClick={() => !disabled && toggleMenu()}
                  {...styles.area(disabled)}
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
                    {...css({
                      width: 'calc(100% - 5px)',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      paddingRight: '30px',
                      color: 'black',
                      backgroundColor: 'white',
                      pointerEvents: 'none',
                    })}
                    {...props}
                  />

                  <Absolute
                    top={0}
                    right={0}
                    {...css({
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      height: '100%',
                      width: INPUT_FIELD_HEIGHT,
                      padding: '16px 16px 16px 20px',
                    })}
                    onClick={
                      showClearIcon
                        ? (e: MouseEvent<HTMLElement>) => {
                            e.stopPropagation()
                            clearSelection()
                          }
                        : undefined
                    }
                  >
                    {showClearIcon ? (
                      <Icon
                        color="black"
                        name="remove-light"
                        size={10}
                        data-testid="dropdown-clear-icon"
                      />
                    ) : (
                      <Icon
                        color="black"
                        name={
                          placement === Placement.top
                            ? 'arrow-up'
                            : 'arrow-down'
                        }
                        size={10}
                      />
                    )}
                  </Absolute>
                </View>
              </Relative>
              <Relative>
                {isOpen && (
                  <List
                    ref={this.listRef}
                    direction={
                      placement === Placement.top ? 'column-reverse' : 'column'
                    }
                    {...css({
                      backgroundColor: ColorPalette.white,
                      boxShadow:
                        isOpen && '1px 1px 3px rgba(29, 29, 29, 0.125)',
                      maxHeight: menuHeight,
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'absolute',
                      bottom: placement === Placement.top && INPUT_FIELD_HEIGHT,
                      width: '100%',
                      zIndex: 9999,
                      ...webkitScrollbar,
                    })}
                    onScroll={this.handleListScroll}
                  >
                    {items.map((item, index) => (
                      <ListItem
                        key={item.key || item.value}
                        {...getItemProps({
                          index,
                          item,
                          key: item.value,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? alpha(
                                    ColorPalette.background.bright,
                                    0.5,
                                    true,
                                  )
                                : ColorPalette.background.white,
                          },
                        })}
                      >
                        <Text
                          {...css({
                            width: '100%',
                          })}
                          size="l"
                        >
                          {item.label}
                        </Text>
                      </ListItem>
                    ))}
                    <Absolute
                      bottom={placement !== Placement.top ? 15 : undefined}
                      top={placement === Placement.top ? 15 : undefined}
                      right={15}
                    >
                      {showScrollArrow &&
                        (placement === Placement.top ? (
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
                        ))}
                    </Absolute>
                  </List>
                )}
              </Relative>
            </div>
          )
        }}
      </Downshift>
    )
  }
}

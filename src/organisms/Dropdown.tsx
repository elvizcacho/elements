import React, { PureComponent, ReactNode, createRef, MouseEvent } from 'react'
import Downshift from 'downshift'
import { css, keyframes } from 'glamor'
import Relative from '../atoms/Relative'
import Absolute from '../atoms/Absolute'
import { View, Text, List, ListItem, Input } from '../'
import { alpha, ColorPalette } from '@allthings/colors'
import Icon, { IconType } from '../atoms/Icon'

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
  label: css({
    position: 'absolute',
    left: 15,
    fontSize: 10,
    opacity: 0,
    transition: 'all .225s ease-out',
  }),
}

type ItemType = {
  label: ReactNode
  value: string
}

interface IDropdownProps {
  /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
  placement?: 'top' | 'bottom'
  items: ItemType[]
  /** Initially selected item - this value is uncontrolled */
  initialSelectedItem?: ItemType
  /** Selected item - this item can be controlled */
  selectedItem?: ItemType
  /** The maximum number of items displayed in the menu. */
  limit?: number
  /** The height of the menu in pixels. */
  menuHeight?: number
  /** Callback triggered when clearing the selection. */
  onSelect?: () => void
  /** The placeholder displayed in the input field. */
  placeholder?: string
  /** A floating label */
  label?: string
  /** Icon on the left of the input field */
  icon?: IconType
  /** If true, than the field can be cleared */
  clearable?: boolean
  /** For forms */
  name?: string
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
                  />

                  <Absolute
                    top={0}
                    right={0}
                    {...css({
                      cursor: 'pointer',
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
                      <Icon color="black" name="remove-light" size={10} />
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
                    innerRef={this.listRef}
                    direction={
                      placement === Placement.top ? 'column-reverse' : 'column'
                    }
                    {...css({
                      boxShadow:
                        isOpen && '1px 1px 3px rgba(29, 29, 29, 0.125)',
                      maxHeight: menuHeight,
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'absolute',
                      bottom: placement === Placement.top && INPUT_FIELD_HEIGHT,
                      width: '100%',
                      zIndex: 9999,
                    })}
                    onScroll={this.handleListScroll}
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
                                ? alpha(
                                    ColorPalette.background.bright,
                                    0.5,
                                    true
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

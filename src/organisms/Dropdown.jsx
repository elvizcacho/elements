import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { css, keyframes } from 'glamor'
import Relative from '../atoms/Relative'
import Absolute from '../atoms/Absolute'
import Icon from '../atoms/Icon'
import { alpha, ColorPalette } from '@allthings/colors'
import View from '../atoms/View'
import List from '../molecules/List/List'
import ListItem from '../molecules/List/ListItem'
import Input from '../atoms/Input'
import Text from '../atoms/Text'

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

export default class Dropdown extends React.PureComponent {
  static propTypes = {
    /** If "top", then the list should be reversed and extended upwards, if "bottom" (default) then downwards */
    placement: PropTypes.oneOf(Object.values(Placement)),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.any.isRequired,
      })
    ).isRequired,
    /** Initially selected item - this value is uncontrolled */
    initialSelectedItem: PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired,
    }),
    /** Selected item - this item can be controlled */
    selectedItem: PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired,
    }),
    /** The maximum number of items displayed in the menu. */
    limit: PropTypes.number,
    /** The height of the menu in pixels. */
    menuHeight: PropTypes.number,
    /** Callback triggered when clearing the selection. */
    onSelect: PropTypes.func,
    /** The placeholder displayed in the input field. */
    placeholder: PropTypes.string,
    /** A floating label */
    label: PropTypes.string,
    /** Icon on the left of the input field */
    icon: PropTypes.string,
    /** If true, than the field can be cleared */
    clearable: PropTypes.bool,
    /** For forms */
    name: PropTypes.string.isRequired,
  }

  state = {
    showScrollArrow: false,
  }

  handleListScroll = e => {
    if (this.state.showScrollArrow && e.target.scrollTop > 0) {
      this.setState({ showScrollArrow: false })
    }
  }

  showArrowIfNecessary = () =>
    this.listRef &&
    this.setState({
      showScrollArrow: this.listRef.scrollHeight > this.props.menuHeight,
    })

  setListRef = el => {
    this.listRef = el
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
                <View onClick={toggleMenu} {...styles.area}>
                  <Input
                    disabled
                    icon={icon}
                    label={label}
                    placeholder={placeholder}
                    value={(selectedItem && selectedItem.label) || ''}
                    readOnly
                    name={name}
                    {...css({
                      width: '100%',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      paddingRight: '35px',
                      color: 'black',
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
                        ? e => {
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
                    direction={
                      placement === Placement.top ? 'column-reverse' : 'column'
                    }
                    onRef={this.setListRef}
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
                      bottom={placement !== Placement.top ? 15 : null}
                      top={placement === Placement.top ? 15 : null}
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

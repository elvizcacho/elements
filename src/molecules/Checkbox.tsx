import React, { Component, ReactNode, ChangeEvent } from 'react'
import View from '../atoms/View'
import Icon from '../atoms/Icon'
import Text, { sizeType } from '../atoms/Text'
import Relative from '../atoms/Relative'
import ListItem from './List/ListItem'
import { css } from 'glamor'
import Theme from '../behaviour/Theme'
import Absolute from '../atoms/Absolute'
import Inset from '../atoms/Inset'

const styles = {
  checkbox: (background: string, checked: boolean) =>
    css({
      borderRadius: '3px',
      height: '25px',
      width: '25px',
      backgroundColor: checked && background,
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: checked ? background : 'lightGrey',
      transition: '250ms',
      cursor: 'pointer',
    }),
  text: css({
    width: 200,
    marginLeft: 20,
  }),
}
interface ICheckboxProps {
  /** True to make it checked */
  checked?: boolean
  /** Label of Checkbox */
  label?: string | ReactNode
  /** Text size of the label */
  labelSize?: sizeType
  name: string
  onChange: (e: ChangeEvent) => void
  /** Background color of the form item */
  backgroundColor?: string
}
interface IState {
  checked?: boolean
}
/**
 * Checkbox are used to give users a way to select or deselect options.
 *
 * ```example
 * <View>
 *   <Checkbox checked name="ok" label="Are you ok?" />
 *   <Checkbox name="notok" label="Are you not ok?" />
 * </View>
 * ```
 */
class Checkbox extends Component<ICheckboxProps, IState> {
  state = {
    checked: this.props.checked,
  }

  static defaultProps = {
    labelSize: 'l',
    onChange: () => {},
  }

  isControlled = () => typeof this.props.checked !== 'undefined'

  handleChange = (e: ChangeEvent) => {
    if (!this.isControlled()) {
      this.setState(({ checked }) => ({ checked: !checked }))
    }
    this.props.onChange(e)
  }

  render() {
    const {
      checked,
      onChange,
      label,
      labelSize,
      name,
      backgroundColor = 'primary',
      ...props
    } = this.props
    const realChecked = Boolean(
      this.isControlled() ? checked : this.state.checked
    )

    return (
      <Theme>
        {({ theme, colorize }) => (
          <ListItem backgroundColor={colorize(backgroundColor)}>
            <View direction="row" alignV="center">
              <Relative
                direction="row"
                alignV="center"
                alignH="center"
                {...styles.checkbox(theme.primary, !!realChecked)}
              >
                {realChecked && (
                  <Relative bottom={1}>
                    <Icon name="check-filled" size={14} color="#fff" />
                  </Relative>
                )}
                <Absolute top={0} left={0} right={0} bottom={0}>
                  <input
                    type="checkbox"
                    checked={realChecked}
                    id={name}
                    name={name}
                    value={String(realChecked)}
                    style={{
                      opacity: 0,
                      width: '25px',
                      height: '25px',
                      margin: 0,
                      cursor: 'pointer',
                    }}
                    onChange={this.handleChange}
                    {...props}
                  />
                </Absolute>
              </Relative>
            </View>
            <label htmlFor={name}>
              <Inset horizontal>
                <Text size={labelSize}>{label}</Text>
              </Inset>
            </label>
          </ListItem>
        )}
      </Theme>
    )
  }
}

export default Checkbox

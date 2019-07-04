import React, { Component, ReactNode, ChangeEvent } from 'react'
import View from '../atoms/View'
import Icon from '../atoms/Icon'
import Relative from '../atoms/Relative'
import { css } from 'glamor'
import Theme from '../behaviour/Theme'
import Absolute from '../atoms/Absolute'

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
  static propTypes = {
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }

  state = {
    checked: this.props.checked,
  }

  isControlled = () => typeof this.props.checked !== 'undefined'

  handleChange = (e: ChangeEvent) => {
    if (!this.isControlled()) {
      this.setState(({ checked }) => ({ checked: !checked }))
    }
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    const { checked, onChange, name, ...props } = this.props
    const realChecked = Boolean(
      this.isControlled() ? checked : this.state.checked
    )

    return (
      <Theme>
        {({ colorize }) => (
          <View direction="row" alignV="center">
            <Relative
              direction="row"
              alignV="center"
              alignH="center"
              {...styles.checkbox(colorize('primary'), realChecked)}
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
        )}
      </Theme>
    )
  }
}

export default Checkbox

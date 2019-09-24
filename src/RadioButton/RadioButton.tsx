import { css } from 'glamor'
import React, { ChangeEvent, Component } from 'react'
import Absolute from '../Absolute'
import Circle from '../Circle'
import Relative from '../Relative'
import Text from '../Text'
import View from '../View'

const styles = {
  radioElement: css({
    marginRight: 40,
    width: 'auto',
  }),
  radio: css({
    opacity: 0,
    margin: 0,
  }),
  required: css({
    position: 'absolute',
    right: 10,
  }),
}

export interface IRadioButtonProps {
  readonly id?: string
  /** Set to true to controll radio button */
  readonly checked?: boolean
  /** The name of this input field */
  readonly name?: string
  /** Called when a radio button is clicked */
  readonly onChange?: (e: ChangeEvent) => void
  /** Mark if the RadioButton is required */
  readonly required?: boolean
  /** The value the checkbox will have */
  readonly value: string
}

interface IState {
  checked: boolean
}

/**
 * RadioButtonSet can be used to render a set of RadioButtons to allow users to select exactly one item from a set.
 * Like gender (male / female) or sizes (s,m,l,xl)
 *
 * ```example
 * <RadioButtonSet name="gender" defaultValue="male" required>
 *   <RadioButton value="female">Female</RadioButton>
 *   <RadioButton value="male">Male</RadioButton>
 * </RadioButtonSet>
 * ```
 */
class RadioButton extends Component<IRadioButtonProps, IState> {
  static defaultProps = {
    required: false,
  }

  state = {
    // set initial value to boolean, to avoid the warning:
    // `A component is changing an uncontrolled input of type radio to be controlled.`
    checked: !!this.props.checked,
  }

  static getDerivedStateFromProps(props: IRadioButtonProps) {
    if (props.checked === true) {
      return {
        checked: true,
      }
    } else if (props.checked === false) {
      return {
        checked: false,
      }
    } else {
      return null
    }
  }

  handleChange = (e: ChangeEvent) => {
    this.props.onChange && this.props.onChange(e)
    this.setState(({ checked }) => ({ checked: !checked }))
  }

  render() {
    const {
      children,
      id,
      name,
      value,
      checked,
      onChange,
      ...props
    } = this.props

    const realId = id || value

    return (
      <View
        {...styles.radioElement}
        {...(props as Omit<IRadioButtonProps, 'checked' | 'onChange'>)}
      >
        <Relative direction="row" alignV="center" alignH="center">
          <View htmlElement="label">
            <Relative top={10}>
              <Circle
                color={this.state.checked ? 'primary' : 'lightGrey'}
                radius={20}
              >
                <Circle color="white" radius={16}>
                  <Circle
                    color={this.state.checked ? 'primary' : 'white'}
                    radius={10}
                  />
                </Circle>
              </Circle>
            </Relative>
            <Relative
              top={-8}
              style={{
                marginLeft: 30,
              }}
            >
              {typeof children === 'string' ? (
                <Text size="m">{children}</Text>
              ) : (
                children
              )}
            </Relative>
            <Absolute top={0} left={0} right={0} bottom={0}>
              <input
                id={realId}
                type="radio"
                name={name}
                {...styles.radio}
                value={value}
                checked={this.state.checked}
                onChange={this.handleChange}
              />
            </Absolute>
          </View>
        </Relative>
      </View>
    )
  }
}

export default RadioButton

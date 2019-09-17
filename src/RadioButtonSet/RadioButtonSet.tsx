import * as React from 'react'
import { css } from 'glamor'
import Text from '../Text'
import View from '../View'
import { IRadioButtonProps } from '../RadioButton'

const styles = {
  label: css({
    position: 'relative',
    marginBottom: 10,
  }),
}

const DIRECTION_HORIZONTAL = 'horizontal'
const DIRECTION_VERTICAL = 'vertical'
const DIRECTION_AUTO = 'auto'

type DirectionType = 'horizontal' | 'vertical' | 'auto'

interface IRadioButtonSetProps {
  /** The default value to put into the component, without making it controlled */
  defaultValue?: string
  /** Customize direction */
  direction?: DirectionType
  /** The label of this input field */
  label?: string
  /** The name of this input field */
  name: string
  /** Called when a radio button is clicked */
  onChange?: (e: React.ChangeEvent) => void
  /** Pass true to mark the field as required */
  required?: boolean
}

interface IState {
  value?: string
}

/**
 * RadioButtonSet can be used to render a set of RadioButtons to allow users to select exactly one item from a set.
 *
 * ```example
 * <RadioButtonSet
 *    name="order"
 *    defaultValue="tee"
 *    required
 * >
 *   <RadioButton value="coffe">Coffe</RadioButton>
 *   <RadioButton value="tee">Tee</RadioButton>
 *   <RadioButton value="others">Others</RadioButton>
 * </RadioButtonSet>
 * ```
 */
class RadioButtonSet extends React.Component<IRadioButtonSetProps, IState> {
  static DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL
  static DIRECTION_VERTICAL = DIRECTION_VERTICAL
  static DIRECTION_AUTO = DIRECTION_AUTO

  static defaultProps = {
    direction: DIRECTION_AUTO,
  }

  state = {
    value: this.props.defaultValue,
  }

  radios = []

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange && this.props.onChange(e)
    this.setState({ value: e.target.value })
  }

  getAutoDirection = () =>
    React.Children.count(this.props.children) > 2 ? 'column' : 'row'

  getDirection = () =>
    this.props.direction === DIRECTION_HORIZONTAL ? 'row' : 'column'

  render() {
    const {
      children,
      label,
      required,
      name,
      direction,
      onChange,
      ...props
    } = this.props
    const { value } = this.state

    return (
      <View>
        {label && (
          <View
            className="label"
            {...styles.label}
            style={{
              opacity: 1,
              top: 8,
            }}
          >
            <Text color="secondaryText" size="xs">
              {label} {required && '*'}
            </Text>
          </View>
        )}
        <View
          alignH="space-between"
          alignV="start"
          style={{ width: '100%' }}
          direction={
            direction === DIRECTION_AUTO
              ? this.getAutoDirection()
              : this.getDirection()
          }
          {...props}
        >
          {React.Children.map(
            children,
            (child: React.ReactElement<IRadioButtonProps>) => {
              if (React.isValidElement(child)) {
                if (child.type === React.Fragment) {
                  console.log(
                    [
                      "Elements: the RadioButtonSet component doesn't accept a React.Fragment as a child.",
                      'Consider providing an array instead.',
                    ].join('\n'),
                  )
                }

                return React.cloneElement(child, {
                  name,
                  checked: value === child.props.value,
                  onChange: this.handleChange,
                })
              }

              return null
            },
          )}
        </View>
      </View>
    )
  }
}

export default RadioButtonSet

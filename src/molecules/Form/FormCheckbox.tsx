import React, { Component, ReactNode, ChangeEvent } from 'react'
import Text, { sizeType } from '../../atoms/Text'
import ListItem from '../List/ListItem'
import Theme from '../../behaviour/Theme'
import Checkbox, { ICheckboxProps } from '../Checkbox'
import Inset from '../../atoms/Inset'

interface IFormCheckboxProps extends ICheckboxProps {
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

/**
 * FormCheckbox are used to give users a way to select or deselect options.
 *
 * ```example
 * <View>
 *   <FormCheckbox checked name="ok" label="Are you ok?" />
 *   <FormCheckbox name="notok" label="Are you not ok?" />
 * </View>
 * ```
 */
class FormCheckbox extends Component<IFormCheckboxProps> {
  static defaultProps = {
    labelSize: 'l',
    onChange: () => {},
  }

  render() {
    const {
      label,
      labelSize,
      name,
      backgroundColor = 'background',
      ...props
    } = this.props

    return (
      <Theme>
        {({ colorize }) => (
          <ListItem backgroundColor={colorize(backgroundColor)}>
            <Checkbox name={name} {...props} />
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

export default FormCheckbox

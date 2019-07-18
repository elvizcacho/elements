import React, { Component, ReactNode, ChangeEvent } from 'react'
import Text, { TextSizeType } from '../Text'
import ListItem from '../ListItem'
import Theme from '../Theme'
import Checkbox, { ICheckboxProps } from '../Checkbox'
import Inset from '../Inset'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'label'> {
  /** True to make it checked */
  checked?: boolean
  /** Label of Checkbox */
  label?: string | ReactNode
  /** Text size of the label */
  labelSize?: TextSizeType
  name: string
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
    const { label, labelSize, name, backgroundColor, ...props } = this.props

    return (
      <Theme>
        {({ colorize }) => (
          <ListItem
            backgroundColor={
              backgroundColor ? colorize(backgroundColor) : undefined
            }
          >
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

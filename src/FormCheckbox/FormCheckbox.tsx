import React, { ReactNode } from 'react'
import Checkbox, { ICheckboxProps } from '../Checkbox'
import Inset from '../Inset'
import ListItem from '../ListItem'
import Text, { TextSizeType } from '../Text'
import { useTheme } from '../Theme'

export interface IFormCheckboxProps extends Omit<ICheckboxProps, 'label'> {
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
const FormCheckbox = ({
  label,
  labelSize = 'l',
  name,
  backgroundColor,
  ...props
}: IFormCheckboxProps) => {
  const { colorize } = useTheme()

  return (
    <ListItem
      backgroundColor={backgroundColor ? colorize(backgroundColor) : undefined}
    >
      <Checkbox name={name} {...props} />
      <label htmlFor={name}>
        <Inset horizontal>
          <Text size={labelSize}>{label}</Text>
        </Inset>
      </label>
    </ListItem>
  )
}

export default FormCheckbox

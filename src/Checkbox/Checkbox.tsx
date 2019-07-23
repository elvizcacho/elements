import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import View from '../View'
import Icon from '../Icon'
import Relative from '../Relative'
import { css } from 'glamor'
import Theme from '../Theme'
import Absolute from '../Absolute'
import { IInputProps } from '../Input'

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
export interface ICheckboxProps extends IInputProps {
  /** True to make it checked */
  readonly checked?: boolean
  /** Label of Checkbox */
  readonly name?: string
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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
const Checkbox: FunctionComponent<ICheckboxProps> = ({
  checked,
  name,
  onChange,
  ...props
}) => {
  const isControlled = typeof checked !== 'undefined'

  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setIsChecked(checked => !checked)
    }
    onChange && onChange(e)
  }

  const checkedValue = Boolean(isControlled ? checked : isChecked)

  return (
    <Theme>
      {({ colorize }) => (
        <View direction="row" alignV="center">
          <Relative
            direction="row"
            alignV="center"
            alignH="center"
            {...styles.checkbox(colorize('primary'), checkedValue)}
          >
            {checkedValue && (
              <Relative bottom={1}>
                <Icon name="check-filled" size={14} color="#fff" />
              </Relative>
            )}
            <Absolute top={0} left={0} right={0} bottom={0}>
              <input
                type="checkbox"
                checked={checkedValue}
                id={name}
                name={name}
                value={String(checkedValue)}
                style={{
                  opacity: 0,
                  width: '25px',
                  height: '25px',
                  margin: 0,
                  cursor: 'pointer',
                }}
                onChange={handleChange}
                {...props}
              />
            </Absolute>
          </Relative>
        </View>
      )}
    </Theme>
  )
}

export default Checkbox

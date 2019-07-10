import React, { FunctionComponent } from 'react'
import Input, { IInputProps } from '../Input'

interface PhoneInputProps extends IInputProps {
  /** Indicates that this field is required */
  required?: boolean
  /** The name of this input field */
  name: string
  /** Called, when the users changes something */
  onChange?: () => void
  /** Prefilled default value (optional) */
  defaultValue?: string
  /** Value of placeholder */
  placeholder?: string
}

const PhoneInput: FunctionComponent<PhoneInputProps> = props => (
  <Input type="tel" {...props} />
)

export default PhoneInput

import * as React from 'react'
import Input, { IInputProps } from '../Input'

interface PhoneInputProps extends IInputProps {
  /** Indicates that this field is required */
  readonly required?: boolean
  /** The name of this input field */
  readonly name: string
  /** Called, when the users changes something */
  readonly onChange?: () => void
  /** Prefilled default value (optional) */
  readonly defaultValue?: string
  /** Value of placeholder */
  readonly placeholder?: string
}

const PhoneInput: React.FC<PhoneInputProps> = props => (
  <Input type="tel" {...props} />
)

export default PhoneInput

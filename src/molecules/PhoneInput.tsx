import React from 'react'
import Input from '../atoms/Input'

const PhoneInput = (props: PhoneInputProps) => <Input type="tel" {...props} />

interface PhoneInputProps {
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

export default PhoneInput

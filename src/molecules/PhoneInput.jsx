import React from 'react'
import { bool, func, string } from 'prop-types'
import Input from '../atoms/Input'

const PhoneInput = props => <Input type="tel" {...props} />

PhoneInput.propTypes = {
  /** Indicates that this field is required */
  required: bool,
  /** The name of this input field */
  name: string.isRequired,
  /** Called, when the users changes something */
  onChange: func,
  /** Prefilled default value (optional) */
  defaultValue: string,
  /** Value of placeholder */
  placeholder: string,
}

export default PhoneInput

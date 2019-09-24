import React from 'react'
import Input, { IInputProps } from '../Input'

interface PhoneInputProps extends IInputProps {}

const PhoneInput = (props: PhoneInputProps) => <Input type="tel" {...props} />

export default PhoneInput

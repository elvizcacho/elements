import React, { HTMLAttributes } from 'react'
import Input, { IInputProps } from '../Input'
import ListItem from '../ListItem'
import { useTheme } from '../Theme'

/**
 * TextInputs are used to allow users to enter information like names, numbers, urls, email addresses or passwords.
 *
 * ```example
 * <TextInput name="email" type="email" placeholder="Your email" required />
 * <TextInput name="inquiry" lines={5} placeholder="Your question" maxLength={255} minLength={50} />
 * ```
 */
const TextInput = ({
  backgroundColor = 'background',
  ...props
}: IInputProps & { backgroundColor?: string } & HTMLAttributes<
    HTMLElement
  >) => {
  const { colorize } = useTheme()

  return (
    <ListItem padded={false} backgroundColor={colorize(backgroundColor)}>
      <Input {...props} />
    </ListItem>
  )
}

export default TextInput

import React, { Component } from 'react'
import Theme from '../behaviour/Theme'
import ListItem from './List/ListItem'
import Input, { IInputProps } from '../atoms/Input'

/**
 * TextInputs are used to allow users to enter information like names, numbers, urls, email addresses or passwords.
 *
 * ```example
 * <TextInput name="email" type="email" placeholder="Your email" required />
 * <TextInput name="inquiry" lines={5} placeholder="Your question" maxLength={255} minLength={50} />
 * ```
 */
class TextInput extends Component<
  IInputProps & { backgroundColor?: string } & React.HTMLAttributes<HTMLElement>
> {
  render() {
    const { backgroundColor = 'background', ...props } = this.props

    return (
      <Theme>
        {({ colorize }) => (
          <ListItem padded={false} backgroundColor={colorize(backgroundColor)}>
            <Input {...props} />
          </ListItem>
        )}
      </Theme>
    )
  }
}

export default TextInput
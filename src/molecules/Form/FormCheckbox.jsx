import React from 'react'
import Text from '../../atoms/Text'
import ListItem from '../List/ListItem'
import { css } from 'glamor'
import Theme from '../../behaviour/Theme'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'
import Inset from '../../atoms/Inset'

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
class FormCheckbox extends React.Component {
  static propTypes = {
    /** True to make it checked */
    checked: PropTypes.bool,
    /** Label of Checkbox */
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    /** Text size of the label */
    labelSize: Text.propTypes.size,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    /** Background color of the form item */
    backgroundColor: PropTypes.string,
  }

  static defaultProps = {
    labelSize: 'l',
    onChange: () => {},
  }

  render() {
    const { label, labelSize, name, backgroundColor, ...props } = this.props

    return (
      <Theme>
        {({ colorize }) => (
          <ListItem backgroundColor={colorize(backgroundColor)}>
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

import React, { FunctionComponent } from 'react'
import { css } from 'glamor'

import Text from '../Text'
import View, { IViewProps } from '../View'
import Theme from '../Theme'

const styles = (backgroundColor: string) =>
  css({
    backgroundColor,
    display: 'inline-block',
    borderRadius: 10,
    padding: '2px 15px',
    cursor: 'default',
  })

/**
 * Pills 💊 are used to show status or to highlight a piece of information.
 * It could be used on cards to indicate that this card contains important information.
 *
 * ```example
 * <ThemeProvider>
 *   <View>
 *     <Pill label="Important message" color="primary" />
 *     <Pill label="A warning" color="warn" />
 *   </View>
 * </ThemeProvider>
 * ```
 */
const Pill: FunctionComponent<IPillProps> = ({
  color = 'primary',
  label,
  ...props
}) => {
  return (
    <Theme>
      {({ colorize }) => (
        <View {...styles(colorize(color))} {...props}>
          <Text size="s" color="textOnBackground" strong>
            {label}
          </Text>
        </View>
      )}
    </Theme>
  )
}

interface IPillProps extends IViewProps {
  /** Text that shows on the pill **/
  label: string
  /** Themed color of the pill **/
  color?: string
}

export default Pill

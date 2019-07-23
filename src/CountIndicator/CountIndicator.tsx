import React, { FunctionComponent } from 'react'
import Circle from '../Circle'
import Text from '../Text'
import Absolute, { IAbsoluteProps } from '../Absolute'
import Theme from '../Theme'

/**
 * CountIndicator are used to indicated changes or updates. They can also be
 * used to inform user about new or unseen information that are available
 *
 * ```example
 * <ThemeProvider>
 *   <Relative>
 *     <Text>Hello</Text>
 *     <CountIndicator top={0} left={35} count={123} />
 *   </Relative>
 * </ThemeProvider>
 * ```
 **/
const CountIndicator: FunctionComponent<ICountIndicatorProps> = ({
  count,
  color = 'warn',
  ...props
}) =>
  count === 0 ? null : (
    <Theme>
      {({ colorize }) => (
        <Absolute {...props}>
          <Circle color={color ? colorize(color) : color} radius={18}>
            <Text size="xs" color="white">
              {count > 9 ? '9+' : count}
            </Text>
          </Circle>
        </Absolute>
      )}
    </Theme>
  )

interface ICountIndicatorProps extends IAbsoluteProps {
  /** Number to display */
  readonly count: number
  /** Color */
  readonly color?: string
}

export default CountIndicator

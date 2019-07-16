import React, { FunctionComponent } from 'react'
import { css } from 'glamor'

import Text from '../Text'
import Icon from '../Icon'
import { IViewProps } from '../View'
import Theme from '../Theme'
import Absolute from '../Absolute'
import Relative from '../Relative'

const styles = (backgroundColor: string, hasRemoveIcon: boolean) =>
  css({
    backgroundColor,
    borderRadius: hasRemoveIcon ? 10 : 10,
    cursor: 'default',
    height: 21,
    padding: '0 10px',
    paddingLeft: 10,
    paddingRight: hasRemoveIcon ? 25 : 10,
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
  onRemoveClick,
  ...props
}) => {
  return (
    <Theme>
      {({ colorize }) => (
        <Relative
          alignH="center"
          alignV="center"
          direction="column"
          {...styles(colorize(color), !!onRemoveClick)}
          {...props}
        >
          <Text size="s" color="textOnBackground" strong block>
            {label}
          </Text>
          {onRemoveClick && (
            <Absolute
              right={6}
              top={-2}
              {...css({ padding: 2 })}
              onClick={onRemoveClick}
            >
              <Icon
                {...css({ margin: '0px 0px 5px 7px' })}
                name="remove-light-filled"
                color={colorize('white')}
                size={8}
              />
            </Absolute>
          )}
        </Relative>
      )}
    </Theme>
  )
}

interface IPillProps extends IViewProps {
  /** Text that shows on the pill **/
  label: string
  /** Themed color of the pill **/
  color?: string
  /** Themed color of the pill **/
  onRemoveClick?: () => void
}

export default Pill

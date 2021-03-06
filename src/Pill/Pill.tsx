import { css } from 'glamor'
import React from 'react'
import Absolute from '../Absolute'
import Icon from '../Icon'
import Relative from '../Relative'
import Text from '../Text'
import { useTheme } from '../Theme'
import { IViewProps } from '../View'

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
const Pill = ({
  color = 'primary',
  label,
  onRemoveClick,
  ...props
}: IPillProps) => {
  const { colorize } = useTheme()
  return (
    <Relative
      alignH="center"
      alignV="center"
      direction="column"
      {...styles(colorize(color), !!onRemoveClick)}
      {...props}
    >
      <Text size="s" color="textOnBackground" weight="semi-bold" block>
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
  )
}

interface IPillProps extends IViewProps {
  /** Text that shows on the pill **/
  readonly label: string
  /** Color of the pill **/
  readonly color?: string
  /** Passing the callback will show a remove icon **/
  readonly onRemoveClick?: () => void
}

export default Pill

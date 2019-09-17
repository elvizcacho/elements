import * as React from 'react'
import Circle from '../Circle'
import { Motion, spring } from 'react-motion'
import Icon from '../Icon'
import { color } from '../utils/propTypes/color'
import { IViewProps } from '../View'

interface ICheckmarkProps {
  readonly checked: boolean
  readonly disabled: boolean
  readonly color: color
}

const Checkmark: React.FC<ICheckmarkProps & IViewProps> = ({
  checked = false,
  disabled,
  color,
  onClick,
  ...props
}) => {
  const currentColor = disabled ? 'grey' : color || 'primary'
  return (
    <Motion
      defaultStyle={{ size: 21.5 }}
      style={{
        size: spring(checked ? 21.5 : 10, {
          stiffness: 180,
          damping: 12,
        }),
      }}
    >
      {style => (
        <Circle
          outline
          fill={checked}
          outlineColor={currentColor}
          color={currentColor}
          onClick={disabled ? undefined : onClick}
          {...props}
        >
          {checked && (
            <Icon size={style.size} name="check-filled" color="white" />
          )}
        </Circle>
      )}
    </Motion>
  )
}

export default Checkmark

import React, { FunctionComponent } from 'react'
import Circle from '../atoms/Circle'
import { Motion, spring } from 'react-motion'
import Icon from '../atoms/Icon'
import { color } from '../propTypes/color'
import { IViewProps } from '../atoms/View'

interface ICheckmarkProps {
  checked: boolean
  disabled: boolean
  color: color
}

const Checkmark: FunctionComponent<ICheckmarkProps & IViewProps> = ({
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

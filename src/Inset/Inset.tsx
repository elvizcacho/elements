import { css } from 'glamor'
import React from 'react'
import View, { IViewProps } from '../View'

const styles = ({ horizontal = false, vertical = false }) =>
  css({
    paddingLeft: horizontal && 15,
    paddingRight: horizontal && 15,
    paddingTop: vertical && 15,
    paddingBottom: vertical && 15,
  })

interface IInsetProps extends IViewProps {
  readonly horizontal?: boolean
  readonly vertical?: boolean
}

const Inset = ({
  horizontal = true,
  vertical,
  ...props
}: IViewProps & IInsetProps) => (
  <View {...styles({ horizontal, vertical })} {...props} />
)

export default Inset

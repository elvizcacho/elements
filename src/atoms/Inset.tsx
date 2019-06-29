import React from 'react'
import View, { IViewProps } from '../atoms/View'
import { css } from 'glamor'

const styles = ({ horizontal = false, vertical = false }) =>
  css({
    paddingLeft: horizontal && 15,
    paddingRight: horizontal && 15,
    paddingTop: vertical && 15,
    paddingBottom: vertical && 15,
  })

const Inset = ({
  horizontal = true,
  vertical,
  ...props
}: IViewProps & { horizontal?: boolean; vertical?: boolean }) => (
  <View {...styles({ horizontal, vertical })} {...props} />
)

export default Inset

import React, { FunctionComponent } from 'react'
import View, { IViewProps } from '../atoms/View'
import { css } from 'glamor'

const styles = ({ horizontal = false, vertical = false }) =>
  css({
    paddingLeft: horizontal && 15,
    paddingRight: horizontal && 15,
    paddingTop: vertical && 15,
    paddingBottom: vertical && 15,
  })

interface IInsetProps extends IViewProps {
  horizontal?: boolean
  vertical?: boolean
}

const Inset: FunctionComponent<IViewProps & IInsetProps> = ({
  horizontal = true,
  vertical,
  ...props
}) => <View {...styles({ horizontal, vertical })} {...props} />

export default Inset

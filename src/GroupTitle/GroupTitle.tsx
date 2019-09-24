import React, { PropsWithChildren } from 'react'
import Inset from '../Inset'
import Text from '../Text'

const GroupTitle = ({ children }: PropsWithChildren<{}>) => (
  <Inset horizontal vertical>
    <Text size="l" strong color="titleColor">
      {children}
    </Text>
  </Inset>
)

export default GroupTitle

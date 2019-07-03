import React, { PropsWithChildren } from 'react'

import Inset from '../atoms/Inset'
import Text from '../atoms/Text'

const GroupTitle = ({ children }: PropsWithChildren<{}>) => (
  <Inset horizontal vertical>
    <Text size="l" strong color="titleColor">
      {children}
    </Text>
  </Inset>
)

export default GroupTitle

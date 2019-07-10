import React, { FunctionComponent } from 'react'

import Inset from '../atoms/Inset'
import Text from '../atoms/Text'

const GroupTitle: FunctionComponent = ({ children }) => (
  <Inset horizontal vertical>
    <Text size="l" strong color="titleColor">
      {children}
    </Text>
  </Inset>
)

export default GroupTitle

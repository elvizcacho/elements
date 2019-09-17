import * as React from 'react'
import Inset from '../Inset'
import Text from '../Text'

const GroupTitle: React.FC = ({ children }) => (
  <Inset horizontal vertical>
    <Text size="l" strong color="titleColor">
      {children}
    </Text>
  </Inset>
)

export default GroupTitle

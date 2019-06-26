import React from 'react'
import PropTypes from 'prop-types'

import Inset from '../atoms/Inset'
import Text from '../atoms/Text'

const GroupTitle = ({ children }) => (
  <Inset horizontal vertical>
    <Text size="l" strong color="titleColor">
      {children}
    </Text>
  </Inset>
)

GroupTitle.propTypes = {
  children: PropTypes.node,
}

export default GroupTitle

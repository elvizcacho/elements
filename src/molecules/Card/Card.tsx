import React, { FunctionComponent } from 'react'
import View, { IViewProps } from '../../atoms/View'
import { css } from 'glamor'

const style = css({
  width: '100%',
  background: 'white',
  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.05)',
})

/**
 * Cards can be used to group related content
 *
 * ```example
 * <Card>
 *  <CardContent>
 *    <Text size="xl" strong>
 *      Cards
 *    </Text>
 *    <Text>
 *      Cards are the basic elements to fit content in. They can may
 *      contain any kind of content.
 *    </Text>
 *  </CardContent>
 * </Card>
 * ```
 */
const Card: FunctionComponent<IViewProps> = props => (
  <View {...style} {...props} />
)

export default Card

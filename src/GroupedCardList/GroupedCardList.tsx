import * as React from 'react'
import CardList from '../CardList'
import View, { IViewProps } from '../View'
import GroupTitle from '../GroupTitle'

const GroupedCardList: React.FC<IGroupedCardListProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <View {...rest}>
      <GroupTitle>{title}</GroupTitle>
      <CardList>{children}</CardList>
    </View>
  )
}

interface IGroupedCardListProps extends IViewProps {
  /** The title for the CardList */
  title: string
}

export default GroupedCardList
